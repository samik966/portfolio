import './Timeline.scss'

const Timeline = ({ children, type }) => {
	return (
		<div className={`timeline__container ${type ?? 'vertical'}`}>
			{children}
		</div>
	)
}


const TimelineContent = ({ children }) => {
	return (
		<div className='timeline'>
			<div className='timeline__line' />
			<div className='timeline__dot' />
			<div className='timeline__content'>{children}</div>
		</div>
	)
}

Timeline.Content = TimelineContent

export default Timeline
