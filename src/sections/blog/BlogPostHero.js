import PropTypes from 'prop-types';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Avatar, SpeedDial, Typography, SpeedDialAction } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { fDateExtend } from '../../utils/formatTime';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { HOST_NAME } from '../../config';

// ----------------------------------------------------------------------



const OverlayStyle = styled('h1')(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 9,
  position: 'absolute',
  backgroundColor: alpha(theme.palette.grey[900], 0.72),
}));

const TitleStyle = styled('h1')(({ theme }) => ({
  ...theme.typography.h2,
  top: 0,
  zIndex: 10,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3),
  color: theme.palette.common.white,
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(10),
  },
}));

const FooterStyle = styled('div')(({ theme }) => ({
  bottom: 0,
  zIndex: 10,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'flex-end',
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'center',
    paddingRight: theme.spacing(3),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

BlogPostHero.propTypes = {
  post: PropTypes.object.isRequired,
};

export default function BlogPostHero({ post }) {
  const { cover, title, author, createdAt, readingTime } = post;

  const isDesktop = useResponsive('up', 'sm');

  const SOCIALS = [
    {
      name: 'Facebook',
      icon: <Iconify icon="eva:facebook-fill" width={20} height={20} color="#1877F2" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${HOST_NAME}/blog/${post.slug}&amp;src=sdkpreparse&sfnsn=scwspwa`,
    },
    {
      name: 'Whatsapp',
      icon: <Iconify icon="logos:whatsapp-icon" width={20} height={20} color="#1faf38" />,
      url: `https://api.whatsapp.com/send?text=%C2%A1Que%20buen%20post%21%20de%20%40markconfig%20${HOST_NAME}/blog/${post.slug}`,
    },
    {
      name: 'X(Twitter)',
      icon: <Iconify icon="ri:twitter-x-fill" width={20} height={20} color="#000000" />,
      url: `https://twitter.com/intent/tweet?text=%C2%A1Que%20buen%20post%21%20de%20%40markconfig%20&url=${HOST_NAME}/blog/${post.slug}&hashtags=markconfigblog`,
    },
    {
      name: 'Linkedin',
      icon: <Iconify icon="eva:linkedin-fill" width={20} height={20} color="#006097" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${HOST_NAME}/blog/${post.slug}`,
    },

  ];

  return (
    <Box sx={{ position: 'relative' }}>
      <TitleStyle>{title}</TitleStyle>

      <FooterStyle>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar alt={author.name} src={author.avatarUrl} sx={{ width: 48, height: 48 }} />
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle1" sx={{ color: 'common.white' }}>
              {author.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.500' }}>
              {fDateExtend(createdAt)}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.500' }}>
              {`${readingTime?.min} minutos de lectura`}
            </Typography>
          </Box>
        </Box>

        <SpeedDial
          direction={isDesktop ? 'left' : 'up'}
          ariaLabel="Compartir post"
          icon={<Iconify icon="eva:share-fill" sx={{ width: 20, height: 20 }} />}
          sx={{ '& .MuiSpeedDial-fab': { width: 48, height: 48 } }}
        >
          {SOCIALS.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipPlacement="top"
              FabProps={{ color: 'default' }}
              href={action.url}
              target='_blank'
            />
          ))}
        </SpeedDial>
      </FooterStyle>

      <OverlayStyle />
      <Image alt="post cover" src={cover} ratio={isDesktop ? '16/9' : '3/4'} />
    </Box>
  );
}
