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

const Appbar = (props) => {
const [appbarColor, setAppbarColor]=React.useState(false);
const nevRef=React.useRef();
nevRef.current=appbarColor;
const { pages, settings, LOGO} = props

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

//   React.useEffect(()=>{
// const handleScroll=()=>{
//   const show=window.scrollY>200
//   if(show){
//     setAppbarColor('primary.main')
//   }else{
//     setAppbarColor('transparent')
//   }
// }
// document.addEventListener('scroll', handleScroll)
// return()=>{
//   document.removeEventListener('scroll', handleScroll)
// }
//   },[])

  return (
    <AppBar position="sticky"
    sx={{bgcolor:'transparent'}}
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
            LOGO || 'No logo here'
          }
            
          
          </Typography>
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
            >{pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}
                
                >
                   <Link style={{ textDecoration: "none", color: 'inherit' }}
                to={page.link || '/'}
                   >
                  <Typography textAlign="center" sx={{alignItems: 'center',}}>{page}</Typography>
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
              marginRight:8
            }}
          >{
            LOGO || 'No logo here'
          }
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, marginLeft:'auto' }}>
           {pages.map((page) => (
             <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 4, padding:2, color: 'black',"&:hover": {
                color: "primary.light",
                },
                display: 'block' }}
                to={page.link || '/'}
               >
                <Link style={{ textDecoration: "none", color: 'inherit'}}>
                 <Typography textAlign="center">{page}</Typography>
                 </Link>
               </Button>             
               ))}
      </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml:{sm:'8%' ,md:'12%', lg:'16%', xl:'20%'}}}>
    {settings.map((setting) => (
                <MenuItem key={setting} sx={{borderRadius:8}}>
                     <Button variant="outlined"
                     sx={{borderRadius:5, "&:hover": {
                        color: "black",
                        backgroundColor: "primary.light"
                      }}}
                    to={setting.link || ''}>
                  <Typography textAlign="center">{setting}</Typography>
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
            {settings.map((setting) => (
                <MenuItem key={setting}
                 onClick={handleCloseUserMenu}
                 >
                     <Button variant="outlined"
                     to={setting.link || ''}
                     >
                  <Typography textAlign="center">{setting}</Typography>
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

export default Appbar;