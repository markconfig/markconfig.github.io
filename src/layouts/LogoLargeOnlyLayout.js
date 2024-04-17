import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
// components
import LogoLarge from '../components/LogoLarge';

// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0),
  },
}));

// ----------------------------------------------------------------------

LogoLargeOnlyLayout.propTypes = {
  children: PropTypes.node,
};

export default function LogoLargeOnlyLayout({ children }) {
  return (
    <>
      <HeaderStyle>
        <LogoLarge />
      </HeaderStyle>
      {children}
    </>
  );
}
