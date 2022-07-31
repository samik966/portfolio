import { motion } from 'framer-motion'
import './Transition.scss'

const Transition = ({ children, id }) => {
	return (
		<motion.div
			id={id}
			className='page__container'
			initial={{ x: -500, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -500, opacity: 0 }}
			transition={{
				duration: 2,
				type: 'spring',
				damping: 8,
				mass: 0.3,
				stiffness: 70,
				staggerChildren: 0.5,
				delayChildren: 0.1
			}}
		>
			{children}
		</motion.div>
	)
}

export default Transition
