import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as PeacefulPartnerLogo } from '../assets/logo.svg';
import { SvgIcon, ToggleButton, useTheme } from '@mui/material';
import { DarkMode, LightMode, AccountCircle } from '@mui/icons-material';

const pages = [{
  name: 'About',
  url: '/',
}, {
  name: 'Grow',
  url: '/grow',
}, {
  name: 'Chat',
  url: '/chat'
}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface ChildProps {
  onToggleDarkMode: () => void;
}

function NavigationBar({ onToggleDarkMode }: ChildProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const navigateInternal = useNavigate();
  const theme = useTheme();

  const navigate = (url: string) => {
    navigateInternal(url);
    handleCloseNavMenu();
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <SvgIcon component={PeacefulPartnerLogo} viewBox="0 0 600 600" sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              borderRadius: '5px',
            }} />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "'Euphoria Script', cursive",
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            PeacefulPartner
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => navigate(page.url)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link to="/">
            <SvgIcon component={PeacefulPartnerLogo} viewBox="0 0 600 600" sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              borderRadius: '5px',
            }} />
          </Link>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: "'Euphoria Script', cursive",
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PeacefulPartner
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigate(page.url)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <ToggleButton
              value="check"
              selected={theme.palette.mode === 'dark'}
              onClick={onToggleDarkMode}
              sx={{
                border: 'none',
                mr: '10px',
              }}
            >
              <SvgIcon
                component={theme.palette.mode === 'dark' ? LightMode : DarkMode}
                viewBox="0 0 24 24"
                sx={{
                  color: 'inherit',
                  width: '1.5rem',
                  height: '1.5rem',
                }}
              />
            </ToggleButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <AccountCircle />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBar;

