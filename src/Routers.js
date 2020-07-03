import React from 'react'
import { Switch, Route, useLocation } from "react-router-dom"
import PrivateRoute from './PrivateRoute'
import { AnimatePresence } from "framer-motion"

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Welcome from './pages/Welcome';
import Phone from './pages/Phone';

const Routers = () => {
    /* useLocation hook keeps track of when components mount/unmount for transition animations */
    const location = useLocation();

    return(
        <AnimatePresence>
            <Switch location={location} key={location.pathname}>
                <Route path="/signup" component={Signup} />
                <PrivateRoute path="/landing" component={Landing} />
                <PrivateRoute path="/welcome" component={Welcome} />
                <PrivateRoute path="/iphone" component={Phone} />
                <Route exact path="/" component={Signin} />
            </Switch>
        </AnimatePresence>
    )
}

export default Routers;