import './Loader.scss'
import LoaderImage from './LoaderImage'

const Loader = () => {
	return <div className='loader__container'>
    <div>
      <LoaderImage className='loader__image' />
    </div>
  </div>
}

export default Loader
