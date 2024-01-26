import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../image/logo.png';

function Header() {
    return(        
        <div id="navbar">
            <header id="content" className='navbar navbar-expand-sm fixed-top'>
            
            <button className='navbar-toggler' data-toggle="collapse" data-target='#list'>
                <span className='navbar-toggler-icon' id="myicon1"></span><br />
                <span className='navbar-toggler-icon' id="myicon2"></span><br />
                <span className='navbar-toggler-icon' id="myicon3"></span>
            </button>

            <div id="logo">
            <NavLink to="/"><img src={logo} alt="logo" height="84px" /></NavLink>
            </div>
    
            <div className="collapse navbar-collapse" id="list">    
            <ul id="navBar">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/team">Team</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            </div>
            
            </header>
        </div>
    );
}
export default Header;