import { useState } from 'react';
import { m } from 'framer-motion';
// @mui
import { alpha, /*useTheme,*/ styled } from '@mui/material/styles';
import { Box, Button, Card, DialogTitle, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade, DialogAnimate } from '../../components/animate';
import PortfolioCardDetails from '../../components/PortfolioCardDetails';

import TechnologiesIcon from '../../components/TechnologiesIcon';

// ----------------------------------------------------------------------

const CARDS = [
  {
    id: 0,
    icon: '/images/portfolio/FarmaReyes.png',
    iconAlternative: '/images/portfolio/FarmaReyes.png',
    title: 'Sistema web para la gestión del historial clínico y promoción Farma Reyes',
    description:
      'Desarrollo e implementación de un sistema de gestión del historial clínico y promoción para el consultorio médico FarmaREYES, operado por la Dra. Perla Xóchitl Reyes Reyes. Diseño de base de datos con MySQL, codificación backend con spring-boot y frontend con NextJs. Despliegue con Nginx y PM2 en Droplet (VPS) de Digital Ocean.',
    links: [
      { name: 'FarmaReyes page', url: 'https://www.farmareyes.com/' },
      { name: 'App Farmareyes', url: 'https://app.farmareyes.com/' }
    ],
    technologies: { mysql: true, springboot: true, next: true, javascript: true, react: true },
  },
  {
    id: 1,
    icon: '/images/portfolio/transporte1.webp',
    iconAlternative: '/images/portfolio/transporte1.webp',
    title: 'Punto de venta transporte de antorcha "Región mixteca"',
    description: 'Este sistema permitió a el sitio de trasportes “Región Mixteca” automatizar el control de todas sus actividades como son: registrar la venta de boletos, paquetería, cancelación de una reservación, viajes privados, corte de caja, lo cual supondrá un acceso rápido y sencillo a los datos, gracias a interfaces gráficas sencillas y amigables. Además, los datos accedidos estarán siempre actualizados, lo cual es un factor muy importante para poder llevar un control centralizado. Tecnologías: Java, Domótica con arduino.',
    technologies: { java: true, arduino: true },
  },
  {
    id: 2,
    icon: '/images/portfolio/SistemadeLlenado.webp',
    iconAternative: '/images/portfolio/SistemaDeLlenado1.webp',
    title: 'Sistema automático de llenado de contenedores de agua',
    description: 'Se construyó un sistema de software y hardware, que permite operar de una manera más calificada el uso del agua en los sistemas de llenado domésticos, esto medinate un sistema de llenado automático. Llevar el control de llenado en el sistema. administrar la cantidad de agua que contiene el tinaco, llevar un control del consumo de agua semanal, automatizar los tiempos de llenado. Tecnologías: Java, domótica con Arduino, base de datos con MySQL.',
    technologies: { java: true, arduino: true, mysql: true },
  },
  {
    id: 3,
    icon: '/images/portfolio/AutoEat1.webp',
    iconAlternative: '/images/portfolio/AutoEat2.webp',
    title: 'Auto Eat',
    description: 'Dispensador de alimento automatizado para aves, administrado a través de una aplicacion de escritorio para el municipio de Chila de las Flores, Pue. Tecnologías: Java, domótica con arduino.',
    technologies: { java: true, arduino: true },
  },

];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  backgroundColor: theme.palette.background.neutral,

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
      boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
      // backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
      backgroundColor: theme.palette.background.paper,

      '&:before': {
        boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`,
      },
    },
  };
});

// ----------------------------------------------------------------------

export default function HomePortfolio() {
  const [isOpenPortfolioDetails, setIsOpenPortfolioDetails] = useState(false);
  const [details, setDetails] = useState(null);

  const handleOpenCardDetails = (details) => {
    setIsOpenPortfolioDetails(true);
    setDetails(details);
  }


  const handleCloseCardDetails = () => {
    setIsOpenPortfolioDetails(false);
  }

  return (
    <RootStyle id={'portfolio'}>
      <Container component={MotionViewport} pb={3}>
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 10, md: 15 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
              ¿Qué he hecho?
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">Portafolio</Typography>
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
                <TechnologiesIcon initialColor={false} simple={true} visibleTechnologies={card.technologies} />
                <Button variant="text" color="primary" onClick={() => handleOpenCardDetails(card)}>
                  Ver más...
                </Button>
              </CardStyle>
            </m.div>
          ))}
        </Box>
      </Container>
      <DialogAnimate open={isOpenPortfolioDetails} onClose={handleCloseCardDetails} widthDialog={"sm"}>
        <DialogTitle sx={{ flexGrow: 1 }} >{'Más información'}</DialogTitle>
        <PortfolioCardDetails details={details || {}} onCancel={handleCloseCardDetails} />
      </DialogAnimate>
    </RootStyle>
  );
}
