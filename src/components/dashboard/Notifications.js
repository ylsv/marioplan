import {formatSecondsToDate} from '../../helpers/date-formatter'
import {useSelector} from 'react-redux'

export default function Notifications({data: notifications}) {
  const curLang = useSelector(state => state.language.currentLanguage)
  return (
    <div className="section">
      <div className="card z-depth-1">
        <div className="card-content">
          <span className="card-title">
            {curLang === 'ru' ? 'Уведомления' : 'Notifications'}
          </span>
          <ul className="notifications">
            {notifications?.map(note => {
              const creationDate = formatSecondsToDate(
                note.createdAt.seconds,
                curLang
              )
              return (
                <li key={note.id}>
                  <span className="pink-text">
                    {curLang === 'ru'
                      ? `Пользователь ${note.authorName}`
                      : `User ${note.authorName}`}
                  </span>
                  <span>
                    {curLang === 'ru' ? ' создал проект' : ' created project'}
                  </span>
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
