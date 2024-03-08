import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Box, Card, Divider, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// routes
import { PATH_MENU } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
// utils
import { getPostBySlug, getAllPosts, getRecentPosts } from '../../../utils/lib/api';
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import Markdown from '../../../components/Markdown';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import { SkeletonPost } from '../../../components/skeleton';
// sections
import {
  BlogPostHero,
  BlogPostTags,
  BlogPostRecent,
  // BlogPostCommentList,
  // BlogPostCommentForm,
} from '../../../sections/blog';

import { HOST_NAME } from '../../../config';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(12, 0),
}));


const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// 
// ----------------------------------------------------------------------

BlogPost.getLayout = function getLayout(page) {
  return <Layout variant='main' >{page}</Layout>;
};

// ----------------------------------------------------------------------
BlogPost.propTypes = {
  currentPost: PropTypes.object,
  latestPosts: PropTypes.array,
};

export default function BlogPost({ currentPost, latestPosts }) {
  const { themeStretch } = useSettings();

  // const { query } = useRouter();

  // const { title } = query;

  const [recentPosts, setRecentPosts] = useState(latestPosts);

  const [post, setPost] = useState(currentPost);

  const [error, setError] = useState(null);

  // const getPost = useCallback(async () => {
  //   try {
  //     // const response = await axios.get('/api/blog/post', {
  //     //   params: { title },
  //     // });

  //     const response = getPostBySlug(params.slug);

  //     if (isMountedRef.current) {
  //       // setPost(response.data.post);
  //        setPost(response);

  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setError(error.message);
  //   }
  // }, [isMountedRef/*, title*/]);


  const generateMetaInfo = (postInfo) => {
    <>
      <meta name="description" content={postInfo.description} />
      <meta name="keywords" content={postInfo?.tags.map((tag) => tag)} />
      {/* http://ogp.me/ */}
      <meta property="og:image" content={postInfo.cover} />
      <meta property="og:description" content={postInfo.description} />
      <meta property="og:type" content={"article"} />
      <meta property="og:title" content={postInfo.title} />
      <meta property="og:site_name" content="Blog | Markconfig" />
      <meta property='og:url' content={`${HOST_NAME}/`} />
      <meta property='og:image:alt' content={postInfo.altCover} />
      {/*Twitter conf */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:url' content={`${HOST_NAME}/blog/`} />
      <meta name='twitter:description' content={postInfo.description} />
      <meta name='twitter:creator' content='@Markconfig' />
      <meta property="twitter:image" content={postInfo.cover} />
      <meta property="twitter:title" content={postInfo.title} />
      {/* <meta property="og:image:width" content="{{ page.image.width }}" />
        <meta property="og:image:height" content="{{ page.image.height }}" /> */}
    </>
  }

  // const getRecentPosts = useCallback(async () => {
  //   try {
  //     const response = await axios.get('/api/blog/posts/recent', {
  //       params: { currentPost/*title*/, },
  //     });

  //     if (isMountedRef.current) {
  //       setRecentPosts(response.data.recentPosts);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [isMountedRef, /*title*/]);

  // useEffect(() => {
  //   // getPost();
  //   getRecentPosts();
  // }, [getRecentPosts, /*getPost*/]);

  return (
    // <Page title="Blog: Post Details">
    <Page title={post ? post.title : 'blog'} meta={generateMetaInfo(currentPost)} >
      <RootStyle>
        <ContentStyle>
          <Container maxWidth={themeStretch ? false : 'lg'}>
            <HeaderBreadcrumbs
              heading="Un pequeño blog, en donde se habla de lo que sea."
              links={[
                { name: 'Inicio', href: PATH_MENU.home },
                { name: 'Blog', href: PATH_MENU.blog.root },
                { name: post?.title },
              ]}
            />

            {post && (
              <Card>
                <BlogPostHero post={post} />
                <Box sx={{ p: { xs: 3, md: 5 } }}>
                  <Typography variant="h6" sx={{ mb: 5 }}>
                    {post.description}
                  </Typography>

                  <Markdown children={post.body} />

                  <Box sx={{ my: 5 }}>
                    <Divider />
                    <BlogPostTags post={post} />
                    <Divider />
                  </Box>

                  {/* <Box sx={{ display: 'flex', mb: 2 }}>
                    <Typography variant="h4">Comments</Typography>
                    <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                      ({post.comments.length}) 
                    </Typography>
                  </Box> */}

                  {/* <BlogPostCommentList post={post} /> */}

                  {/* <Box sx={{ mb: 5, mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                    <Pagination count={8} color="primary" />
                  </Box>

                  <BlogPostCommentForm /> */}
                </Box>
              </Card>
            )}

            {!post && !error && <SkeletonPost />}

            {error && <Typography variant="h6">404 {error}!</Typography>}

            {recentPosts &&
              <BlogPostRecent posts={recentPosts} />}
          </Container>
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  const latestPosts = await getRecentPosts(5);
  return {
    props: { currentPost: post, latestPosts: latestPosts },
  };
}


// export async function generateStaticParams() {
//   const posts = getAllPosts();

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

export async function getStaticPaths() {
  const posts = getAllPosts();
  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  // {fallback: false } means other routes should 404
  return { paths, fallback: false }
}