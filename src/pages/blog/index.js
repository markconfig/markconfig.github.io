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
import { META_TAGS } from '../../config';
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

  const generateMetaInfo = (page) => (
    <>
      <meta name="description" content={page} key={page} />
      <meta name="author" content={META_TAGS.author[page]} key={META_TAGS.author.key} />
      <meta name="keywords" content={META_TAGS.keywords[page]} key={META_TAGS.keywords.key} />
      {/* Og properties */}
      <meta property="og:image" content={META_TAGS.og.image[page]} key={META_TAGS.og.image.key} />
      <meta property="og:description" content={META_TAGS.og.description[page]} key={META_TAGS.og.description.key} />
      <meta property="og:type" content={META_TAGS.og.type[page]} key={META_TAGS.og.type.key} />
      <meta property="og:title" content={META_TAGS.og.title[page]} key={META_TAGS.og.title.key} />
      <meta property="og:site_name" content={META_TAGS.og.siteName[page]} key={META_TAGS.og.siteName.key} />
      <meta property='og:url' content={META_TAGS.og.url[page]} key={META_TAGS.og.url.key} />
      <meta property='og:image:alt' content={META_TAGS.og.imageAlt[page]} />
      {/*Twitter conf */}
      <meta name='twitter:card' content={META_TAGS.tw.card[page]} key={META_TAGS.tw.card.key} />
      <meta name='twitter:url' content={META_TAGS.tw.url[page]} key={META_TAGS.tw.url.key} />
      <meta property="twitter:title" content={META_TAGS.tw.title[page]} key={META_TAGS.tw.title.key} />
      <meta name='twitter:description' content={META_TAGS.tw.description[page]} key={META_TAGS.tw.description.key} />
      <meta name='twitter:creator' content={META_TAGS.tw.creator[page]} key={META_TAGS.tw.creator.key} />
      {/*         En esta etiqueta se tiene que editar la url de la imagen haciendoa coincidir con el host*/}
      <meta property="twitter:image" content={META_TAGS.tw.image[page]} key={META_TAGS.tw.image.key} />

    </>
  );

  return (
    <Page title="Blog"
      meta={generateMetaInfo('blogHome')}
    >
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
