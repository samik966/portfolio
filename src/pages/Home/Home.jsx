import HomeImage from './HomeImage'
import './Home.scss'
import { LinkButton, Shape, Transition } from 'components'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<Transition id='home__container'>
			<div className='home__title'>
				<Shape className='circle shape2' />
				<h1 className='home__name'>Samiuddin Khan</h1>
				<h5 className='home__role'>Frontend Developer</h5>
				<LinkButton href='/hire-me'>Hire Me</LinkButton>
			</div>
			<div className='home__image'>
				<HomeImage />
			</div>
		</Transition>
	)
}

export default Home
