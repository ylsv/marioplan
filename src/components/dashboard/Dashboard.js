import Notifications from './Notifications'
import ProjectList from '../project/ProjectList'
import {useSelector} from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'

export default function Dashboard() {
  useFirestoreConnect([{collection: 'projects'}])
  const projects = useSelector(state => state.firestore.ordered.projects)
  const auth = useSelector(state => state.firebase.auth)
  if (!auth.uid) return <Redirect to="/signin" />

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  )
}
