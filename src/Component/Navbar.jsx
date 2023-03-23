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
import { makeStyles } from '@mui/material';

// const useStyles=makeStyles((theme))=>({
//   root:{
//     appbarColorSolid:{
//       backgroundColor:"#03045e"
//     },
//     appbarColorTransparent:{
//       backgroundColor:'#023e8a'
//     }
//   }
// })

// const pages = ['Menuds 1', 'Menusd 2', 'Menusd 3'];
// const settings = ['SignInsd', 'Logoutsds'];

const Navbar = (props) => {
const { menus, buttons, logo} = props

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
    sx={{bgcolor:'transparent'}}
      >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
           {/* for large screen  */}
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
            logo || 'logo not found'
          }
            
          
          </Typography>
 {/* for small screen  */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            //   sx={{marginLeft: "auto"}}
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
                    color: "primary.light",
                    },
                display: { xs: 'block', md: 'none'}
              }}
            >{menus.map((menu) => (
                <MenuItem key={menu} onClick={handleCloseNavMenu}>
                   <Link style={{ textDecoration: "none", color: 'inherit' }}
                to={menu.link || '/'}>
                  <Typography textAlign="center" sx={{alignItems: 'center',}}>{menu || ''}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
 {/* for small screen  */}
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
            logo || 'logo not found'
          }
          </Typography>
           {/* for large screen  */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, marginLeft:'auto' }}>
           {menus.map((menu) => (
             <Button
                key={menu}
                onClick={handleCloseNavMenu}
                sx={{ my: 4, padding:2, color: 'black',"&:hover": {
                color: "primary.light",
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

          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml:{sm:'8%' ,md:'12%', lg:'16%', xl:'20%'}}}>
    {buttons.map((button) => (
                <MenuItem key={button} sx={{borderRadius:8}}>
                     <Button variant="outlined"
                     sx={{borderRadius:5, "&:hover": {
                        color: "black",
                        backgroundColor: "primary.light"
                      }}}
                    to={button.link || ''}>
                  <Typography textAlign="center">{button || ''}</Typography>
                  </Button>
                </MenuItem>
              ))}
            {/* </Button> */}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 1}}>
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
              onClose={handleCloseUserMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            > 
            {buttons.map((button) => (
                <MenuItem key={button}
                 onClick={handleCloseUserMenu}
                 >
                     <Button variant="outlined"
                     to={button.link || ''}
                     >
                  <Typography textAlign="center">{button || ''}</Typography>
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

export default Navbar;