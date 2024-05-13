import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../images/logo.png';
import menu_icon from '../images/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {

  //To add bg color while scrolling
  const [sticky, setSticky]=useState(false);
   
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  // Menu button display
  const [mobileMenu,setMobileMenu]=useState(false)

  function toggleMenu(){
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }


  return (
    <nav className={`container ${sticky? 'nav-darker' : ''}`}>
        <img src={logo} alt="logo" className='logo'/>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-240} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={0} duration={-260} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt='menu_icon' className='menu_icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar;