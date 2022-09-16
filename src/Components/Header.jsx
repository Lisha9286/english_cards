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
    );
}

export default Header