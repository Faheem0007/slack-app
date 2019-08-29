import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyARXB4c3M5Odwi8UBlo8JmVs0mMMnD8JeY",
  authDomain: "slack-clone-5ba5b.firebaseapp.com",
  databaseURL: "https://slack-clone-5ba5b.firebaseio.com",
  projectId: "slack-clone-5ba5b",
  storageBucket: "slack-clone-5ba5b.appspot.com",
  messagingSenderId: "622820841969",
  appId: "1:622820841969:web:8755fb66723b56b8"
};

firebase.initializeApp(config);

export default firebase;
