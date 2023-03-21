import './App.css';
import Appbar from './Component/Appbar';
import { createTheme,colors , ThemeProvider } from '@mui/material';

import { Routes, Route
 } from 'react-router-dom';

 import Home from "./pages/Home.jsx"
 import Contact from "./pages/Contact.jsx"
 import About from "./pages/About.jsx"
import Appbar2 from './Component/Appbar2';

const theme=createTheme({
  palette:{
    secondary:{
      // main:colors.orange[500],
      main:'#336699',
    },
    primary:{
      // main:colors.blue[300],
      main:'#668cff',
    }
  }
})


const pages = ['ONE', 'TWO', 'THREE','FOUR', 'FIVE'];
const settings = ['Sign up','Sign in', 'Log out'];
const logo=['LOGO']
const pages2 = ['ONE', 'TWO', 'THREE','FOUR'];
const settings2 = ['Sign up','Sign in','Log out'];
const logo2=['LOGO2']

function App() {
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
        <Appbar pages={pages} settings={settings} LOGO={logo}/>
        <Appbar2 pages={pages2} settings={settings2} LOGO={logo2}/>
   {/* <h1>Hello world</h1> */}
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>


      </ThemeProvider>
    </div>
  );
}

export default App;
