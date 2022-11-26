import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          Your Website
        </Link>
        {' '}
        {new Date().getFullYear()}
        .
      </Typography>
    </footer>
  );
}
