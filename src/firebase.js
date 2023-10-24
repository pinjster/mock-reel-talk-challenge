import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJZ0G0ca5aXoGvCvpH4tN31LwrCCQIvjo",
  authDomain: "mock-reel-talk-challenge.firebaseapp.com",
  projectId: "mock-reel-talk-challenge",
  storageBucket: "mock-reel-talk-challenge.appspot.com",
  messagingSenderId: "225216224296",
  appId: "1:225216224296:web:e963cf919b1ee7a852a91d"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;