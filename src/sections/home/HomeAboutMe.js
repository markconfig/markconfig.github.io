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

const variantScreenNormal = {
  initial: { opacity: 0, },
  animate: { translateX: '50%', opacity: 1 },
};

// ----------------------------------------------------------------------

export default function HomeAboutMe() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  const isRTL = theme.direction === 'rtl';

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
                  alt={`Markconfig picture`}
                  src={`/images/avatar-picture.webp`}
                />
              </ScreenStyle>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
