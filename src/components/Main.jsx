import React, { useState } from "react";
import Friends from "./Friends";
import Chat from "./Chat";
import Memes from "./Memes";

function Main(props) {
  const [friendSelected, setFriendSelected] = useState(false);
  const [target, setTarget] = useState("");
  function chatSelectedHandler(e) {
    setFriendSelected(true);
    setTarget(e.target.innerHTML);
  }
  return (
    <div className="main row">
      <Friends chatSelectedHandler={chatSelectedHandler} />
      {friendSelected ? (
        <Chat target={target} setFriendSelected={setFriendSelected} />
      ) : (
        <Memes />
      )}
    </div>
  );
}
export default Main;
