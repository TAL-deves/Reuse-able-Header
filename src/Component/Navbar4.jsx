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


const Navbar4 = (props) => {

  const { menus, buttons, logo} = props;

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
    <AppBar position="sticky" 
    style={{background: 'linear-gradient(180deg, rgba(201,135,175,1) 0%, rgba(19,69,143,1) 91%, rgba(148,187,233,1) 100%)', marginTop:4}}
    // style={{background: 'linear-gradient(0deg, rgba(95,193,194,1) 0%, rgba(219,188,119,1) 100%)', marginTop:4}}
     >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
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
           logo || 'No Logo'
          }
          </Typography> */}
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
            >{menus.map((menu) => (
                <MenuItem key={menu} onClick={()=>handleCloseNavMenu(menu)}
                
                >
                   <Link style={{ textDecoration: "none", color: 'inherit' }}
                to={menu.link || '/'}
                   >
                  <Typography textAlign="center" sx={{alignItems: 'center',}}>{menu || ''}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>

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
            {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            //   color: 'inherit',
              textDecoration: 'none',
              color:'secondary.light'
            }}
          >
            {
           logo || 'No Logo'
          }
          </Typography> */}

            {/* <Menu
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
            >{menus.map((menu) => (
                <MenuItem key={menu} onClick={()=>handleCloseNavMenu(menu)}
                
                >
                   <Link style={{ textDecoration: "none", color: 'inherit' }}
                to={menu.link || '/'}
                   >
                  <Typography textAlign="center" sx={{alignItems: 'center',}}>{menu || ''}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
          {/* for large screen */}
    {/* <Box sx={{display:'flex',justifyContent:'space-around'}}> */}
     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}}}>
     {menus.map((menu) => (
             <Button
                key={menu}
                onClick={handleCloseNavMenu}
                sx={{ my: 4, padding:2, color:'secondary.light', "&:hover": {
                    color: "primary.light",
                    // backgroundColor: "primary.light"
                    // bgcolor:'secondary.light'
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
        <Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            //   color: 'inherit',
              textDecoration: 'none',
              // marginRight:8,
              color:'secondary.light'
            }}
          >{
            logo || 'No logo here'
          }
          </Typography>
           {/* {menus.map((menu) => (
             <Button
                key={menu}
                onClick={handleCloseNavMenu}
                sx={{ my: 4, padding:2, color:'secondary.light', "&:hover": {
                    color: "primary.light",
                    // backgroundColor: "primary.light"
                    // bgcolor:'secondary.light'
                  },
                display: 'block' }}
                to={menu.link || '/'}
               >
                <Link style={{ textDecoration: "none", color: 'inherit'}}>
                 <Typography textAlign="center">{menu || ''}</Typography>
                 </Link>
               </Button>             
               ))} */}
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' },
          //  ml:{md:'16%', lg:'20%', xl:'24%'}
           }}>
            {/* <Button variant="outlined"> */}
    {buttons.map((buttonNav) => (
                // <MenuItem key={buttonNav}>
                     <Button variant="outlined"
                     sx={{borderRadius:5,marginLeft:1, color:'secondary.light', "&:hover": {
                        color: "primary.light",
                      } }}
                    to={buttonNav.link || ''}>
                  <Typography textAlign="center">{buttonNav || ''}</Typography>
                  </Button>
                // </MenuItem>
              ))}
            {/* </Button> */}
        </Box>
    {/* </Box> */}
          {/* <Box sx={{ display: { xs: 'none', md: 'flex' },
           ml:{md:'16%', lg:'20%', xl:'24%'}
           }}>
    {buttons.map((buttonNav) => (
                     <Button variant="outlined"
                     sx={{borderRadius:5,marginLeft:1, color:'secondary.light', "&:hover": {
                        color: "primary.light",
                      } }}
                    to={buttonNav.link || ''}>
                  <Typography textAlign="center">{buttonNav || ''}</Typography>
                  </Button>
              ))}
          </Box> */}

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
              // marginRight:2,
              color:'secondary.light'
            }}
          >{
            logo || 'No logo here'
          }
          </Typography>
          {/* <Box sx={{ display: { xs: 'none', md: 'flex' },
           ml:{md:'16%', lg:'20%', xl:'24%'}
           }}>
    {buttons.map((buttonNav) => (
                     <Button variant="outlined"
                     sx={{borderRadius:5,marginLeft:1, color:'secondary.light', "&:hover": {
                        color: "primary.light",
                      } }}
                    to={buttonNav.link || ''}>
                  <Typography textAlign="center">{buttonNav || ''}</Typography>
                  </Button>
              ))}
          </Box> */}
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
            {buttons.map((buttonNav) => (
                <MenuItem key={buttonNav}
                 onClick={handleCloseUserMenu}
                 >
                     <Button variant="outlined"
                     to={buttonNav.link || ''}
                     >
                  <Typography textAlign="center">{buttonNav || ''}</Typography>
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