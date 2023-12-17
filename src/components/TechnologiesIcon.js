import PropTypes from 'prop-types';
// @mui
import { alpha } from '@mui/material/styles';
import { Stack, Button, Tooltip, IconButton } from '@mui/material';
//
import Iconify from './Iconify';

// ----------------------------------------------------------------------

TechnologiesIcon.propTypes = {
  initialColor: PropTypes.bool,
  visibleTechnologies: PropTypes.objectOf(PropTypes.bool),
  simple: PropTypes.bool,
  sx: PropTypes.object,
};

export default function TechnologiesIcon({ initialColor = false, simple = true, visibleTechnologies = {}, sx, ...other }) {
  const TECHNOLOGIES = [

    {
      name: 'Java',
      icon: 'devicon:java-wordmark',
      socialColor: '#E02D69',
      visible: visibleTechnologies.java || false,
    },
    {
      name: 'Arduino',
      icon: 'devicon:arduino-wordmark',
      socialColor: '#007EBB',
      visible: visibleTechnologies.arduino || false,
    },
    {
      name: 'Spring Boot',
      icon: 'devicon:spring-wordmark',
      // icon: 'devicon:spring-wordmark', //Spring
      // icon: 'devicon:spring-wordmark', //Spring boot

      socialColor: '#5fb832',
      visible: visibleTechnologies.springboot || false,
    },
    {
      name: 'MySQL',
      icon: 'devicon:mysql-wordmark',
      socialColor: '#1877F2',
      visible: visibleTechnologies.mysql || false,
    },
    {
      name: 'Javascript',
      icon: 'devicon:javascript',
      socialColor: '#1877F2',
      visible: visibleTechnologies.javascript || false,
    },
    {
      name: 'React js',
      icon: 'devicon:react',
      // icon: 'devicon:react-wordmark',
      socialColor: '#000000',
      visible: visibleTechnologies.react || false,
    },
    {
      name: 'Next js',
      icon: 'devicon:nextjs-wordmark',
      // icon: 'devicon:nextjs',
      socialColor: '#00AAEC',
      visible: visibleTechnologies.next || false,
    },
    {
      name: 'Html',
      icon: 'devicon:html5-wordmark',
      socialColor: '#00AAEC',
      visible: visibleTechnologies.html || false,
    },
    {
      name: 'Css',
      icon: 'devicon:css3-wordmark',
      socialColor: '#000000',
      visible: visibleTechnologies.css || false,
    },
    {
      name: 'Adobe Illustrator',
      icon: 'skill-icons:illustrator',
      socialColor: '#00AAEC',
      visible: visibleTechnologies.adobeilustrator || false,
    },
    {
      name: 'Linux',
      icon: 'devicon:linux',
      socialColor: '#000000',
      visible: visibleTechnologies.Linux || false,
    },

  ];

  return (
    <Stack direction="row" flexWrap="wrap" alignItems="center">
      {TECHNOLOGIES.map((tech) => {
        const { name, icon, visible, socialColor } = tech;
        if (visible) {
          return simple ? (
            // <Link key={name} href={path}>
            <Tooltip title={name} placement="top">
              <IconButton
                color="inherit"
                sx={{
                  ...(initialColor && {
                    color: name === 'Spring Boot' ? '#5fb832' : socialColor,
                    '&:hover': {
                      bgcolor: alpha(socialColor, 0.08),
                      cursor: 'none',
                    },
                  }),
                  ...sx,
                }}
                {...other}
              >
                <Iconify icon={icon} sx={{ width: 30, height: 30 }} />
              </IconButton>
            </Tooltip>
            // </Link>
          ) : (
            <Button
              key={name}
              // href={path}
              color="inherit"
              variant="outlined"
              size="small"
              startIcon={<Iconify icon={icon} />}
              sx={{
                m: 0.5,
                flexShrink: 0,
                ...(initialColor && {
                  color: socialColor,
                  borderColor: socialColor,
                  '&:hover': {
                    borderColor: socialColor,
                    bgcolor: alpha(socialColor, 0.08),
                    cursor: 'default',
                  },
                }),
                ...sx,
              }}
              {...other}
            >
              {name}
            </Button>
          );

        }


      })}
    </Stack>
  );
}
