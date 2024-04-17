import PropTypes from 'prop-types';
// components
import MainLayout from './main';
import LogoOnlyLayout from './LogoLargeOnlyLayout';
import LogoLargeOnlyLayout from './LogoLargeOnlyLayout';

// ----------------------------------------------------------------------

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['main', 'logoOnly']),
};

export default function Layout({ variant = 'logoOnly', children }) {
  if (variant === 'logoOnly') {
    return <LogoOnlyLayout> {children} </LogoOnlyLayout>;
  }

  if (variant === 'main') {
    return <MainLayout>{children}</MainLayout>;
  }

  return (
    <LogoLargeOnlyLayout> {children} </LogoLargeOnlyLayout>
  );
}
