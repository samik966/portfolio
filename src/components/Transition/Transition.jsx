import { motion } from 'framer-motion'
import './Transition.scss'


const ParentTransition = {
	hide: {
		x: -500,
		opacity: 0,
		transition: {
			duration: 2,
			type: 'spring',
			damping: 8,
			mass: 0.3,
			stiffness: 70,
			staggerChildren: 0.3,
			delayChildren: 0.2
		}
	},
	show: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 2,
			type: 'spring',
			damping: 8,
			mass: 0.3,
			stiffness: 70,
			staggerChildren: 0.3,
			delayChildren: 0.2
		}
	}
}

const Transition = ({ children, id }) => {
	return (
		<motion.div
			id={id}
			className='page__container'
			initial='hide'
			animate='show'
			exit='hide'
			variants={ParentTransition}
		>
			{children
			}
		</motion.div>
	)
}

export default Transition
