import { Container, Shape, Logo, Navbar } from 'components'
import './Layout.scss'

const Layout = ({ children }) => {
	return (
		<Container id='layout'>
			<Shape className='circle shape1' />
			<Shape className='circle shape2' />
			<Shape className='rectangle shape3' transform={'rotate(45deg)'} />
			<Logo />
			<Navbar.Left />
			{children}
			<Navbar.Right />
		</Container>
	)
}

export default Layout
