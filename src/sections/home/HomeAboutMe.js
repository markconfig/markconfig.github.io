import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(24, 0),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0,
  },
}));

const ScreenStyle = styled(m.div)(({ theme }) => ({
  paddingRight: 2,
  paddingBottom: 1,
  maxWidth: 160,
  borderRadius: 5,
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
  [theme.breakpoints.up('sm')]: {
    maxWidth: 320,
    paddingRight: 4,
    borderRadius: 12,
  },
  '& img': {
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 12,
    },
  },
}));

// const COMMON = {
//   scaleX: 0.86,
//   skewY: 8,
//   skewX: 0,
//   scaleY: 1,
//   translateX: 0,
//   translateY: 0,
//   opacity: 0,
// };


// const variantScreenLeft = {
//   initial: COMMON,
//   animate: { ...COMMON, translateX: '-50%', translateY: 40, opacity: 1 },
// };
// const variantScreenCenter = {
//   initial: COMMON,
//   animate: { ...COMMON, opacity: 1 },
// };
// const variantScreenRight = {
//   initial: COMMON,
//   animate: { ...COMMON, translateX: '50%', translateY: -40, opacity: 1 },
// };

const variantScreenNormal = {
  initial: { opacity: 0, },
  animate: { translateX: '50%', opacity: 1 },
};

// ----------------------------------------------------------------------

export default function HomeAboutMe() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  const isRTL = theme.direction === 'rtl';

  // const screenLeftAnimate = variantScreenLeft;

  // const screenCenterAnimate = variantScreenCenter;

  // const screenRightAnimate = variantScreenRight;

  const screenNormalAnimate = variantScreenNormal;


  return (
    <RootStyle id={'aboutMe'}>
      <Container component={MotionViewport}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <ContentStyle>
              <m.div variants={varFade().inUp}>
                <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
                  ¿Quieres conocerme?
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h2" >
                  Sobre mí
                </Typography>
                {/* <Typography component="span" variant="h2" sx={{ color: 'primary.main', mb: 3  }}>
                  Markconfig
                </Typography> */}
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? 'text.secondary' : 'common.white',
                  }}
                >
                  Soy Marcos, Ingeniero Informático egresado del TecNM Campus Acatlán de Osorio, Puebla.
                  <br />
                  He aplicando conocimiento que he adquirido durante mi formación profesional. He tenido experiencia comprobada en la creación y diseño de software. Me gustan los retos y aprender de este gran mundo tecnológico porque soy firme con mis desiciones.
                  <br />
                  He trabajado con las siguientes tecnologias, lenguajes, herramientas: Java (Principalmente), Spring Boot, Bases de datos con MySQL, React/NextJs, web (html, css yJavascript), PHP, Adobe Ilustrator, Domótica con Arduino, Linux, Despliegue de aplicaciones en VPS con la plataforma de Digital Ocean, etc.
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Button
                  size="large"
                  color="primary"
                  variant="outlined"
                  target="_blank"
                  rel="noopener"
                  href="/assets/download/CV_MarcosCruzReyes.pdf"
                >
                  ¡Descargar mi CV!
                </Button>
              </m.div>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={8} dir="ltr">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                justifyContent: 'center',
              }}
            >
              {/* {[...Array(3)].map((_, index) => (
                <ScreenStyle
                  key={index}
                  variants={{
                    ...(index === 0 && screenLeftAnimate),
                    ...(index === 1 && screenCenterAnimate),
                    ...(index === 2 && screenRightAnimate),
                  }}
                  transition={{ duration: 0.72, ease: 'easeOut' }}
                  sx={{
                    boxShadow: `${isRTL ? -80 : 80}px -40px 80px ${alpha(
                      isLight ? theme.palette.grey[600] : theme.palette.common.black,
                      0.48
                    )}`,
                    ...(index === 0 && {
                      zIndex: 3,
                      position: 'absolute',
                    }),
                    ...(index === 1 && { zIndex: 2 }),
                    ...(index === 2 && {
                      zIndex: 1,
                      position: 'absolute',
                      boxShadow: 'none',
                    }),
                  }}
                >
                  <Image
                    disabledEffect
                    alt={`screen ${index + 1}`}
                    // src={`https://minimal-assets-api.vercel.app/assets/images/home/screen_${isLight ? 'light' : 'dark'
                    //   }_${index + 1}.png`}
                    src={`/images/screen_light_${index + 1}.png`}
                  />
                </ScreenStyle>
              ))} */}


              <ScreenStyle
                key={'screen-markconfig1'}
                variants={{
                  ...(screenNormalAnimate),
                }}
                transition={{ duration: 0.72, ease: 'easeOut' }}
                sx={{
                  boxShadow: `${isRTL ? -40 : 40}px -20px 80px ${alpha(
                    isLight ? theme.palette.grey[600] : theme.palette.common.black,
                    0.48
                  )}`,

                  ...({ zIndex: 2, }),

                }}
              >
                <Image
                  disabledEffect
                  alt={`screen markconfig`}
                  src={`/images/markconfig.jpg`}
                />
              </ScreenStyle>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
