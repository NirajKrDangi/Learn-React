import './LoginCard.css'
import { useState } from 'react';

function LoginCard() {
  // Define a state variable isLoggedIn and a function setIsLoggedIn using the useState hook.
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      {isLoggedIn ? (
        // If the user is currently logged in (isLoggedIn is true), display the login form.
        <form className="login-form">
          <img
            src='https://www.dafont.com/forum/attach/orig/8/1/815933.png?1'
            alt="instagram-logo"
            className="logo"
          />
          <div className="input-field">
            <input type="text" placeholder="Phone number, user name, or email"></input>
            <input type="password" placeholder="Password"></input>
            <button type="button">Sign In</button>
          </div>
          <p>
            Don't have an account?{' '}
            <span onClick={() => setIsLoggedIn(false)}>Sign up</span>
          </p>
        </form>
      ) : (
        // If the user is not logged in (isLoggedIn is false), display the sign-up form.
        <form className="login-form">
          <img
            src='https://www.dafont.com/forum/attach/orig/8/1/815933.png?1'
            alt="instagram-logo"
            className="logo"
          />
          <div className="input-field">
            <input type="text" placeholder="Phone number, or email"></input>
            <input type="text" placeholder="Full name"></input>
            <input type="text" placeholder="Phone number, user name, or email"></input>
            <input type="password" placeholder="Password"></input>
            <button type="button">Sign up</button>
          </div>
          <p>
            Don't have an account?{' '}
            <span onClick={() => setIsLoggedIn(true)}>Log in</span>
          </p>
        </form>
      )}
    </>
  );
}

export default LoginCard;
