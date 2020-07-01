import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'

const Navbar = (props) => {
    return (
        <nav>
            <div className="nav-logo">
                <Link to="/landing">
                    <Logo size="icon" className={ props.size ? 'full' : null } />
                </Link>
            </div>
            <div className="nav-links">
                <Link to="iphone">iPhone</Link>
                <Link to="macbook">MacBook Pro</Link>
                <Link to="watch">Watch</Link>
                <button className="cta">Notify Me</button>
            </div>
        </nav>
    );
}

export default Navbar;