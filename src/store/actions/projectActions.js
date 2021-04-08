import {createNotification} from './notificationActions'

export const createProject = ({form: project}) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore()
    const {firstName, lastName} = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: firstName,
        authorLastName: lastName,
        authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({type: 'CREATE_PROJECT', project})
        dispatch(
          createNotification({
            firstName,
            lastName,
            authorId,
            projectName: project.title,
            createdAt: new Date(),
          })
        )
      })
      .catch(err => {
        dispatch({type: 'CREATE_PROJECT_ERROR', err})
      })
  }
}
