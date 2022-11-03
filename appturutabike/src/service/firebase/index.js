import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCEsyhpya8NeMOr_2rfLvyT-WnX8Cw43hM",
  authDomain: "turutabike-34886.firebaseapp.com",
  projectId: "turutabike-34886",
  storageBucket: "turutabike-34886.appspot.com",
  messagingSenderId: "409052737017",
  appId: "1:409052737017:web:4d6009c5af8e10f0d36128"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)