import React from 'react'
import iphone from '../img/iphone-icon.png'
import mac from '../img/mac-icon.png'
import watch from '../img/watch-icon.png'

const ProductIcons = () => {
    return(
        <div className="product-icons">
            <img src={iphone} alt="iPhone" />
            <img src={mac} alt="Macbook Pro" />
            <img src={watch} alt="Apple Watch" />
        </div>
    )
}

export default ProductIcons;