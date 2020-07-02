import React, { useState } from 'react'
import { UserContext } from './context/UserContext'
import { AuthContext } from './context/AuthContext'
import Routers from './Routers'
import uniqid from 'uniqid'
import './css/App.css'

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
        <div className="router-wrapper">
          <Routers />
        </div>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
