import { motion } from 'framer-motion'
import { Transition } from 'components'
import skills from 'utils/skills.json'
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

const cardTransition = {
	show: {
		opacity: 1
	},
	hide: {
		opacity: 0
	}
}
const SkillLevel = ({ level }) => {
	const skillLevelTransition = {
		showLevel: {
			height: level,
			opacity: 1,
			transition: {
				duration: 0.5,
				type: 'spring',
				stiffness: 80,
				damping: 10,
				mass: 2
			}
		},
		hideLevel: {
			opacity: 0,
			height: 0,
			transition: {
				duration: 0.5
			}
		}
	}
	return <motion.div className='skill__level' variants={skillLevelTransition} />
}

const Skills = () => {
	const renderSkills = () => {
		return skills.map((skill) => {
			const image = require(`assets/images/skills/${skill.image}`)
			return (
				<motion.div key={skill.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }}>
					<motion.div
						className='skill__card'
						variants={cardTransition}
					>
						<motion.div
							initial='hideLevel'
							whileHover='showLevel'
							whileTap='showLevel'
							animate='hideLevel'
						>
							<SkillLevel level={skill.level} />
							<div className='skill'>
								<img src={image} alt={skill.name} />
								{skill.name && <p>{skill.name}</p>}
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
