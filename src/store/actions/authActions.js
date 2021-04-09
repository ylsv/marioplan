export const signIn = credentials => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()

    dispatch({type: 'SHOW_LOADER'})
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({type: 'LOGIN_SUCCESS'})
        dispatch({type: 'HIDE_LOADER'})
      })
      .catch(err => {
        dispatch({type: 'LOGIN_ERROR', err})
        dispatch({type: 'HIDE_LOADER'})
      })
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()
    dispatch({type: 'SHOW_LOADER'})
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({type: 'SIGNOUT_SUCCESS'})
        dispatch({type: 'HIDE_LOADER'})
      })
      .catch(err => console.log(err))
  }
}

export const signUp = newUser => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    dispatch({type: 'SHOW_LOADER'})
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        return firestore
          .collection('users')
          .doc(res.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          })
      })
      .then(() => {
        dispatch({type: 'SIGNUP_SUCCESS'})
        dispatch({type: 'HIDE_LOADER'})
      })
      .catch(err => {
        dispatch({type: 'SIGNUP_ERROR', err})
        dispatch({type: 'HIDE_LOADER'})
      })
  }
}
