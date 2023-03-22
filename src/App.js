// import './App.css';
import Navbar from './Component/Navbar';
import { createTheme, colors , ThemeProvider } from '@mui/material';

import { Routes, Route
 } from 'react-router-dom';


import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"
import Navbar2 from './Component/Navbar2';
import Navbar3 from './Component/Navbar3';


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
const pages3 = ['Home', 'About', 'Our Team','Contact'];
const settings3 = ['Sign up','Sign in'];
const logo3=['LOGO']

function App() {
  return (
    <div sx={{bgColor:'black'}} >
       <ThemeProvider theme={theme}>
        <Navbar menus={pages} buttons={settings} logo={logo}/>
        <Navbar3 menus={pages3} buttons={settings3} logo={logo3}/>
        <Navbar2 menus={pages2} buttons={settings2} logo={logo2}/>
        {/* <Appbar4 pages={pages2} settings={settings2} LOGO={logo2}/> */}
    <Routes>
      {/* <Route path='/' element={<Home />}/> */}
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>


      </ThemeProvider>
    </div>
  );
}

export default App;
