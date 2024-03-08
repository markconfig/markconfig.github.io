import PropTypes from 'prop-types';
import orderBy from 'lodash/orderBy';
import { useState } from 'react';
// @mui
import { Grid, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// hooks
import useSettings from '../../hooks/useSettings';
// routes
import { PATH_MENU } from '../../routes/paths';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import { SkeletonPostItem } from '../../components/skeleton';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import { BlogPostCard, BlogPostsSort, /*BlogPostsSearch*/ } from '../../sections/blog';
//api blogs
import { getAllPosts } from '../../utils/lib/api';
import { HOST_NAME, blogDescription, blogTitle } from '../../config';
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

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Más reciente' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Más antiguo' },
];

// ----------------------------------------------------------------------

BlogPosts.getLayout = function getLayout(page) {
  return <Layout variant='main'>{page}</Layout>;
};

// ----------------------------------------------------------------------

const applySort = (posts, sortBy) => {
  if (sortBy === 'latest') {
    return orderBy(posts, ['createdAt'], ['desc']);
  }
  if (sortBy === 'oldest') {
    return orderBy(posts, ['createdAt'], ['asc']);
  }
  if (sortBy === 'popular') {
    return orderBy(posts, ['view'], ['desc']);
  }
  return posts;
};

BlogPosts.propTypes = {
  AllPosts: PropTypes.array,
};
export default function BlogPosts({ AllPosts }) {
  const { themeStretch } = useSettings();

  const [posts, setPosts] = useState(AllPosts);

  const [filters, setFilters] = useState('latest');

  const sortedPosts = applySort(posts, filters);

  // const getAllPosts = useCallback(async () => {
  //   try {
  //     const response = await axios.get('/api/blog/posts/all');


  //     if (isMountedRef.current) {
  //       // setPosts(response.data.posts);
  //       setPosts(response);

  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [isMountedRef]);

  // useEffect(() => {
  //   getAllPosts();
  // }, [getAllPosts]);

  const handleChangeSort = (value) => {
    if (value) {
      setFilters(value);
    }
  };

  const generateMetaInfo = () => (
    <>
      <meta name="description" content={blogDescription} />
      <meta name="keywords" content={'Blog, Markconfig, Articulos, Entretenimiento, Poesía, Reflexión'} />
      {/* http://ogp.me/ */}
      <meta property="og:description" content={blogDescription} />
      <meta property="og:title" content={blogTitle} />
      <meta property="og:type" content={"website"} />
      <meta property="og:site_name" content="Blog | Markconfig" />
      <meta property='og:url' content={`${HOST_NAME}${PATH_MENU.blog.root}/`} />
      {/*Twitter conf */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:url' content={`${HOST_NAME}${PATH_MENU.blog.root}/`} />
      <meta name='twitter:description' content={blogDescription} />
      <meta name='twitter:creator' content='@Markconfig' />
      {/* <meta property="twitter:image" content={postInfo.cover} /> */}
      <meta property="twitter:title" content={blogTitle} />
    </>
  )

  return (
    <Page title="Markconfig Blog" meta={generateMetaInfo()} >
      <RootStyle>
        <ContentStyle>
          <Container maxWidth={themeStretch ? false : 'lg'}>
            <HeaderBreadcrumbs
              key={'Bposts'}
              heading="Markconfig blog"
              links={[
                { name: 'Inicio', href: PATH_MENU.home },
                { name: 'Blog', href: PATH_MENU.blog.root },
                { name: 'Posts' },
              ]}
            // action={
            //   <NextLink href={PATH_DASHBOARD.blog.new} passHref>
            //     <Button variant="contained" startIcon={<Iconify icon={'eva:plus-fill'} />}>
            //       New Post
            //     </Button>
            //   </NextLink>
            // }
            />
            <Stack mb={5} direction="row" alignItems="center" justifyContent="right"/*space-between */>
              {/* <BlogPostsSearch /> */}
              <BlogPostsSort query={filters} options={SORT_OPTIONS} onSort={handleChangeSort} />
            </Stack>

            <Grid container spacing={3}>
              {(posts != undefined && !posts.length ? [...Array(12)] : sortedPosts).map((post, index) =>
                post ? (
                  <Grid key={post.id} item xs={12} sm={6} md={(index === 0 && 6) || 3}>
                    <BlogPostCard post={post} index={index} />
                  </Grid>
                ) : (
                  <SkeletonPostItem key={index} />
                )
              )}
            </Grid>
          </Container>
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: { AllPosts: allPosts },
  };
}
