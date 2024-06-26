// @mui
import { styled } from '@mui/material/styles';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import {
  HomeMarkconfig,
  HomePortfolio,
  HomeAboutMe,
  HomeContact,
  HomeRecognitions,
} from '../sections/home';
import { META_TAGS } from '../config';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  height: '100%',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

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
    <meta property='og:image:alt' content={META_TAGS.og.imageAlt[page]} key={META_TAGS.og.imageAlt}/>
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

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Inicio" meta={generateMetaInfo('home')} >
      <RootStyle>
        <HomeMarkconfig />
        <ContentStyle>
          <HomeAboutMe />
          <HomePortfolio />
          <HomeRecognitions />
          <HomeContact />
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}

