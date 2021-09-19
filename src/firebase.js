import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBZlqvzvH92oBpCEDWgd-hYdUrJqV3Zi44",
  authDomain: "todo-react-f5282.firebaseapp.com",
  projectId: "todo-react-f5282",
  storageBucket: "todo-react-f5282.appspot.com",
  messagingSenderId: "27077302673",
  appId: "1:27077302673:web:28798df29969e08c5de230",
  measurementId: "G-1Y7VEDTTX0",
});

const db = getFirestore(firebaseApp);

export { db };
