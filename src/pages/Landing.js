import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Odometer from 'react-odometerjs'
import '../css/odometer-theme-default.css'
import Logo from '../components/Logo'

const Landing = () => {
    /* trigger odometer.js animation by transitioning the year from 1000 to 2019 */
    const [year, setYear] = useState(1000);
    useEffect(() => setYear(2019), []);

    return (
        <Link to="/welcome">
            <Fragment>
                <Logo full="true" />
                <div className="landing-container">
                    <div className="landing-wrapper">
                        <div className="landing-tagline">
                            <h2 className="text-center">New Products Coming This Summer</h2>
                        </div>
                        <div className="landing-year">
                            <h1 className="text-center"><Odometer value={year} format="d" /></h1>
                        </div>
                    </div>
                </div>
            </Fragment>
        </Link>
    );
}

export default Landing;