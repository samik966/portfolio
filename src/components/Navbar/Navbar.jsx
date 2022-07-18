import { NavLink } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {
	return null
}

const NavbarLeft = () => {
	return (
		<div className='navbar__left'>
			<div className='line__container'>
				<div className='line one'></div>
				<div className='line two'></div>
			</div>
			<div className='nav__item'>
				<NavLink to='/' className='nav__link'>
					Home
				</NavLink>
			</div>
			<div className='nav__item'>
				<NavLink to='/about' className='nav__link'>
					About
				</NavLink>
			</div>
			<div className='nav__item'>
				<NavLink to='/experience' className='nav__link'>
					Experience
				</NavLink>
			</div>
		</div>
	)
}
const NavbarRight = () => {
	return (
		<div className='navbar__right'>
			<div className='line__container'>
				<div className='line one'></div>
				<div className='line two'></div>
			</div>
			<div className='nav__item'>
				<NavLink to='/skills' className='nav__link'>
					Skills
				</NavLink>
			</div>
			<div className='nav__item'>
				<NavLink to='/projects' className='nav__link'>
					Projects
				</NavLink>
			</div>
			<div className='nav__item'>
				<NavLink to='/hire-me' className='nav__link'>
					Hire Me
				</NavLink>
			</div>
		</div>
	)
}

Navbar.Left = NavbarLeft
Navbar.Right = NavbarRight
// - About
// - Experience
// - Skills
// - Projects
// - Hire Me / Socials
export default Navbar
