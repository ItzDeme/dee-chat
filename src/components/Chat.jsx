import React, { useState, useEffect } from "react";
import firebase, { db } from "../firebase";

function Chat(props) {
  const [chat, setChat] = useState([]);

  var docRef = db.collection("users").doc("RLG9I9xA5dRPxGReUumJ");

  useEffect(() => {
    docRef
      .get("chats")
      .then((doc) => {
        if (doc.exists) {
          setChat(doc.data().chats);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <div className="col-sm-1 col-md-9 col-lg-9 text-center chat-tab">
      <h1>{props.target}</h1>
      {chat.map((message) => (
        <p>{message.message}</p>
      ))}
      <button
        onClick={() => {
          props.setFriendSelected(false);
        }}
      >
        Change to Memes
      </button>
    </div>
  );
}
export default Chat;
