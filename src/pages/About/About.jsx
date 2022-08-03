import { motion } from "framer-motion";
import { Transition } from 'components'
import { opacityTransition } from "utils/transitions";
import './About.scss'
const About = () => {
	return (
		<Transition id='about__container'>
			<div className='about'>
				<motion.div className='about__image' variants={opacityTransition}>
					<img src='assets/images/me.jpeg' alt='user' />
				</motion.div>
				<motion.div className='about__description' variants={opacityTransition}>
					<h1>About</h1>
					<p>
						Hello, My name is Samiuddin Khan, I enjoy creating things which
						lives on internet. I am confident, curious and have passion to
						explore and learn new things.
					</p>
					<p>
						I am working as a Frontend developer in a fin-tech startup company
						based in Mumbai, India since May, 2021.
					</p>
					<p>
						Previously, had some experience working as a freelance and
						collaborated with talented people to create web based applications
						for over 2 years.
					</p>
				</motion.div>
			</div>
		</Transition>
	)
}

export default About
