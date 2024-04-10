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
import MetaTag from '../components/MetaTag';

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

// const generateMetaInfo = () => (
//   <>
//     <meta name="description" content="Sitio web, portafolio, contacto y blog de Markconfig" />
//     <meta name="author" content="@markconfig" />
//     <meta name="keywords" content="web,frontend,backend,javascript,java,springboot,react,developer,desarrollador,software" />
//     {/* Og properties */}
//     <meta property="og:image" content={`${HOST_NAME}/logo/og/markconfig.png`} />
//     <meta property="og:description" content="Sitio web, portafolio, contacto y blog de Markconfig" />
//     <meta property='og:type' content='website' />
//     <meta property='og:title' content='Markconfig - Desarrollador de software, Java, Spring Boot, React, NextJs, Javascript, MySQL, Arduino' />
//     <meta property='og:site_name' content='Markconfig' />
//     <meta property='og:url' content={`${HOST_NAME}/`} />
//     <meta property='og:image:alt' content='Logotipo Markconfig' />
//     {/*Twitter conf */}
//     <meta name='twitter:card' content='summary' />
//     <meta name='twitter:url' content={`${HOST_NAME}/`} />
//     <meta name='twitter:title'
//       content='Markconfig - Desarrollador de software, Java, Spring Boot, React, NextJs, Javascript, MySQL, Arduino' />
//     <meta name='twitter:description' content='Sitio web, portafolio, contacto y blog de Markconfig' />
//     <meta name='twitter:creator' content='@Markconfig' />
//     {/*         En esta etiqueta se tiene que editar la url de la imagen haciendoa coincidir con el host*/}
//     <meta property="twitter:image" content={`${HOST_NAME}/logo/og/markconfig.png`} />
//   </>
// );

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Inicio" meta={<MetaTag page='home' />}>
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
