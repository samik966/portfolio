import React from 'react'
import './GlassContainer.scss'

const GlassContainer = ({ children, ...restProps }) => {
	return (
		<div className='glass__container' {...restProps}>
			{children}
		</div>
	)
}

export default GlassContainer
