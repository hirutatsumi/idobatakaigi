import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB__d2dRTHHGcCwHgqNSDvSBkWBbvWTRK4",
  authDomain: "idobatakigi-with-ham-8afee.firebaseapp.com",
  projectId: "idobatakigi-with-ham-8afee",
  storageBucket: "idobatakigi-with-ham-8afee.appspot.com",
  messagingSenderId: "579037187619",
  appId: "1:579037187619:web:6137374c2e11ebdd726b96",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
