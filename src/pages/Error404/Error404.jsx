import { Transition } from 'components'
import ErrorImage from './ErrorImage'
import './Error404.scss'

const Error404 = () => {
	return (
		<Transition id='error__container'>
			<ErrorImage />
		</Transition>
	)
}

export default Error404
