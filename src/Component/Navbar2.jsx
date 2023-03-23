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
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



// const pages = ['Menuds 1', 'Menusd 2', 'Menusd 3'];
// const settings = ['SignInsd', 'Logoutsds'];

const Navbar2 = (props) => {

const { menus, buttons, logo} = props;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElNavUser, setAnchorElNavUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenNavMenuUser = (event) => {
    setAnchorElNavUser(event.currentTarget);
  };




  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElNavUser(null);
  };

  return (
    <AppBar position="sticky" 
    sx={{bgcolor:'primary.dark', marginTop:4}}
    // color="transparent" elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >{
            logo || 'No logo here'
          }
            
          
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            //   sx={{marginRight: "auto"}}
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
                "&:hover": {
                    color: "secondary",
                    },
                display: { xs: 'block', md: 'none'}
              }}
            >{menus.map((menu) => (
                <MenuItem key={menu} onClick={handleCloseNavMenu}
                
                >
                   <Link style={{ textDecoration: "none", color: 'inherit' }}
                to={menu.link || '/'}
                   >
                  <Typography textAlign="center" sx={{alignItems: 'center',}}>{menu || ''}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              // marginRight:8
            }}
          >{
            logo || 'No logo here'
          }
          </Typography>
          <Box sx={{ flexGrow:1, display: { xs: 'none', md: 'flex' } , ml:5}}>
           {menus.map((menu) => (
             <Button
                key={menu}
                onClick={handleCloseNavMenu}
                sx={{ my: 4,px:2, color: 'black',"&:hover": {
                color: "black",
                },
                display: 'block' }}
                to={menu.link || '/'}
               >
                <Link style={{ textDecoration: "none", color: 'inherit'}}>
                 <Typography textAlign="center">{menu || ''}</Typography>
                 </Link>
               </Button>             
               ))}
      </Box>
          {/* <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 1}}>
    {settings.map((setting) => (
                <MenuItem key={setting}>
                     <Button variant="outlined"
                     sx={{borderRadius:5,"&:hover": {
                        color: "black",
                        backgroundColor: "primary.light"
                      } }}
                    to={setting.link || ''}>
                  <Typography textAlign="center">{setting}</Typography>
                  </Button>
                </MenuItem>
              ))}

          </Box> */}


           <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenuUser}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNavUser}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNavUser)}
              onClose={handleCloseUserMenu}> 
            {buttons.map((buttonsnav) => (
                <MenuItem key={buttonsnav}
                 onClick={handleCloseUserMenu}
                 >
                     <Button variant="outlined"
                     to={buttonsnav.link || ''}
                     >
                  <Typography textAlign="center">{buttonsnav}</Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box> 
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar2;