import { Loader, Timeline, Transition } from 'components'
import { usePortfolioContext } from 'context/PortfolioContext'
import './Experience.scss'

const Experience = () => {
	const { experiences } = usePortfolioContext()
	if (!experiences) {
		return <Loader />
	}
	const generateTimeline = () => {
		return experiences.map((exp, i) => {
			return (
				<Timeline.Content key={`${exp.role}_${i}`} content={exp}>
					<h4 className='role'>{exp.role}</h4>
					<p className='company'>{exp.company}</p>
					<p className='duration'>{exp.duration}</p>
					<p className='description'>{exp.description}</p>
				</Timeline.Content>
			)
		})
	}

	return (
		<Transition id='experience__container'>
			<h1>Experience</h1>
			<div className='experience__timeline'>
				<Timeline type='vertical'>{generateTimeline()}</Timeline>
			</div>
		</Transition>
	)
}

export default Experience
