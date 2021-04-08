import {formatSecondsToDate} from '../../helpers/date-formatter'

export default function Notifications({data: notifications}) {
  return (
    <div className="section">
      <div className="card z-depth-1">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map(note => {
                const creationDate = formatSecondsToDate(note.createdAt.seconds)
                return (
                  <li key={note.id}>
                    <span className="pink-text">
                      {`Пользователь ${note.authorName} `}
                    </span>
                    <span>{note.content}</span>
                    <span> {note.projectName}</span>
                    <div className="grey-text note-date">{creationDate}</div>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </div>
  )
}
