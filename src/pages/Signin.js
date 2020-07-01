import React, { useContext, useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Error from '../components/Error';

const Signin = () => {
  /* context and state hooks */
  const { users } = useContext(UserContext);
  const [ email, setEmail ] = useState("");
  const [ pass, setPass ] = useState("");
  const [ error, setError ] = useState(null);
  const [ redirect, setRedirect ] = useState(false);

  /* form submission handler */
  function handleSubmit(event) {
    event.preventDefault();
    if (email && pass) {
      checkUser(users);
    } else if (!email) {
      setError("Please enter an email")
    } else if (!pass) {
      setError("Please enter a password")
    }
  }

  /* looks through array of objects to see if user email exists, and if so, if the passwords match */
  function checkUser(users) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        if (users[i].password === pass) {
          /* if email and password are a match, maintain session by setting localStorage "authorized" to true */
          localStorage.setItem("authorized", true);
          setRedirect(true);
          break;
        } else {
          /* email match but password is incorrect */
          setError('Wrong password');
          break;
        }
      } else {
        /* email doesn't match */
        setError("We do not have a user with that email.")
      }
    }
  }

  return (
    <div className="form-container">
      <div className="form-wrapper">
          <form>
            <h1 className="small">Sign-In</h1>
            <label htmlForr="email">Email</label>
            <input id="email" type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <label htmlForr="password">Password</label>
            <input id="password" type="password" placeholder="password" onChange={(e) => setPass(e.target.value)} />
            <button onClick={handleSubmit}>Sign-In</button>

            { error ? <Error msg={error} /> : '' }
            { redirect ? <Redirect to="/landing" /> : '' }
          </form>
          <div className="form-footer text-right">
            Not registered? <Link to="/signup">Sign-up</Link>
          </div>
      </div>
    </div>
  );
}

export default Signin;