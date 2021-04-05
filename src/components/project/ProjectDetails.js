import {useSelector} from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'
import {formatSecondsToDate} from '../../helpers/date-formatter'

export default function ProjectDetails(props) {
  useFirestoreConnect([{collection: 'projects'}])
  const {id} = props.match.params
  const projects = useSelector(state => state.firestore.ordered.projects)

  if (projects) {
    const project = projects.find(project => project.id === id)
    const {authorFirstName, authorLastName, title, content, createdAt} = project
    const creationDate = formatSecondsToDate(createdAt.seconds)

    return (
      <div>
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{title}</span>
              <p>{content}</p>
              <div className="card-action grey lighten-4 grey-text">
                <div>{`Posted by ${authorFirstName} ${authorLastName}`}</div>
                <div>{creationDate}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}
