import React from 'react'

const Special = () => {
  return (
    <>
      <div className="special">
        <div className="offer">
            <img src="/public/imgs/shoes.jpg"/>
            <div className="price">
              <h2 className='offer-title'>Was $115</h2>
              <h2 className='new-price'>$75</h2>
            </div>
            <p className='offer-text'>Nike Air Huarache</p>
        </div>
        <div className="offer">
            <img src="/public/imgs/tnf.jpg"/>
            <div className="price">
              <h2 className='offer-title'>Was $80</h2>
              <h2 className='new-price'>$60</h2>
            </div>
            <p className='offer-text'>The North Face Bondi Large Logo Hoodie</p>
        </div>
        <div className="offer">
            <img src="/public/imgs/jackets.jpg"/>
            <div className="price">
              <h2 className='offer-title'>Was $135</h2>
              <h2 className='new-price'>$95</h2>
            </div>
            <p className='offer-text'>Nike Hybrid Jacket</p>
        </div>
        <div className="offer">
            <img src="/public/imgs/hoodie.jpg"/>
            <div className="price">
              <h2 className='offer-title'>Was $65</h2>
              <h2 className='new-price'>$50</h2>
            </div>
            <p className='offer-text'> Hoodrich  Pacific Grey Hoodie(Cotton 100%)</p>
        </div>   
      </div>
    </>
  )
}

export default Special
