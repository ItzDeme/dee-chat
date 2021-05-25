import React from "react";

function Chat(props) {
  return (
    <div className="col-sm-1 col-md-9 col-lg-9 chat-tab">
      <h1>Chat</h1>
      <button
        onClick={() => {
          props.setFriendSelected(true);
        }}
      >
        Change to Memes
      </button>
    </div>
  );
}
export default Chat;
