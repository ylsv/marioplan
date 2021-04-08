import {formatSecondsToDate} from '../../helpers/date-formatter'
import {useSelector} from 'react-redux'

export default function ProjectSummary({project}) {
  const curLang = useSelector(state => state.language.currentLanguage)
  const {title, authorFirstName, authorLastName, createdAt} = project
  const creationDate = formatSecondsToDate(createdAt.seconds, curLang)

  return (
    <div className="card z-depth-1 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>
          {curLang === 'ru'
            ? `Создан пользователем ${authorFirstName} ${authorLastName}`
            : `Posted by ${authorFirstName} ${authorLastName}`}
        </p>
        <p className="grey-text">
          {curLang === 'ru'
            ? `Дата создания: ${creationDate}`
            : `Creation Date: ${creationDate}`}
        </p>
      </div>
    </div>
  )
}
