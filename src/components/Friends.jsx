import React, { useState, useEffect } from "react";
import Friend from "./Friend";

function Friends(props) {
  const firestore = props.firestore;
  const db = props.db;
  const [friends, setFriends] = useState([]);
  var docRef = db.collection("users").doc("RLG9I9xA5dRPxGReUumJ");

  useEffect(() => {
    docRef
      .get("friends")
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data().friends);

          setUpFriends(doc.data().friends);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  function setUpFriends(people) {
    setFriends(people);
  }

  return (
    <div className="col-sm-1 col-md-3 col-lg-3 friends-tab">
      <h1>Friends</h1>
      {friends.map((friend) => (
        <Friend friend={friend} />
      ))}
      <button
        onClick={() => {
          props.setFriendSelected(false);
        }}
      >
        Change
      </button>
    </div>
  );
}
export default Friends;
