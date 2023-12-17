// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_PAGE, PATH_SOCIAL_NETWORK } from '../../routes/paths';
// components
import Logo from '../../components/Logo';
import SocialsButton from '../../components/SocialsButton';

// ----------------------------------------------------------------------
// const LINKS = [
//   {
//     headline: 'Minimal',
//     children: [
//       { name: 'About us', href: PATH_PAGE.about },
//       { name: 'Contact us', href: PATH_PAGE.contact },
//       { name: 'FAQs', href: PATH_PAGE.faqs },
//     ],
//   },
//   {
//     headline: 'Legal',
//     children: [
//       { name: 'Terms and Condition', href: '#' },
//       { name: 'Privacy Policy', href: '#' },
//     ],
//   },
//   {
//     headline: 'Contact',
//     children: [
//       { name: 'support@minimals.cc', href: '#' },
//       { name: 'Los Angeles, 359  Hidden Valley Road', href: '#' },
//     ],
//   },
// ];
const LINKS = [
  {
    headline: 'Otos sitios',
    children: [
      { name: 'Mi blog', href: PATH_SOCIAL_NETWORK.myBlog },
    ],
  },
  {
    headline: 'Enlaces',
    children: [
      { name: 'Github', href: PATH_SOCIAL_NETWORK.github },
      { name: 'Gitlab', href: PATH_SOCIAL_NETWORK.gitlab },
      { name: 'Threads', href: PATH_SOCIAL_NETWORK.threads },
      { name: 'YouTube', href: PATH_SOCIAL_NETWORK.youtube },


      // { name: 'Linkedin', href: PATH_SOCIAL_NETWORK.linkedin },
      // { name: 'X (Antes twitter)', href: PATH_SOCIAL_NETWORK.x },
      // { name: 'Instagram', href: PATH_SOCIAL_NETWORK.instagram },
      // { name: 'Facebook', href: PATH_SOCIAL_NETWORK.facebook },

    ],
  },
  {
    headline: 'Contacto',
    children: [
      { name: 'marconfig.dev@gmail.com', href: 'mailto:marconfig.dev@gmail.com' },
      { name: 'Telegram', href: PATH_SOCIAL_NETWORK.telegram },
      { name: 'Puebla, México', href: '#', type: 'text' },
    ],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
          </Grid>
          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              {/* The starting point for your next project with Minimal UI Kit, built on the newest
              version of Material-UI ©, ready to be customized to your style. */}
              Markconfig es una página web en donde expongo mi portafolio e información sobre mí.
              {/* <br />
              Markconfig Blog es un lugar en donde plasmo lo que pienso, no necesariamente sobre tecnología. */}
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              <SocialsButton initialColor={true} simple={true} sx={{ mx: 0.5 }} links={PATH_SOCIAL_NETWORK} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
            >
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component="p" variant="overline">
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    link.type ? (
                      <Typography color="inherit" variant="body2" sx={{ display: 'block' }}>
                        {link.name}
                      </Typography>
                    ) : (
                      <NextLink key={link.name} href={link.href} passHref>
                        <Link color="inherit" target={link.target || '_blank'} variant="body2" sx={{ display: 'block' }}>
                          {link.name}
                        </Link>
                      </NextLink>
                    )
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* © 2023. All rights reserved */}
          ¡Gracias por tu visita!
        </Typography>
      </Container>
    </RootStyle>
  );
}
