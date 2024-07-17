import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMdqpISkxc2xSDsAB-5euWRykuBJahUVo",
  authDomain: "simple-firebase-2-9710f.firebaseapp.com",
  projectId: "simple-firebase-2-9710f",
  storageBucket: "simple-firebase-2-9710f.appspot.com",
  messagingSenderId: "923297531116",
  appId: "1:923297531116:web:7c052407131b1b7c1691c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth