import { Transition } from 'components'
import projects from 'utils/projects.json'
import './Projects.scss'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'

const Projects = () => {
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
			<div className='featured__project__container'>
				{renderFeaturedProjects()}
			</div>
			<div className='projects__card__container'>{renderProjects()}</div>
		</Transition>
	)
}

export default Projects
