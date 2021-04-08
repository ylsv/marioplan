import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'

export default function ProjectList({projects}) {
  return (
    <div className="project-list section">
      {projects
        ?.slice()
        .sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)
        .map(project => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <ProjectSummary project={project} />
          </Link>
        ))}
    </div>
  )
}
