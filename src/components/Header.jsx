import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="navbar shadow-lg header">
      <h1>
        <FontAwesomeIcon icon={faComments} /> Dee-Chat
      </h1>
    </div>
  );
}

export default Header;
