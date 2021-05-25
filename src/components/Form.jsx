import React from "react";

function Form(props) {
  return (
    <div className="form-display">
      <form>
        {!props.isRegistered && (
          <input
            type="text"
            className="form-floating form-input"
            name="username"
            placeholder="Username"
          />
        )}
        <input
          className="form-floating form-input"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="form-floating form-input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          {!props.isRegistered ? "Sign Up" : "LogIn"}
        </button>
      </form>
    </div>
  );
}

export default Form;
