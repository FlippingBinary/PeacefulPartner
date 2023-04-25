import { Divider, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function PageFooter() {

  // Create a copyright footer in MUI protecting the rights of Jon Musselwhite
  return (
    <Stack
      direction="column"
      display="flex"
      justifyContent="center"
      alignItems="center"
      // center the text
      sx={{
        p: 2,
        backgroundColor: 'background.light',
        height: '10rem',
      }}
    >
      <Link
        variant="h4"
        component="a"
        href="https://www.flippingbinary.com"
        target="_blank"
        rel="noreferrer"
        sx={{
          textDecoration: 'none',
          fontFamily: "'Euphoria Script', cursive",
          color: 'text.secondary',
        }}
      >
        © 2023 Jon Musselwhite
      </Link>
      <Stack direction="row" spacing={3}>
        <Link
          component={RouterLink}
          to="/credits"
          sx={{
            textDecoration: 'none',
            color: 'text.secondary',
          }}
        >
          Photo Credits
        </Link>
        <Divider orientation="vertical" flexItem />
        <Link
          component={RouterLink}
          to="/policy"
          sx={{
            textDecoration: 'none',
            color: 'text.secondary',
          }}
        >
          Privacy Policy
        </Link>
      </Stack>
    </Stack>
  );
}
export default PageFooter;

