export const createNotification = data => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore()
    firestore
      .collection('notifications')
      .add({
        authorName: `${data.firstName} ${data.lastName}`,
        authorId: data.authorId,
        projectName: data.projectName,
        createdAt: data.createdAt,
      })
      .then(() => {
        dispatch({type: 'CREATE_NOTIFICATION', data})
        dispatch({type: 'HIDE_LOADER'})
      })
      .catch(err => {
        dispatch({type: 'CREATE_NOTIFICATION_ERROR', err})
        dispatch({type: 'HIDE_LOADER'})
      })
  }
}
