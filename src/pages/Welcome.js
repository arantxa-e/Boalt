import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProductIcons from '../components/ProductIcons'

const Welcome = () => {
    return (
        <Fragment>
            <div className="grid-col">            
                <div className="nav-col">
                    <Navbar />
                </div>
                
                <div className="content-col">
                    <div className="content-wrapper">
                        <div className="content">
                            <h1 className="text-center">Welcome to Apple</h1>

                        </div>
                        <div className="product-link">
                                <Link to="/iphone">See Our Products</Link>
                            </div>
                    </div>

                    <div className="product-icons-row">
                        <ProductIcons />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Welcome;