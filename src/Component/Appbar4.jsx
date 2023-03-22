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

const Navbar4 = (props) => {

    const { pages, settings, LOGO} = props;
    // console.log('logo', typeof(props.LOGO), props);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElNavUser, setAnchorElNavUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenNavMenuUser = (event) => {
    setAnchorElNavUser(event.currentTarget);
  };

  const handleClicked=()=>{
    console.log('appbar button clicked');
  }



  const handleCloseNavMenu = (page) => {
    console.log(page);
    setAnchorElNav(null);
    handleClicked();
  };

  const handleCloseUserMenu = () => {
    setAnchorElNavUser(null);
  };

  return (
    <AppBar position="sticky" sx={{bgcolor:'secondary.dark', marginTop:4}}>
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
            //   color: 'inherit',
              textDecoration: 'none',
              color:'secondary.light'
            }}
          >
            {
           LOGO || 'No Logo'
          }

          {/* {
           if(LOGO=="image")
            <img src={LOGO} alt="logo" width="200rem" />
           else if(LOGO=="text")
           <h1>{LOGO}</h1>
           else{''}
          } */}
            
          
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
                    color: "secondary",
                    // bgcolor:'secondary.light'
                    },
                display: { xs: 'block', md: 'none'}
              }}
            >{pages.map((page) => (
                <MenuItem key={page} onClick={()=>handleCloseNavMenu(page)}
                
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
            //   color: 'inherit',
              textDecoration: 'none',
              marginRight:8,
              color:'secondary.light'
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
                sx={{ my: 4, padding:2, color:'secondary.light', "&:hover": {
                    color: "primary.light",
                    // backgroundColor: "primary.light"
                    // bgcolor:'secondary.light'
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

          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 1}}>
            {/* <Button variant="outlined"> */}
    {settings.map((setting) => (
                <MenuItem key={setting}>
                     <Button variant="outlined"
                     sx={{borderRadius:5,color:'secondary.light', "&:hover": {
                        color: "primary.light",
                        // backgroundColor: "primary.light"
                        // bgcolor:'secondary.light'
                      } }}
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

export default Navbar4;