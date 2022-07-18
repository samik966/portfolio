import HomeImage from './HomeImage'
import './Home.scss'
import { Shape, Transition } from 'components'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<Transition id='home__container'>
			<div className='home__title'>
				<Shape className='circle shape2' />
				<h1 className='home__name'>Samiuddin Khan</h1>
				<h5 className='home__role'>Frontend Developer</h5>
				<div className='home__cta'>
					<Link to='/hire-me' className='home__cta-link'>
						<span className='home__cta-text'>Hire Me</span>
					</Link>
				</div>
			</div>
			<div className='home__image'>
				<HomeImage />
			</div>
		</Transition>
	)
}

export default Home
