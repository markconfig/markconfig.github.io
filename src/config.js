// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88 -15,//Modificado para pantallas anchas 
  DASHBOARD_DESKTOP_HEIGHT: 92,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 280,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export const ICON = {
  NAVBAR_ITEM: 22,
  NAVBAR_ITEM_HORIZONTAL: 20,
};

// SETTINGS
// ----------------------------------------------------------------------

export const cookiesExpires = 3;

export const cookiesKey = {
  themeMode: 'themeMode',
  themeDirection: 'themeDirection',
  themeColorPresets: 'themeColorPresets',
  themeLayout: 'themeLayout',
  themeStretch: 'themeStretch',
};

export const defaultSettings = {
  themeMode: 'light',
  themeDirection: 'ltr',
  themeColorPresets: 'blue', // deafult
  themeLayout: 'horizontal',
  themeStretch: false,
};

export const HOST_NAME = process.env.HOST_NAME;
//For meta tags open graph
export const blogDescription = 'Un pequeño blog, en donde se habla de lo que sea';
const blogTitle = 'Blog';
const homeTitle = 'Markconfig - Desarrollador de software, Java, Spring Boot, React, NextJs, Javascript, MySQL, Arduino';
const homeDescription = 'Sitio web, portafolio, contacto y blog de Markconfig';
const author = '@markconfig'


/**
 *   og: Open Graph properties
 *   tw: Twitter Open Graph properties
 */
export const META_TAGS = {
  description: {
    home: homeDescription,
    blogHome: blogDescription,
    key: 'description',
  },
  author: {
    home: author,
    blogHome: author,
    key: 'author',
  },
  keywords: {
    home: 'web, frontend, backend, javascript, java, springboot, react, developer, desarrollador, software',
    blogHome: 'blog, markconfig, articulos, entretenimiento, poesía, reflexión',
    key: 'keywords',
  },
  og: {
    image: {
      home: `${HOST_NAME}/logo/og/markconfig.png`,
      blogHome: `${HOST_NAME}/logo/og/markconfig.png`,
      key: 'ogImage',
    },
    type: {
      home: 'website',
      blogHome: 'blog',
      key: 'ogType'
    },
    title: {
      home: homeTitle,
      blogHome: blogTitle,
      key: 'ogTitle'
    },
    description: {
      home: homeDescription,
      blogHome: blogDescription,
      key: 'ogDescription'
    },
    siteName: {
      home: 'Markconfig',
      blogHome: blogTitle,
      key: 'ogSiteName'
    },
    url: {
      home: `${HOST_NAME}/`,
      blogHome: `${HOST_NAME}/blog/`,
      key: 'ogUrl'
    },
    imageAlt: {
      home: 'Logotipo Markconfig',
      blogHome: 'Logotipo Markconfig blog',
      key: 'ogImageAlt'
    }
  },
  tw: {
    card: {
      home: 'summary',
      blogHome: 'summary',
      key: 'ogTwCard',
    },
    url: {
      home: `${HOST_NAME}/`,
      blogHome: `${HOST_NAME}/blog/`,
      key: 'ogTwUrl',
    },
    title: {
      home: homeTitle,
      blogHome: blogTitle,
      key: 'ogTwTitle',
    },
    description: {
      home: homeDescription,
      blogHome: blogDescription,
      key: 'ogTwDescription',
    },
    creator: {
      home: author,
      blogHome: author,
      key: 'ogTwCreator',
    },
    image: {
      home: `${HOST_NAME}/logo/og/markconfig.png`,
      blogHome: `${HOST_NAME}/logo/og/markconfig.png`,
      key: 'ogTwImage',
    }
  }
};