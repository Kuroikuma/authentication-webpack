import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'


export const app = firebase.initializeApp({
  projectId: 'medicall-3dced',
  appId: '1:663908802543:web:635b6bcf4b249df26a601a',
  databaseURL: 'https://medicall-3dced.firebaseio.com',
  storageBucket: 'medicall-3dced.appspot.com',
  locationId: 'us-central',
  apiKey: 'AIzaSyBJ1p9hEKtKjQ1kzGm5D130wkTSCHCL7tc',
  authDomain: 'medicall-3dced.firebaseapp.com',
  messagingSenderId: '663908802543',
  measurementId: 'G-JBSFQPJE1B',
})
