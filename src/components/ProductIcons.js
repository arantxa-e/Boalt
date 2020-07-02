import React from 'react'
import { Link } from 'react-router-dom'
import iphone from '../img/iphone-icon.png'
import mac from '../img/mac-icon.png'
import watch from '../img/watch-icon.png'

const ProductIcons = () => {
    return(
        <div className="product-icons">
            <Link to="/iphone"><img src={iphone} alt="iPhone" /></Link>
            <img src={mac} alt="Macbook Pro" />
            <img src={watch} alt="Apple Watch" />
        </div>
    )
}

export default ProductIcons;