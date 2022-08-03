import { Transition } from 'components'
import { usePortfolioContext } from 'context/PortfolioContext'
import './Contact.scss'

const Contact = () => {
	const { socials } = usePortfolioContext()
	if (!socials) {
		return <div>Loading....</div>
	}
	const renderSocials = () => {
		return socials.map((social) => {
			const { name, url, image } = social
			return (
				<div className='contact__content' key={name}>
					<a href={url} target='_blank' rel='noopener noreferrer'>
						<img src={image} alt={name} />
						<span>{name}</span>
					</a>
				</div>
			)
		})
	}
	return (
		<Transition id='contact__container'>
			<h1>Get In Touch</h1>
			<div className='contact_socials'>{renderSocials()}</div>
		</Transition>
	)
}

export default Contact
