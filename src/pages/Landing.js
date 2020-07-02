import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { VariantExitFade, VariantSlideDown, VariantSlideShrink, VariantFadeIn, VariantConstrain, TransitionLinear, TransitionLinearSlow } from '../PageTransitions'
import Odometer from 'react-odometerjs'
import '../css/odometer-theme-default.css'
import Logo from '../components/Logo'

const Landing = () => {
    /* trigger odometer.js animation by transitioning the year from 1000 to 2019 */
    const [year, setYear] = useState(1000);
    useEffect(() => setYear(2019), []);

    return (
        <div className="animation-wrapper">
            <motion.div
            initial="initial"
            animate="initial"
            exit="out"
            variants={VariantExitFade}
            transition={TransitionLinear}>
                <Link to="/welcome">
                    <motion.div
                    initial="initial"
                    animate="in"
                    variants={VariantSlideDown}
                    transition={TransitionLinearSlow}>
                        <Logo full="true" />
                    </motion.div>
                    <motion.div
                    initial="initial"
                    animate="in"
                    variants={VariantConstrain}
                    transition={TransitionLinearSlow}>
                        <div className="landing-container">
                            <div className="landing-wrapper">
                                <div className="landing-tagline">
                                    <motion.div 
                                    initial="initial"
                                    animate="in"
                                    variants={VariantSlideShrink}
                                    transition={TransitionLinearSlow}>
                                        <h2 className="text-center">New Products Coming This Summer</h2>
                                    </motion.div>
                                </div>
                                <div className="landing-year">
                                    <motion.div
                                    initial="initial"
                                    animate="in"
                                    variants={VariantFadeIn}
                                    transition={TransitionLinearSlow}>
                                        <h1 className="text-center"><Odometer value={year} format="d" /></h1>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Link>
            </motion.div>
        </div>

    );
}

export default Landing;