import PropTypes from 'prop-types';
// import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Button, Card, DialogActions, Link, Container, Typography } from '@mui/material';
// components
import Image from './Image';
import TechnologiesIcon from './TechnologiesIcon';

// ----------------------------------------------------------------------


const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

// const RootStyle = styled('div')(({ theme }) => ({
//     paddingTop: theme.spacing(15),
//     [theme.breakpoints.up('md')]: {
//         paddingBottom: theme.spacing(15),
//     },
// }));

const CardStyle = styled(Card)(({ theme }) => {
    const MIN_HEIGHT = 440;
    return {
        border: 0,
        maxWidth: 380,
        minHeight: MIN_HEIGHT,
        margin: 'auto',
        textAlign: 'center',
        padding: theme.spacing(5, 5, 0),
        boxShadow: theme.customShadows.z12,
        [theme.breakpoints.up('md')]: {
            boxShadow: 'none',
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
    };
});

// ----------------------------------------------------------------------
CardDetails.propTypes = {
    details: PropTypes.object,
    onCancel: PropTypes.func,
};

// ----------------------------------------------------------------------

export default function CardDetails({ details, onCancel }) {

    const theme = useTheme();

    const isLight = theme.palette.mode === 'light';

    return (
        <Container >
            <CardStyle>
                <Image
                    src={details.icon}
                    alt={details.title}
                    sx={{
                        // mb: 10,
                        mb: 5,
                        mx: 'auto',
                        // width: 40,
                        // height: 40,
                        width: 'auto',
                        height: 'auto',
                        filter: (theme) => shadowIcon(theme.palette.primary.main),
                        ...(details.id === 0 && {
                            filter: (theme) => shadowIcon(theme.palette.info.main),
                        }),
                        ...(details.id === 1 && {
                            filter: (theme) => shadowIcon(theme.palette.error.main),
                        }),
                    }}
                />
                <Typography variant="h5" paragraph>
                    {details.title}
                </Typography>
                <Typography sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>{details.description}</Typography>
                <br />
                {
                    details.links && details.links.map((link, index) => {
                        const { name, url } = link;
                        return (
                            <Typography key={`tLinkPortfolio${index}`} variant='body2'>
                                <Link key={`linkPortfolio${index}`} color="inherit" target='_blank' href={url}>{name}</Link >
                            </Typography>
                        )
                    })
                }
                <br />

                <TechnologiesIcon initialColor={false} simple={true} visibleTechnologies={details.technologies} />

                <br />
            </CardStyle>

            <DialogActions>
                <Box sx={{ flexGrow: 1 }} />
                <Button variant="outlined" color="inherit" onClick={onCancel}>
                    Cerrar
                </Button>
            </DialogActions>
        </Container>
    );
}
