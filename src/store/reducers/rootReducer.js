import authReducer from './authReducer'
import projectReducer from './projectReducer'
import notificationReducer from './notificationReducer'
import langReducer from './langReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  notifications: notificationReducer,
  language: langReducer,
})

export default rootReducer
