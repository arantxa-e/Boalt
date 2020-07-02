import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProductIcons from '../components/ProductIcons'

const Welcome = () => {
    return (   
        <div className="flex-grid-col">            
            <div className="col col-nav">
                <Navbar />
            </div>
            <div className="col col-content welcome-content">
                <div className="content-wrapper">
                    <div className="welcome-header">
                        <h1 className="text-center">Welcome to Apple</h1>
                    </div>
                    <div className="product-link">
                        <Link to="/iphone">See Our Products</Link>
                    </div>
                    <div className="product-icons-row">
                        <ProductIcons />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;