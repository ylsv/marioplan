import {formatSecondsToDate} from '../../helpers/date-formatter'

export default function ProjectSummary({project}) {
  const {title, content, createdAt} = project
  const creationDate = formatSecondsToDate(createdAt.seconds)

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>{content}</p>
        <p className="grey-text">{`Creation Date: ${creationDate}`}</p>
      </div>
    </div>
  )
}
