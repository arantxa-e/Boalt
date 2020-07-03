import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'

const Navbar = (props) => {
    return (
        <nav>
            <div className="flex-grid-row">
                <div className="nav-logo">
                    <Link to="/landing">
                        <Logo size="icon" className={ props.size ? 'full' : null } />
                    </Link>
                </div>
                
                <div className="nav-links">
                    <Link to="iphone" className={ props.active === 'iphone' ? 'focus' : null }>iPhone</Link>
                    <Link to="iphone">MacBook Pro</Link>
                    <Link to="iphone">Watch</Link>
                    <button className="cta">Notify Me</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;