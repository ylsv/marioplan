import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDca3TKjN9p_sadHSXMpzGFB_jIFuXOvnY',
  authDomain: 'plan-creator-d0779.firebaseapp.com',
  projectId: 'plan-creator-d0779',
  storageBucket: 'plan-creator-d0779.appspot.com',
  messagingSenderId: '10620450576',
  appId: '1:10620450576:web:017f2911da924ee8119795',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase
