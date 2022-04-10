import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {
	return (
		<header className='header-page'>
			<nav className='nav'>
				<NavLink className='nav-item' to='/'>Main</NavLink>
				<NavLink className='nav-item' to='/about'>About</NavLink>
				<NavLink className='nav-item' to='/contacts'>Contacts</NavLink>
			</nav>
		</header>
	)
}

export default Header;