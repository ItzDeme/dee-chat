import React, { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import firebase from "firebase";
import Main from "./Main";
require("dotenv").config();

// Required for side-effects
require("firebase/firestore");

function Display() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
  } else {
    firebase.app(); // if already initialized, use that one
    var db = firebase.firestore();
  }
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="display">
      <Header />

      <Main firebase={firebase} db={db} />
      {/* <Form isRegistered={isRegistered} setIsRegistered={setIsRegistered} /> */}
      <Footer />
    </div>
  );
}

export default Display;
