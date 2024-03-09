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

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Inicio">
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
