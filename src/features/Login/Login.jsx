import React from 'react';
import './styles.css'

function Login() {

  return (
    <div>
      <div id="header">
        <img id="logo" src="./logo.png" alt="Logo" />
        <p id="UWC">UWC <span id="version"> 2.0</span></p>
      </div>
      <div className="col">
        <div id="col-left">
          <p className="welcome">WELCOME TO...</p>
          <p className="cse">CSE</p>
          <p className="cse">UWC 2.0</p>
          <p>This website manages urban waste collection (UWC).</p>
          <p>You only can sign in this website by the account
            that back officers provide</p>
        </div>
        <div id="col-right">
          <form>
            <h1>Login</h1>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="examples@gmail.com" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter password" required /><br /><br />
            <input className="bt" type="submit" defaultValue="Login" /><br /><br />
            <div className="err">
              <a href="#">Can't log in?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;