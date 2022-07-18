import './Container.scss'

const Container = ({ children, ...restProps }) => {
	return (
		<section className='container' {...restProps}>
			{children}
		</section>
	)
}

export default Container
