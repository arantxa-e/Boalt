import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { VariantFadeIn, VariantSlideUp, VariantShrink, VariantSlideDown, TransitionLinearMid } from '../PageTransitions'
import Navbar from '../components/Navbar'
import ProductIcons from '../components/ProductIcons'

const Welcome = () => {
    return (
        <div className="animation-wrapper">
            <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={VariantFadeIn}
            transition={TransitionLinearMid}>
                <div className="flex-grid-col">            
                    <div className="col col-nav">
                        <Navbar />
                    </div>
                    <div className="col col-content welcome-content">
                        <div className="content-wrapper">
                            <div className="welcome-header">
                                <motion.div
                                initial="initial"
                                animate="in"
                                variants={VariantSlideDown}
                                transition={TransitionLinearMid}>
                                    <h1 className="text-center">Welcome to Apple</h1>
                                </motion.div>
                            </div>
                            <div className="product-link">
                                <motion.div
                                    initial="initial"
                                    animate="in"
                                    variants={VariantSlideUp}
                                    transition={TransitionLinearMid}>
                                        <Link to="/iphone">See Our Products</Link>
                                </motion.div>
                            </div>
                            <div className="product-icons-row">
                                <motion.div
                                initial="initial"
                                animate="in"
                                variants={VariantShrink}
                                transition={TransitionLinearMid}>
                                    <ProductIcons />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Welcome;