import { m } from 'framer-motion';
import NextLink from 'next/link';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack } from '@mui/material';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
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

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  // zIndex: 8,
  zIndex: 8,
  opacity:'0 !important', //TEMP Se modificara despues para redimensionar la imagen de vienvenidad
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
    opacity:'1 !important',//TEMP Se modificara despues para redimensionar la imagen de vienvenidad
  },
}));

// ----------------------------------------------------------------------

export default function HomeMarkconfig() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';
  return (
    <MotionContainer>
      <RootStyle>
        {/* <HeroOverlayStyle
          alt="overlay"
          // src="https://minimal-assets-api.vercel.app/assets/overlay.svg"
          src="/images/overlay_3."
          variants={varFade().in}
          
        /> */}

        <HeroImgStyle
          alt="hero"
          // src="https://minimal-assets-api.vercel.app/assets/images/home/hero.png"
          src={'/logo/markconfig.svg'}
          variants={varFade().inUp}
        />

        <Container>
          <ContentStyle>
            <m.div variants={varFade().inRight}>
              {/* <Typography variant="h1" sx={{ color: 'common.white' }}>
                Start a <br />
                new project <br /> with
                <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                  &nbsp;Minimal
                </Typography> */}
              <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                Markconfig
              </Typography><br />

              <Typography variant="h1"
              // sx={{ color: isLight === 'light' ? 'common.black' : 'common.white' }}
              >
                Desarrollador<br />
                De software

              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
              // sx={{ color: 'text.white' }}
              >
                Java, Spring Boot, React, NextJs, Javascript, MySQL, Arduino
              </Typography>
            </m.div>

            {/* <Stack spacing={2.5} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
              <m.div variants={varFade().inRight}>
                <TextIconLabel
                  icon={
                    <Image
                      alt="sketch icon"
                      src="https://minimal-assets-api.vercel.app/assets/images/home/ic_sketch_small.svg"
                      sx={{ width: 20, height: 20, mr: 1 }}
                    />
                  }
                  value={
                    <Link
                      href="https://www.sketch.com/s/76388a4d-d6e5-4b7f-8770-e5446bfa1268"
                      target="_blank"
                      rel="noopener"
                      // color="common.white"
                      sx={{ typography: 'body2' }}
                    >
                      Preview Sketch
                    </Link>
                  }
                />
              </m.div>

              <m.div variants={varFade().inRight}>
                <TextIconLabel
                  icon={
                    <Image
                      alt="sketch icon"
                      src="https://minimal-assets-api.vercel.app/assets/images/home/ic_figma_small.svg"
                      sx={{ width: 20, height: 20, mr: 1 }}
                    />
                  }
                  value={
                    <Link
                      href="https://www.figma.com/file/x7earqGD0VGFjFdk5v2DgZ/%5BPreview%5D-Minimal-Web?node-id=866%3A55474"
                      target="_blank"
                      rel="noopener"
                      // color="common.white"
                      sx={{ typography: 'body2' }}
                    >
                      Preview Figma
                    </Link>
                  }
                />
              </m.div>
            </Stack> */}

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
              {/* <m.div variants={varFade().inRight}>
                <Typography variant="overline" sx={{ color: 'primary.light' }}>
                  Available For
                </Typography>
              </m.div> */}

              <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                {/* {['ic_sketch', 'ic_figma', 'ic_js', 'ic_ts', 'ic_nextjs'].map((resource) => (
                  <m.img
                    key={resource}
                    variants={varFade().inRight}
                    src={`https://minimal-assets-api.vercel.app/assets/images/home/${resource}.svg`}
                  />
                ))} */}

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
