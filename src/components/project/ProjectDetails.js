import {useSelector} from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'
import {formatSecondsToDate} from '../../helpers/date-formatter'
import {Redirect} from 'react-router-dom'

export default function ProjectDetails(props) {
  useFirestoreConnect([{collection: 'projects'}])
  const {id} = props.match.params
  const projects = useSelector(state => state.firestore.ordered.projects)

  const auth = useSelector(state => state.firebase.auth)
  if (!auth.uid) return <Redirect to="/signin" />

  if (projects) {
    const project = projects.find(project => project.id === id)
    if (!project)
      return (
        <h5 className="container center noproject">
          There is no such project with id - {id}
        </h5>
      )

    const {authorFirstName, authorLastName, title, content, createdAt} = project
    const creationDate = formatSecondsToDate(createdAt.seconds)

    return (
      <div>
        <div className="container section project-details">
          <div className="card z-depth-1">
            <div className="card-content">
              <span className="card-title">{title}</span>
              <p>{content}</p>
              <div className="card-action red lighten-5 grey-text">
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
