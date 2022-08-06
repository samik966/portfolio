import { motion } from 'framer-motion'
import { Transition } from 'components'
import { usePortfolioContext } from 'context/PortfolioContext'
import { cardContainerTransition, opacityTransition } from 'utils/transitions'
import './Contact.scss'

const Contact = () => {
	const { socials } = usePortfolioContext()
	if (!socials) {
		return <div>Loading....</div>
	}
	const renderSocials = () => {
		return socials.map((social) => {
			const { name, url, image } = social
			return (
				<motion.div
					className='contact__content'
					key={name}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 1.1 }}
					variants={opacityTransition}
				>
					<a href={url} target='_blank' rel='noopener noreferrer'>
						<img src={image} alt={name} />
						<span>{name}</span>
					</a>
				</motion.div>
			)
		})
	}
	return (
		<Transition id='contact__container'>
			<h1>Get In Touch</h1>
			<motion.div
				className='contact_socials'
				initial='hide'
				animate='show'
				variants={cardContainerTransition}
			>
				{renderSocials()}
			</motion.div>
		</Transition>
	)
}

export default Contact
