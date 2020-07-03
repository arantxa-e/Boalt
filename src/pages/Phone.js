import React, { useState, useEffect, useRef } from "react"
import axios from 'axios';
import Navbar from '../components/Navbar'
import { motion } from "framer-motion"
import { VariantPageSlideUp, TransitionLinearMid } from '../PageTransitions'
import ProductIcons from '../components/ProductIcons'
import GrayLogo from '../img/logo-gray.png'
import iPhoneFrontLarge from '../img/iphone-front-lg.png'
import iPhoneBackLarge from '../img/iphone-back-lg.png'
import iPhoneFront from '../img/iphone-front.png'
import iPhoneBack from '../img/iphone-back.png'

const Phone = (props) => {
  const [ loading, setLoading ] = useState(true);
  const [ shipping, setShipping ] = useState('');
  const [ pos, setPos ] = useState(0);
  const posFloat = pos/75;

  /* useRef hook to define boundaries of slider track */
  const constraintsRef = useRef(null)

  /* convert shipping date to MM-DD-YYYY format */
  const convertDate = (res) => {
    let date = new Date(res);
    let m = date.getMonth() + 1;
    let d = date.getDate();
    let y = date.getFullYear();
    if (m < 10) {
      m = `0${m}`;
    }
    if (d < 10) {
      d = `0${d}`;
    }
    console.log(`${m}-${d}-${y}`);
    setShipping(`${m}-${d}-${y}`);
    setLoading(false);
  }

  /* fetching data from endpoing using axios */
  useEffect( () => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://cors-anywhere.herokuapp.com/https://boalt-interview.herokuapp.com/api/shipping-dates'
      );
      return response.data.iphone;
    }
    fetchData().then(res => convertDate(res))}, [])

  return (
    <div className="animation-wrapper">
      <ProductIcons fixed="true" />
      <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={VariantPageSlideUp}
      transition={TransitionLinearMid}>
        <div className="flex-grid-col">            
          <div className="col col-nav">
            <Navbar active="iphone" />
          </div>
        <div className="col col-content">
            <div className="content-wrapper">
              <div className="flex-grid-row">
                <div className="row product-row">
                  <div className="product-content">
                    <img src={GrayLogo} alt="Apple" />
                    <div style={{position: "relative"}}>
                      <h2 className="product-type">iPhone</h2>
                      <h1>The Ultimate iPhone</h1>
                      <p>The future is here. Join the iPhone Upgrade Program to get the latest iPhone - NOW!</p>
                      <span className="shipping">{ loading ? null : `Starts shipping ${shipping}`}</span>
                    </div>
                  </div>
                  <div className="flex-grid-row align-bottom">
                    <div className="product-price">
                      <h3 className="price">From $699</h3>
                      <span className="buy-now">Buy Now &#62;</span>
                    </div>
                    <div className="product-slider">
                      <motion.img animate={{ opacity: (1.2 - posFloat) }} src={iPhoneFront} alt="iPhone Front" />
                      <motion.img animate={{ opacity: (0.2 + posFloat) }} src={iPhoneBack} alt="iPhone Back" />
                      <motion.div className="slider-track" ref={constraintsRef}>
                        <motion.div className="slider"
                          drag="x"
                          dragConstraints={constraintsRef}
                          dragElastic={0}
                          onDrag={
                            (event, info) => {
                              console.log(info.point.x);
                              setPos(info.point.x)}
                          }
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="row product-img-row" style={{ whiteSpace: 'nowrap'}}>
                  <div style={{ position: "relative"}}>
                    <motion.img style={{ position: "absolute", left: "0px" }} animate={{ x: (posFloat * 20) + "vw", opacity: (1 - posFloat) }} src={iPhoneFrontLarge} alt="Brand New iPhone" />
                    <motion.img style={{ position: "absolute", left: "20vw" }} animate={{ x: (-posFloat * 20) + "vw", opacity: (0 + posFloat) }} src={iPhoneBackLarge} alt="Brand New iPhone" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Phone;