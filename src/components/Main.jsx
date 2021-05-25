import React, { useState } from "react";
import Friends from "./Friends";
import Chat from "./Chat";
import Memes from "./Memes";

function Main(props) {
  const firestore = props.firestore;
  const db = props.db;
  const [friendSelected, setFriendSelected] = useState(true);
  return (
    <div className="main row">
      <Friends
        db={db}
        firestore={firestore}
        setFriendSelected={setFriendSelected}
      />
      {!friendSelected ? (
        <Chat setFriendSelected={setFriendSelected} />
      ) : (
        <Memes />
      )}
    </div>
  );
}
export default Main;
