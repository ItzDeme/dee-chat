import React, { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import firebase, { auth } from "../firebase";

import Main from "./Main";
require("dotenv").config();

function Display() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="display">
      <Header />

      <Main />
      {/* <Form isRegistered={isRegistered} setIsRegistered={setIsRegistered} /> */}
      <Footer />
    </div>
  );
}

export default Display;
