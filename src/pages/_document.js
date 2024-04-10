import * as React from 'react';
// next


import Document, { Html, Head, Main, NextScript } from 'next/document';
// emotion
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
// theme
// import palette from '../theme/palette';
import getColorPresets from '../utils/getColorPresets';
import { HOST_NAME } from '../config';
// ----------------------------------------------------------------------

function createEmotionCache() {
  return createCache({ key: 'css' });
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
     
          {/* PWA head meta */}
          <meta name='application-name' content='Markconfig' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Markconfig' />
          <meta name='description' content='Sitio web, portafolio, contacto y blog de Markconfig' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />

          {/* Favicon */}
          <link rel="icon" type="image/svg" href="/logo/markconfigIcon.svg" />
          {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" /> */}

          {/* Apple */}
          <link rel="apple-touch-icon" sizes="57x57" href="/logo/apple/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/logo/apple/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/logo/apple/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/logo/apple/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/logo/apple/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/logo/apple/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/logo/apple/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/logo/apple/apple-icon-180x180.png" />
          <link rel="mask-icon" href="/logo/apple/safari-pinned-tab.svg" color="#ffffff" />

          <link rel="shortcut icon" type="image/svg" href="/logo/markconfigIcon.svg" />
          {/* Manifest */}
          <link rel='manifest' href='/manifest.json' />
          {/* Microsoft */}
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-config" content="/logo/microsoft/browserconfig.xml" />
          <meta name="msapplication-TileImage" content="/logo/microsoft/ms-icon-144x144.png" />

          {/* <meta name="theme-color" content={palette.light.primary.main} /> */}
          <meta name="theme-color" content={getColorPresets('blue').main} />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// ----------------------------------------------------------------------

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
      (
        <CacheProvider value={cache}>
          <App {...props} />
        </CacheProvider>
      ),
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
  };
};
