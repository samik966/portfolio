import { motion } from 'framer-motion'
import { Loader, Transition } from 'components'
import { usePortfolioContext } from 'context/PortfolioContext'
import { opacityTransition } from 'utils/transitions'
import './Skills.scss'

const cardContainerTransition = {
	hide: {
		opacity: 0
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.1
		}
	}
}


const skillLevelTransition = {
	showLevel: level => ({
		height: level,
		opacity: 1,
		transition: {
			duration: 0.5,
			type: 'spring',
			stiffness: 80,
			damping: 10,
			mass: 2
		}
	}),
	hideLevel: {
		opacity: 0,
		height: 0,
		transition: {
			duration: 0.5
		}
	}
}
const SkillLevel = ({ level }) => {
	return <motion.div className='skill__level' custom={level} variants={skillLevelTransition} />
}

const Skills = () => {
	const { skills } = usePortfolioContext()
	if (!skills) {
		return <Loader />
	}
	const renderSkills = () => {
		return skills.map((skill) => {
			const { image, name, level } = skill
			return (
				<motion.div key={name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }}>
					<motion.div
						className='skill__card'
						variants={opacityTransition}
					>
						<motion.div
							initial='hideLevel'
							whileHover='showLevel'
							whileTap='showLevel'
							animate='hideLevel'
						>
							<SkillLevel level={level} />
							<div className='skill'>
								<img src={image} alt={name} />
								{name && <p>{name}</p>}
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			)
		})
	}
	return (
		<Transition id='skills__container'>
			<h1>Skills</h1>
			<motion.div
				className='skills__image__container'
				initial='hide'
				animate='show'
				variants={cardContainerTransition}
			>
				{renderSkills()}
			</motion.div>
		</Transition>
	)
}

export default Skills
