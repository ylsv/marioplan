export const createProject = ({form: project}) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore()
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'Walter',
        authorLastName: 'White',
        authorId: 333,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({type: 'CREATE_PROJECT', project})
      })
      .catch(err => {
        dispatch({type: 'CREATE_PROJECT_ERROR', err})
      })
  }
}
