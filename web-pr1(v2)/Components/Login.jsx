import React from "react";
import Header from "./Header";

function Login() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="signup-box">
          <div className="box">
            <h2>login</h2>
            <input type="text" placeholder="enter your Email" />
            <input type="password" placeholder="create password" />
            <button>login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
