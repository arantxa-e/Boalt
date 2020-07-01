import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from "./context/AuthContext";

/* pull 'component' from props and reassign to Component, destructure the rest of the props and apply to Route */
function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useContext(AuthContext);
  
  return (
    <Route {...rest} 
      render={(props) => isAuthenticated ? ( <Component {...props} /> ) : ( <Redirect to="/" /> )}
    />
  );
}

export default PrivateRoute;