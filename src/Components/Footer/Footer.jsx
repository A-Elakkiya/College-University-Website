import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <div className='footer '>
       <p> <span><FontAwesomeIcon icon={faCopyright}/></span>2024 Edusity. All rights reserved</p>
       <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
       </ul>
    </div>
  )
}

export default Footer;