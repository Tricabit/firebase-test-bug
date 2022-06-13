// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAaiqtiULCNvwOmKUICW8s5ndgSRJeMK4g',
  authDomain: 'test1-ae828.firebaseapp.com',
  databaseURL:
    'https://test1-ae828-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'test1-ae828',
  storageBucket: 'test1-ae828.appspot.com',
  messagingSenderId: '1047622583538',
  appId: '1:1047622583538:web:1d4e160cca6502e379bc6b',
  measurementId: 'G-CS10P65ECP',
};

// Initialize Firebase
const initFirebase = () => {
  if (getApps().length && getApps.length > 0) return getApps()[0];
  return initializeApp(firebaseConfig);
};

export default initFirebase;
