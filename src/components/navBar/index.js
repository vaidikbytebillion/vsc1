import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css'

const NavBar = () => {
    return (
        <nav className='navBar'>
            <ul  className='title'>
                VAIDIKKKKK
            </ul>
            <ul>
                <Link className='li' >Home</Link>
                <Link className='li' >About</Link>
                <Link className='li' >Works</Link>
                <Link className='li' >hi</Link>
            </ul>
            <ul className='rhombus'>

            </ul>
        </nav>
    )
}
export default NavBar;