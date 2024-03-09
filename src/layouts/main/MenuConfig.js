// routes
import { PATH_MENU } from '../../routes/paths';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [

  {
    title: 'Inicio',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'Sobre mí',
    icon: <Iconify icon={'mdi:about'} {...ICON_SIZE} />,
    path: PATH_MENU.aboutMe,
  },
  {
    title: 'Portafolio',
    icon: <Iconify icon={'zondicons:portfolio'} {...ICON_SIZE} />,
    path: PATH_MENU.portfolio,
  },
  {
    title: 'Reconocimientos',
    icon: <Iconify icon={'solar:diploma-bold'} {...ICON_SIZE} />,
    path: PATH_MENU.recognitions,
  },
  {
    title: 'Contacto',
    icon: <Iconify icon={'bxs:contact'} {...ICON_SIZE} />,
    path: PATH_MENU.contact,
  },
  {
    title: 'Mí blog',
    icon: <Iconify icon={'mdi:blog'} {...ICON_SIZE} />,
    path: PATH_MENU.blog.root,
  },

];

export default menuConfig;
