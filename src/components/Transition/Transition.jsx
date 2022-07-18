import { motion } from 'framer-motion'
import './Transition.scss'

const Transition = ({ children, id }) => {
	return (
		<motion.div
			id={id}
			className='page__container'
			initial={{ x: -1000, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -1000, opacity: 0 }}
			transition={{
				duration: 2,
				type: 'spring',
				damping: 8,
				mass: 0.6,
				stiffness: 70
			}}
		>
			{children}
		</motion.div>
	)
}

export default Transition
