import { DisplayHtmlString } from 'components'
import { motion } from 'framer-motion'
import './ProjectCard.scss'
import ProjectStack from './ProjectStack'
import { capitalize } from 'utils/capitalize'

const ProjectCard = ({ project }) => {
	const {
		name,
		image,
		website,
		featured,
		projectType,
		teamSize,
		stack,
		description
	} = project
	const cardClassName = featured ? 'project__card feature' : 'project__card'
	return (
		<a
			key={name}
			className='project__card__link'
			href={website}
			target='_blank'
			rel='noopener noreferrer'
		>
			<motion.div className={cardClassName}>
				{featured && (
					<div className='feature__pin'>
						<img src='assets/images/pin.svg' alt='featured icon' />
					</div>
				)}
				<div className='project__header'>
					<motion.div className='project__image'>
						<img src={image} alt={name} />
					</motion.div>
					<div className='project__stack__container'>
						<ProjectStack stack={stack} />
					</div>
				</div>
				<motion.div className='project__info'>
					<div className="project__type__container">
						<p className="project__type">{capitalize(projectType)}</p>
						{teamSize && <p className="project__team__size">{teamSize} People</p>}
					</div>
					<motion.h5 className='project__name'>{name}</motion.h5>
					<motion.div className='project__description'>
						<DisplayHtmlString content={description} />
					</motion.div>
				</motion.div>
			</motion.div>
		</a>
	)
}

export default ProjectCard
