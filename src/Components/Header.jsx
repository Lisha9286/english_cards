<<<<<<< HEAD
import React from 'react';
import './Header.sass';
import { Link } from 'react-router-dom'

function Header() {
    return (
        
        <div className='header'>
            <Link to="/" className='header__logo'>
                <img className='header__img' alt="" src="./assets/images/english.png" />
                <div className='header__title'>word practice</div>
                
            </Link>
            <div className='header__navigation'>
                <Link to="/train" className='header__menu'>Train Words</Link>
                <Link to="/game" className='header__menu'>Game</Link>
                <Link to="/login" className='header__login'>Log In</Link>
                <Link to="/singup" className='header__login'>Sing Up</Link>
            </div>
        </div>
            
=======
import './Header.sass';
function Header(props) {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img className='header__img' alt="" src="./assets/images/english.png" />
                <div className='header__title'>Practice Words</div>
            </div>
            <nav>
                <ul className='header__menu'>
                    <li>Log In</li>
                    <li>Sing Up</li>
                </ul>
            </nav>
        </div>
>>>>>>> c064f9fdb3e5be521d586e4ccc9d1b1721ff2094
    );
}

export default Header