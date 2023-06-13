import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB4d9GQm0TjZaArHTKAf_kzA47j1mBHekE",
  authDomain: "mastercamp-218.firebaseapp.com",
  databaseURL: "https://mastercamp-218-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mastercamp-218",
  storageBucket: "mastercamp-218.appspot.com",
  messagingSenderId: "67577824075",
  appId: "1:67577824075:web:1234522bd7cd5b7c32dece",
  measurementId: "G-0PV01N2MYD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

