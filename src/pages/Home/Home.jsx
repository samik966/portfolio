import { motion } from 'framer-motion'
import { LinkButton, Shape, Transition } from 'components'
import { bounceTransition, opacityTransition } from 'utils/transitions'
import HomeImage from './HomeImage'
import './Home.scss'

const Home = () => {
	return (
		<Transition id='home__container'>
			<motion.div className='home__title' variants={opacityTransition}>
				<Shape className='circle shape2' />
				<h1 className='home__name'>Samiuddin Khan</h1>
				<h5 className='home__role'>Frontend Developer</h5>
				<LinkButton href='/hire-me'>Hire Me</LinkButton>
			</motion.div>
			<motion.div className='home__image' variants={opacityTransition}>
				<motion.div animate='show' variants={bounceTransition}>
				<HomeImage />
				</motion.div>
			</motion.div>
		</Transition>
	)
}

export default Home
