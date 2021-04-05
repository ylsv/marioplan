export default function ProjectSummary({project}) {
  const {title, content, createdAt} = project
  const creationDate = new Date(createdAt.seconds * 1000)
  const formattedDate = new Intl.DateTimeFormat('ru', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(creationDate)

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>{content}</p>
        <p className="grey-text">{`Дата создания: ${formattedDate}`}</p>
      </div>
    </div>
  )
}
