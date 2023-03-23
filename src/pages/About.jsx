import React from 'react';
import Navbar from '../Component/Navbar';
import Sample from '../Component/Sample';

const About = () => {
    const menus = [{"name":"one", "submenu":["one","two","three"]},{"name":"two"}];
    const menu = ['home','About', 'our team'];
    const buttons = ['sign up', 'sign in'];
    const logo=['LOGO']


    return (
        <div>
            <Sample text={"About page is this"}/>
            <Navbar menus={menu} buttons={buttons} logo={logo}/>
        </div>
    );
};

export default About;