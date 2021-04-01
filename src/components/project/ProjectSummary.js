export default function ProjectSummary({project}) {
  const {title, content, date} = project
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>{content}</p>
        <p className="grey-text">{date}</p>
      </div>
    </div>
  )
}
