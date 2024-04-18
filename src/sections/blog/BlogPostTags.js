import PropTypes from 'prop-types';
// @mui
import { Box, Chip } from '@mui/material';

// ----------------------------------------------------------------------

BlogPostTags.propTypes = {
  post: PropTypes.object.isRequired,
};

export default function BlogPostTags({ post }) {
  const { /*favorite,*/ tags, /*favoritePerson*/ } = post;

  return (
    <Box sx={{ py: 3 }}>
      {tags.map((tag) => (
        <Chip key={tag} label={tag} sx={{ m: 0.5, textTransform: 'capitalize' }} />
      ))}
    </Box>
  );
}
