import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBmowPCoraKqltYVXWEBf1nP2zRSKK0R8I',
  authDomain: 'cactus-ab762.firebaseapp.com',
  projectId: 'cactus-ab762',
  storageBucket: 'cactus-ab762.appspot.com',
  messagingSenderId: '893390002163',
  appId: '1:893390002163:web:7af009a5bf2f045b51e486',
  measurementId: 'G-HSBXE2GFCF',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
