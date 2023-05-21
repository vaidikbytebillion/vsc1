import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css'

const NavBar = () => {
    return (
        <nav className='navBar'>
            <ul className='title'>
                VAIDIKKKKK
            </ul>
            <ul>
                <Link to={'/'} className='li' >Home</Link>
                <Link to={'/about'} className='li' >Gallery</Link>
                <Link to={'/'}  className='li' >Career</Link>
                <Link to={'/'}  className='li' >hi</Link>
            </ul>
            <ul className='rhombus'>

            </ul>
        </nav>
    )
}
export default NavBar;