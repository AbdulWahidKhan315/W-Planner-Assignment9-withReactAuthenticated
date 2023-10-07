// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChTpqF0n9n14iirh1I5c36K1WCxMvWRH4",
  authDomain: "wedding-event-planner.firebaseapp.com",
  projectId: "wedding-event-planner",
  storageBucket: "wedding-event-planner.appspot.com",
  messagingSenderId: "661517209277",
  appId: "1:661517209277:web:e68f481a6c59eca320b1d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;