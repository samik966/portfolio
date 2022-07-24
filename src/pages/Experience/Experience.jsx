import { Timeline, Transition } from 'components'
import experience from 'utils/experience.json'
import './Experience.scss'

const Experience = () => {
	const generateTimeline = () => {
		return experience.map((exp, i) => {
			return (
				<Timeline.Content key={`${exp.role}_${i}`}>
					<strong className='duration'>{exp.duration}</strong>
					<h5 className='role'>{exp.role}</h5>
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
