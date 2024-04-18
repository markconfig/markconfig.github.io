import { m } from 'framer-motion';
import NextLink from 'next/link';
// @mui
import { styled, /*useTheme*/ } from '@mui/material/styles';
import { Button, Box, Container, Typography, Stack } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import { MotionContainer, varFade } from '../../components/animate';
import SocialsButton from '../../components/SocialsButton';
import { PATH_SOCIAL_NETWORK, PATH_MENU } from '../../routes/paths';
// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  // backgroundColor: theme.palette.grey[400] ,
  // backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 400 : 800],
  backgroundColor: theme.palette.mode,
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

// const HeroOverlayStyle = styled(m.img)({
//   zIndex: 9,
//   width: '100%',
//   height: '100%',
//   objectFit: 'cover',
//   position: 'absolute',
// });

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  // zIndex: 8,
  zIndex: 8,
  opacity: '0 !important', //TEMP Se modificara despues para redimensionar la imagen de vienvenidad
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
    opacity: '1 !important',//TEMP Se modificara despues para redimensionar la imagen de vienvenidad
  },
}));

// ----------------------------------------------------------------------

export default function HomeMarkconfig() {

  return (
    <MotionContainer>
      <RootStyle>

        <HeroImgStyle
          alt="hero"
          // src="https://minimal-assets-api.vercel.app/assets/images/home/hero.png"
          src={'/logo/markconfig.svg'}
          variants={varFade().inUp}
        />

        <Container>
          <ContentStyle>
            <m.div variants={varFade().inRight}>
              <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                Markconfig
              </Typography><br />

              <Typography variant="h1"
              >
                Desarrollador<br />
                De software

              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
              >
                Java, Spring Boot, React, NextJs, Javascript, MySQL, Arduino
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <NextLink href={PATH_MENU.aboutMe} passHref>
                <Button
                  size="large"
                  variant="contained"
                  startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
                >
                  Sobre mí
                </Button>
              </NextLink>
            </m.div>

            <Stack spacing={2.5}>

              <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>

                <SocialsButton initialColor={true} simple={true} links={PATH_SOCIAL_NETWORK} sx={{ mx: 0.5 }} />
              </Stack>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
