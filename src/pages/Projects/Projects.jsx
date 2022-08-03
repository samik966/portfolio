import { Loader, Transition } from 'components'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'
import { usePortfolioContext } from 'context/PortfolioContext'
import './Projects.scss'

const Projects = () => {
	const { projects } = usePortfolioContext()
	if (!projects) {
		return <Loader />
	}
	const renderProjects = () => {
		return projects
			.filter((project) => !project.featured)
			.map((project) => <ProjectCard key={project.name} project={project} />)
	}

	const renderFeaturedProjects = () => {
		return projects
			.filter((project) => project.featured)
			.map((project) => (
				<FeaturedProject key={project.name} project={project} />
			))
	}

	return (
		<Transition id='projects__container'>
			<h1>Projects</h1>
			<div className='projects'>
				<div className='projects__card__container'>
					{renderFeaturedProjects()}
				</div>
				<div className='projects__card__container'>{renderProjects()}</div>
			</div>
		</Transition>
	)
}

export default Projects
