import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'
const LinkButton = ({ as, href, children, ...restProps }) => {
	if (as && as === 'a') {
		return (
			<div className='link__button'>
				<a className='link__button-link' href={href} {...restProps}>
					{children}
				</a>
			</div>
		)
	}
	return (
		<div className='link__button'>
			<Link className='link__button-link' to={href} {...restProps}>
				{children}
			</Link>
		</div>
	)
}

export default LinkButton
