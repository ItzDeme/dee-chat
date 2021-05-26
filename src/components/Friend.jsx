import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faBan } from "@fortawesome/free-solid-svg-icons";

function Friend(props) {
  const friend = props.friend;
  const [isHover, setIsHover] = useState(false);

  function onHover() {
    setIsHover(true);
  }
  function mouseOff() {
    setIsHover(false);
  }
  function getName(e) {
    console.log(e.target.innerHTML);
  }
  return (
    <div className="row friend-row">
      <div
        onMouseOver={() => onHover()}
        onMouseOut={() => mouseOff()}
        className={`col-8 friend message-button  + ${isHover ? "hovered" : ""}`}
        onClick={(e) => {
          props.chatSelectedHandler(e);
        }}
        name={friend.username}
      >
        <h4>{friend.username}</h4>
      </div>
      <div
        onMouseOver={() => onHover()}
        onMouseOut={() => mouseOff()}
        className={`col-2 friend delete-button  + ${isHover ? "hovered" : ""}`}
        onClick={(e) => {
          props.chatSelectedHandler(e);
        }}
      >
        <FontAwesomeIcon icon={faTrashAlt} size="2x" />
      </div>
      <div
        onMouseOver={() => onHover()}
        onMouseOut={() => mouseOff()}
        className={`col-2 friend block-button " + ${isHover ? "hovered" : ""}`}
        onClick={(e) => {
          props.chatSelectedHandler(e);
        }}
      >
        <FontAwesomeIcon icon={faBan} size="2x" />
      </div>
    </div>
  );
}
export default Friend;
