export const PATH_MENU = {
  home: '/',
  portfolio: '/#portfolio',
  aboutMe: '/#aboutMe',
  contact: '/#contact',
  recognitions: '/#recognitions',
  blog: {
    root: '/blog',
    posts: '/blog',
    new: '/blog/new',
    view: (title) => `/blog/${title}`,
    demoView: '/blog/post/apply-these-7-secret-techniques-to-improve-event',
  },
}
// ----------------------------------------------------------------------
export const PATH_SOCIAL_NETWORK = {
  telegram: 'https://www.telegram.com/markconfig',
  x: 'https://www.twitter.com/markconfig',
  twitter: 'https://www.twitter.com/markconfig',
  github: 'https://www.github.com/markconfig',
  linkedin: 'https://www.linkedin.com/in/marcos-cruz-reyes-7b1031178',
  instagram: 'https://www.instagram.com/markconfig',
  facebook: 'https://www.facebook.com/markconfig.dev',
  youtube: 'https://www.youtube.com/@markconfig/',
  gitlab: 'https://www.gitlab.com/markconfig/',
  threads: 'https://www.threads.net/@markconfig/',
  blog: PATH_MENU.blog.root,
}