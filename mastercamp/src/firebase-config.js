import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB6riQ0ZZAgt8uQrHPcF0cLmcujDIVnPPQ",
  authDomain: "sport-mc-218.firebaseapp.com",
  projectId: "sport-mc-218",
  storageBucket: "sport-mc-218.appspot.com",
  messagingSenderId: "129951252712",
  appId: "1:129951252712:web:d6d56471208cc9b435095d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);