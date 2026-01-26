import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
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
  BlogPostRecent
} from '../../../sections/blog';

import { blogDescription, META_TAGS } from '../../../config';
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

  const [recentPosts, setRecentPosts] = useState(latestPosts);

  const [post, setPost] = useState(null);

  const [error, setError] = useState(null);
  
  const generateMetaInfo = (postInfo, page) => (
    <>
      <meta name="description" content={postInfo.description} key={META_TAGS.description.key} />
      <meta name="author" content={META_TAGS.author[page]} key={META_TAGS.author.key} />
      <meta name="keywords" content={postInfo?.tags.map((tag) => tag)} key={META_TAGS.keywords.key} />
      {/* Og properties */}
      <meta property="og:image" content={postInfo.cover} key={META_TAGS.og.image.key} />
      <meta property="og:description" content={postInfo.description} key={META_TAGS.og.description.key} />
      <meta property="og:type" content={"article"} key={META_TAGS.og.type.key} />
      <meta property="og:title" content={postInfo.title} key={META_TAGS.og.title.key} />
      <meta property="og:site_name" content={`${postInfo.title} - Blog | Markconfig`} key={META_TAGS.og.siteName.key} />
      <meta property='og:url' content={`${META_TAGS.og.url[page]}${postInfo?.slug}/`} key={META_TAGS.og.url.key} />
      <meta property='og:image:alt' content={postInfo.altCover} key={META_TAGS.og.imageAlt} />
      {/*Twitter conf */}
      <meta name='twitter:card' content={META_TAGS.tw.card[page]} key={META_TAGS.tw.card.key} />
      <meta name='twitter:url' content={`${META_TAGS.tw.url[page]}${postInfo?.slug}/`} key={META_TAGS.tw.url.key} />
      <meta property="twitter:title" content={postInfo.title} key={META_TAGS.tw.title.key} />
      <meta name='twitter:description' content={postInfo.description} key={META_TAGS.tw.description.key} />
      <meta name='twitter:creator' content={META_TAGS.tw.creator[page]} key={META_TAGS.tw.creator.key} />
      {/*         En esta etiqueta se tiene que editar la url de la imagen haciendoa coincidir con el host*/}
      <meta property="twitter:image" content={postInfo.cover} key={META_TAGS.tw.image.key} />
    </>
  );

  useEffect(() => {
    if (currentPost != undefined && currentPost != null) {
      setPost(currentPost);
    }
  }, [currentPost]);

  return (
    // <Page title="Blog: Post Details">
    <Page title={post ? post.title + " - Blog" : 'blog'} meta={generateMetaInfo(currentPost, 'blogHome')} >
      <RootStyle>
        <ContentStyle>
          <Container maxWidth={themeStretch ? false : 'lg'}>
            <HeaderBreadcrumbs
              heading={blogDescription}
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

                  <Markdown children={post.body} aspectRatioForBodyImage={post.aspectRatioForBodyImage}/>

                  <Box sx={{ my: 5 }}>
                    <Divider />
                    <BlogPostTags post={post} />
                    <Divider />
                  </Box>
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