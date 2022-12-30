import React from 'react'
import "../styles/special.css"
const SpecialW = () => {
  return (
    <>
      <div className="special">
        <div className="offer">
            <img src="/public/imgs/leggins.jpg"/>
            <div className="price">
              <h2 className='offer-title'>Was $125</h2>
              <h2 className='new-price'>$49.99</h2>
              <button className='buy'>Buy</button>
            </div>
            <p className='offer-text'>Women legging</p>
        </div>
        <div className="offer">
            <img src="/public/imgs/shoes1.jpg"/>
            <div className="price">
              <h2 className='offer-title'>Was $135</h2>
              <h2 className='new-price'>$79</h2>
            </div>
            <p className='offer-text'>Reebok shoes</p>
        </div>
        <div className="offer">
            <img src="/public/imgs/shirt.jpg"/>
            <div className="price">
              <h2 className='offer-title'>Was $112</h2>
              <h2 className='new-price'>$89</h2>
            </div>
            <p className='offer-text'>Women Hoodie</p>
        </div>
        <div className="offer">
            <img src="/public/imgs/trousers.jpg"/>
            <div className="price">
              <h2 className='offer-title'>Was $99</h2>
              <h2 className='new-price'>$79</h2>
            </div>
            <p className='offer-text'> Trousers Nike</p>
        </div>   
      </div>
    </>
  )
}

export default SpecialW;