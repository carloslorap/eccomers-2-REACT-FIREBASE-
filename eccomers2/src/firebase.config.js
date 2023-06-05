// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi5NdyS1L78esG8xMDDrR7ADfEwYVTflk",
  authDomain: "maltimart-90d3a.firebaseapp.com",
  projectId: "maltimart-90d3a",
  storageBucket: "maltimart-90d3a.appspot.com",
  messagingSenderId: "68947391103",
  appId: "1:68947391103:web:d94d39506c0981ad02054a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app); 
export const db=getFirestore(app);
export const storage =getStorage(app);

export default app;