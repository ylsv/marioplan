import ProjectSummary from './ProjectSummary'

export default function ProjectList({projects}) {
  return (
    <div className="project-list section">
      {projects?.map(project => (
        <ProjectSummary project={project} key={project.id} />
      ))}
    </div>
  )
}
