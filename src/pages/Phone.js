import React from "react"
import Navbar from '../components/Navbar'
import ProductIcons from '../components/ProductIcons'
import iPhone from '../img/iphone.png'
import iPhoneFront from '../img/iphone-front.png'
import iPhoneBack from '../img/iphone-back.png'

const Phone = (props) => {
  return (
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
              </div>

              <div className="flex-grid-row align-bottom">
                <div className="product-price">
                  <h3 className="price">From $699</h3>
                  <span className="buy-now">Buy Now ></span>
                </div>
                <div className="product-slider">
                  <img src={iPhoneFront} alt="iPhone Front" />
                  <img src={iPhoneBack} alt="iPhone Back" />
                </div>
              </div>
            </div>
            <div className="row product-img-row">
              <img src={iPhone} alt="Brand New iPhone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Phone;