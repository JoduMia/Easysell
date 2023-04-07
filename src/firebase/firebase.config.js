// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPA1bm9nzNi0qwwYLp_ahWJNrbK5Mbmw8",
  authDomain: "pos-easysell.firebaseapp.com",
  projectId: "pos-easysell",
  storageBucket: "pos-easysell.appspot.com",
  messagingSenderId: "203220282139",
  appId: "1:203220282139:web:0ea56217d5e6c6e74641be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;