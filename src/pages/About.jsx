import React from 'react';
import Navbar from '../Component/Navbar';
import Sample from '../Component/Sample';

const About = () => {
    const menus = [{"name":"one", "submenu":["one","two","three"]},{"name":"two"}];
    const menu = ['home', 'about', 'contact'];
    const buttons = ['sign up', 'sign in'];


    return (
        <div>
            <Sample text={"About page is this"}/>
            <Navbar menus={menu} buttons={buttons}/>
        </div>
    );
};

export default About;