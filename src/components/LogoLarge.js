import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import NextLink from 'next/link';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const LogoLarge = forwardRef(({ disabledLink = false, sx }, ref) => {
  const logo = (
    <Box ref={ref} sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}>
      <img src="/logo/markconfigLarge.svg" alt='MarkconfigIconLarge' />

    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/">{logo}</NextLink>;
});

LogoLarge.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default LogoLarge;
