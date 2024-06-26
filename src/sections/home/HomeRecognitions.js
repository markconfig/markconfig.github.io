import { useState } from 'react';
import { m } from 'framer-motion';
// @mui
import { alpha, /*useTheme,*/ styled } from '@mui/material/styles';
import { Box, Button, Card, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade, DialogAnimate } from '../../components/animate';
import ViewerPrintPdf from '../../components/ViewerPrintPdf';

// ----------------------------------------------------------------------

const CARDS = [
  {
    id: 0,
    icon: '/images/reconocimientos/09BC238D-C485-4193-8390-E0AD008F84C2.webp',
    srcPdf: '/assets/download/reconocimientos/09BC238D-C485-4193-8390-E0AD008F84C2.pdf',
    title: 'Título profesional',
    description:
      'Título de licenciatura en Ingeniería Informática. Nota: Se ha ocultado información personal sensible, si necesitas una copia completa contáctame markconfig.dev@gmail.com',
    links: [
      { name: 'FarmaReyes page', url: 'https://www.farmareyes.com/' },
      { name: 'App Farmareyes', url: 'https://app.farmareyes.com/' }
    ],
  },
  {
    id: 1,
    icon: '/images/reconocimientos/JuegaAprende160421.webp',
    srcPdf: '/assets/download/reconocimientos/JuegaAprende160421.pdf',
    title: 'Juega y aprende salvar vidas',
    description: 'Constancia por participación como Fearless Driver del proyecto "Juega y aprende a salvar vidas"',
  },
  {
    id: 2,
    icon: '/images/reconocimientos/Ingles261120.webp',
    srcPdf: '/assets/download/reconocimientos/Ingles261120.pdf',
    title: 'Ways to learn and measure my level lof competence in a second language',
    description: 'Constancia por participar en el taller:"Ways to learn and measure my level lof competence in a second language"',
  },
  {
    id: 3,
    icon: '/images/reconocimientos/ReallyInovacion021020.webp',
    srcPdf: '/assets/download/reconocimientos/ReallyInovacion021020.pdf',
    title: 'Really Latinoamericano de Innovación 2020',
    description: 'Constancia por participar en el Really Latinoamericano de Innovación 2020',
  },
  {
    id: 4,
    icon: '/images/reconocimientos/Arduino241018.webp',
    srcPdf: '/assets/download/reconocimientos/Arduino241018.pdf',
    title: 'Programación de intefaces y domótica con arduino',
    description: 'Reconocimiento por haber particiado en el taller "Programación de intefaces y domótica con arduino"',
  },
  {
    id: 5,
    icon: '/images/reconocimientos/Mantenimiento081117.webp',
    srcPdf: '/assets/download/reconocimientos/Mantenimiento081117.pdf',
    title: 'Mantenimiento preventivo y correctivo de telefonía celuar',
    description: 'Reconocimiento por haber particiado en el taller "Mantenimiento preventivo y correctivo de telefonía celuar"',
  },

];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  // backgroundColor: theme.palette.background.neutral,

  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    border: 0,
    maxWidth: 380,
    // minHeight: 440,
    minHeight: 450,
    margin: 'auto',
    textAlign: 'center',
    // padding: theme.spacing(5, 5, 0),
    padding: theme.spacing(5, 5, 1),
    boxShadow: theme.customShadows.z12,
    [theme.breakpoints.up('md')]: {
      // boxShadow: 'none',
      boxShadow: `-40px 40px 80px 0 ${shadowCard(0.50)}`,
      // backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
      // backgroundColor: theme.palette.background.paper,
      backgroundColor: theme.palette.background.neutral,

      '&:before': {
        boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`,
      },
    },
   
  };
});

// ----------------------------------------------------------------------

export default function HomeRecognitions() {
  const [isOpenRecognitionDetails, setIsOpenRecognitionDetails] = useState(false);
  const [details, setDetails] = useState(null);

  const handleOpenCardDetails = (details) => {
    setIsOpenRecognitionDetails(true);
    setDetails(details);
  }
  const handleCloseCardDetails = () => {
    setIsOpenRecognitionDetails(false);
    setDetails(null);
  }

  return (
    <RootStyle id={'recognitions'}>
      <Container component={MotionViewport} pb={3}>
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 10, md: 15 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
              ¿En que he participado?
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">Reconocimientos</Typography>
          </m.div>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 5, lg: 10 },
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
          }}
        >
          {CARDS.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <CardStyle className={''}>
                <Image
                  onClick={() => handleOpenCardDetails(card)}
                  src={card.icon}
                  alt={card.title}
                  sx={{
                    cursor: 'pointer',
                    // mb: 10,
                    mb: 5,
                    mx: 'auto',
                    // width: 40,
                    // height: 40,
                    width: 'auto',
                    height: 'auto',
                    filter: (theme) => shadowIcon(theme.palette.primary.main),
                    ...(index === 0 && {
                      filter: (theme) => shadowIcon(theme.palette.info.main),
                    }),
                    ...(index === 1 && {
                      filter: (theme) => shadowIcon(theme.palette.error.main),
                    }),
                  }}
                />
                <Typography variant="h5" paragraph>
                  {card.title}
                </Typography>
                <Button variant="text" color="primary" onClick={() => handleOpenCardDetails(card)}>
                  Ver en pdf
                </Button>
              </CardStyle>
            </m.div>
          ))}
        </Box>
      </Container>
      <DialogAnimate fullWidth open={isOpenRecognitionDetails} onClose={handleCloseCardDetails} widthDialog={"md"}>
        <ViewerPrintPdf details={details} onCancel={handleCloseCardDetails} />
      </DialogAnimate>
    </RootStyle>
  );
}
