import React from 'react'
import logo from '../img/logo.png'

const Logo = (props) => {
    return (
        <div className={ props.full ? 'logo full' : 'logo'}>
            <img src={logo} alt="Apple" />
        </div>
    )
}

export default Logo;