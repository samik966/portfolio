import { capitalize } from "utils/capitalize"

const ProjectStack = ({ stack }) => {
	return stack?.map(s => (
    <div key={s} className="project__stack">{capitalize(s)}</div>
  ))
}

export default ProjectStack
