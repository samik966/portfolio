import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'
import { opacityTransition } from 'utils/transitions'
import './Timeline.scss'

const Timeline = ({ children, type }) => {
	return (
		<div className={`timeline__container ${type ?? 'vertical'}`}>
			{children}
		</div>
	)
}

const TimelineContent = ({ children, content }) => {
	const { active } = content
	const lineControl = useAnimationControls()
	const dotActiveControl = useAnimationControls()
	useEffect(() => {
		sequence()
	})
	const sequence = async () => {
		await lineControl.start({
			bottom: [100, -16],
			transition: { duration: 1, ease: 'easeInOut' }
		})
		await dotActiveControl.start({
			border: '4px solid var(--active-dot-border-color)',
			backgroundColor: 'var(--active-dot-bg-color)',
			transition: { duration: 0.5, ease: 'easeInOut' }
		})
	}
	return (
		<motion.div className='timeline' variants={opacityTransition}>
			<div className='timeline__line' />
			<motion.div className='timeline__line active' animate={lineControl} />
			<div className='timeline__dot' />
			{active && (
				<motion.div className='timeline__dot' animate={dotActiveControl} />
			)}
			<div className='timeline__content'>{children}</div>
		</motion.div>
	)
}

Timeline.Content = TimelineContent

export default Timeline
