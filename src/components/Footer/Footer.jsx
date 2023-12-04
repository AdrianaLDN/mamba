import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer () {
    return (
        <div className='footer'>
            <div><p className='footer-par'>&#169; Copyright: Mamba Ltd.</p></div>
            <Link className='contact' to='../contact'>Contact</Link>
        </div>
    )
}

export default Footer;