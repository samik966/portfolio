import './ThemeToggle.scss'

const ThemeToggle = ({ onClick, active }) => {
	const className = active ? 'toggle-on' : 'toggle-off'
	return (
		<div className='theme-toggle__container' onClick={onClick}>
			<div className={`toggle__toggler ${className}`}>
				<div className={className} />
			</div>
		</div>
	)
}

export default ThemeToggle
