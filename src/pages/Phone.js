import React, { useState, useEffect, useRef } from "react"
import axios from 'axios';
import Navbar from '../components/Navbar'
import { motion } from "framer-motion"
import { VariantPageSlideUp, TransitionLinearMid } from '../PageTransitions'
import ProductIcons from '../components/ProductIcons'
import iPhoneFrontLarge from '../img/iphone-front-lg.png'
import iPhoneBackLarge from '../img/iphone-back-lg.png'
import iPhoneFront from '../img/iphone-front.png'
import iPhoneBack from '../img/iphone-back.png'

const Phone = (props) => {

  const constraintsRef = useRef(null)

  const [ loading, setLoading ] = useState(true);
  const [ shipping, setShipping ] = useState('');
  const [ pos, setPos ] = useState(0);
  const posFloat = pos/75;

    useEffect( () => {
      const fetchData = async () => {
        const response = await axios.get(
          'https://cors-anywhere.herokuapp.com/https://boalt-interview.herokuapp.com/api/shipping-dates'
        );
        setShipping(response.data);
        setLoading(false);
        console.log(shipping);
        console.log('hello from fetchdata')
      };
      fetchData()}, [])



  return (
    <div className="animation-wrapper">
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
                    <h2 className="product-type">iPhone</h2>
                    <h1>The Ultimate iPhone</h1>
                    <p>The future is here. Join the iPhone Upgrade Program to get the latest iPhone - NOW!</p>
                    <span className="shipping">{ loading ? null : `Starts shipping ${shipping.iphone }`}</span>
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
                  <div>
                    <motion.img style={{ position: "relative", left: "0px" }} animate={{ x: (posFloat * 20) + "vw", opacity: (1 - posFloat) }} src={iPhoneFrontLarge} alt="Brand New iPhone" />
                    <motion.img animate={{ x: (-posFloat * 20) + "vw", opacity: (0 + posFloat) }} src={iPhoneBackLarge} alt="Brand New iPhone" />
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