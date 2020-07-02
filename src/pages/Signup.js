import React, { useContext, useState } from "react"
import { Link, Redirect } from 'react-router-dom'
import { motion } from "framer-motion"
import { VariantPageSlideRight, TransitionLinear } from '../PageTransitions'
import { UserContext } from '../context/UserContext'
import * as EmailValidator from 'email-validator'
import passwordValidator from 'password-validator'
import uniqid from 'uniqid'
import Error from '../components/Error'
import Success from '../components/Success'

const Signup = () => {
    /* context and state hooks */
    const { users, setUsers } = useContext(UserContext);

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ pass, setPass ] = useState("");
    const [ error, setError ] = useState(null);
    const [ success, setSuccess ] = useState(null);
    const [ redirect, setRedirect ] = useState(false);

    /* password validator setup */
    const schema = new passwordValidator();
    schema
    .is().min(8)  
    .is().max(50)       
    .has().digits()                                 

    /* checks to see if user with that email already exists */
    function checkUser(users) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                return true;
            }
        }
    }

    /* form submission handler */
    function handleSubmit(event) {
        event.preventDefault();

        /* validators */
        const validName = name.length > 0;
        const validEmail = EmailValidator.validate(email);
        const emailExists = checkUser(users);
        const validPassword = schema.validate(pass);

        /* testing the validators. if successful, new user object is created and saved. if not, appropriate error message will display */
        if (validName && validEmail && !emailExists && validPassword) {
            let newUser = {
                key: uniqid(),
                name: name,
                email: email,
                password: pass
            };
            setUsers([...users, newUser]);
            setError(null);

            /* display success message and redirect the user after 3 seconds to the sign-in page*/
            setSuccess("Success! You will be redirected to sign-in shortly.");
            setTimeout(() => setRedirect(true), 3000);

            /* display error messages if they did not correctly enter their credentials */
        } else if (!validName) {
            setError("Please enter a name.")
        } else if (!validEmail) {
            setError("Please enter a valid email.")
        } else if (emailExists) {
            setError("That email already exists.")
        } else if (!validPassword) {
            setError("Please enter a valid alpha-numeric password containing at least 8 characters.")
        }
    }

  return (
    <div className="animation-wrapper">

        <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={VariantPageSlideRight}
        transition={TransitionLinear}>
            <div
            className="form-container">
                <div className="form-wrapper">

                <form>
                    <h1 className="small text-center">Sign-Up</h1>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" type="text" placeholder="John Doe" onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="user@email.com" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="password" onChange={(e) => setPass(e.target.value)} />
                    <button type="submit" onClick={handleSubmit}>Sign-Up</button>

                    { error ? <Error msg={error} /> : '' }
                    { success ? <Success msg={success} /> : '' }
                    { redirect ? <Redirect to="/" /> : '' }
                </form>
                <div className="form-footer">
                    Already registered? <Link to="/">Sign-in</Link>
                </div>

                </div>
            </div>
        </motion.div>
        </div>
  );
}

export default Signup;