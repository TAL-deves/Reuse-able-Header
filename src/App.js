// import './App.css';
import Navbar from './Component/Navbar';
import { createTheme, colors , ThemeProvider, Typography } from '@mui/material';

import { Routes, Route
 } from 'react-router-dom';


import Contact from "./pages/Contact.jsx"
import Simple from "./Component/Sample.jsx"
import About from "./pages/About.jsx"
import Navbar2 from './Component/Navbar2';
import Navbar3 from './Component/Navbar3';
import Navbar4 from './Component/Navbar4';


const theme=createTheme({
  palette:{
    secondary:{
      main:'#457b9d',
      // dark:'#023047',
      // light:'#264653',
      // main:colors.orange[500],
    },
    primary:{
      // main:colors.blue[300],
      main:'#ffafcc',
      main2:'#03045e',
      main3:'#2a9d8f',
    }
  }
})

const pages = ['Home', 'About', 'Service','Vision', 'Contact'];
const settings = ['Sign up','Sign in'];
const logo=['LOGO']

const pages2 = ['ONE', 'TWO', 'THREE','FOUR'];
const settings2 = ['Sign up','Sign in','Log out'];
const logo2=['LOGO']

const pages4 = ['Home', 'About Us', 'Contact', 'Our Team'];
const settings4 = ['Sign up','Sign In'];
const logo4=['LOGO']
// const color4=['#219ebc']

const pages3 = ['Home', 'About', 'Our Team','Contact'];
const settings3 = ['Sign up','Sign in'];
const logo3=['LOGO']

function App() {
  return (
    <div >
       <ThemeProvider theme={theme}>
        <Typography>Navbar</Typography>
        <Navbar menus={pages} buttons={settings} logo={logo}/>
        <Typography>Navbar2</Typography>
        <Navbar2 menus={pages2} buttons={settings2} logo={logo2}/>
        <Typography>Navbar3</Typography>
        <Navbar3 menus={pages3} buttons={settings3} logo={logo3}/>
        <Typography>Navbar4</Typography>
        <Navbar4 menus={pages4} buttons={settings4} logo={logo4}/>
        {/* <Appbar4 pages={pages2} settings={settings2} LOGO={logo2}/> */}
    <Routes>
      {/* <Route path='/' element={<Home />}/> */}
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/simple' element={<Simple />}/>
    </Routes>


      </ThemeProvider>
    </div>
  );
}

export default App;
