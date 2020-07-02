import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import PrivateRoute from './PrivateRoute'
import { AnimatePresence, motion } from "framer-motion"
import { UserContext } from './context/UserContext'
import { AuthContext } from './context/AuthContext'
import uniqid from 'uniqid'
import './css/App.css'

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Welcome from './pages/Welcome';
import Phone from './pages/Phone';
import MacBook from './pages/MacBook';
import Watch from './pages/Watch';

const App = () => {
  const [ users, setUsers ] = useState([
      {
          key: uniqid(),
          name: "Arantxa Edwards",
          email: "aedwardsglass@gmail.com",
          password: "password"
      }
  ]);

  const [ isAuthenticated, setIsAuthenticated ] = useState(localStorage.getItem("authorized"));

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <UserContext.Provider value={{ users, setUsers }}>
        <Router>
          <Route exact path="/" component={Signin} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/landing" component={Landing} />
          <PrivateRoute path="/welcome" component={Welcome} />
          <PrivateRoute path="/iphone" component={Phone} />
          <PrivateRoute path="/macbook" component={MacBook} />
          <PrivateRoute path="/watch" component={Watch} />
        </Router>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
