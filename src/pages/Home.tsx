import React from 'react'
import Slider from '../components/Slider'
import "../styles/home.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Footer from '../components/Footer';
import SpecialM from '../components/SpecialM';
import SpecialW from '../components/SpecialW';
import Slider1 from '../components/Slider1';

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <img className='logo1' src='/public/imgs/logo.png' alt='logo'/>
        </div>
        <div className="inputs">
          <input className='input' placeholder='Search...'/>
          <button className='button'>Search</button>
        </div>
        <div className="kind">
          <p className='sale'><span>Sale</span></p>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Accessories</p>          
          <p>Brands</p>
          <p>Football</p>
          <p>Sports</p>
        </div>
        <div className="sales">
          <div className="bonus">Christmas sale! USE CODE: XMAS20</div>
          <div className="bonus">Free Global delivery ON ORDER OVER $100</div>
          <div className="bonus">Merry christmas from JD</div>
        </div>
        <div className="main">
          <div className="slider">
            <Slider/> 
          </div>
          <div className="img">
            <img  className="img1" src="/public/imgs/desktop-strip-1680x244-16677d28954a5980f7595e289a8d67bb.webp" alt="" />
          </div>
          <div className="shops">
            <div className="shop">
              <h1 className='shop-title'>Shop men's</h1>
              <p className="shop-text">Up to 50% off Men's Clothing</p>
              <p className="shop-text">Up to 50% off Men's Footwear</p>
              <p className="shop-text">Up to 50% off Men's Accessories</p>
            </div>
            <div className="shop">
              <h1 className='shop-title'>Shop women's</h1>
              <p className="shop-text">Up to 50% off women's Clothing</p>
              <p className="shop-text">Up to 50% off women's Footwear</p>
              <p className="shop-text">Up to 50% off women's Accessories</p>
            </div>
            <div className="shop">
              <h1 className='shop-title'>Shop kids</h1>
              <p className="shop-text">Up to 50% off kid's Clothing</p>
              <p className="shop-text">Up to 50% off kid's Footwear</p>
              <p className="shop-text">Up to 50% off kid's Accessories</p>
            </div>
          </div>
          <SpecialW/>
          <div className="offers">
            <p>Shop the offers</p>
            <p>Show all</p>
          </div>
          <div className="grid">
              <h2 className='nike'>UP TO 40% OFF NIKE</h2>
              <h2 className='nike'>TRACK PANTS FROM $10</h2>
              <h2 className='nike'>UP TO 50% OFF ADIDAS</h2>
              <h2 className='nike'>HOODIES & SWEATSHIRTS FROM $20</h2>
              <h2 className='nike'>UP TO 40% OFF TRAINERS</h2>
              <h2 className='nike'>JACKETS FROM $25</h2>
              <h2 className='nike'>UP TO 50% OFF PUMA</h2>
              <h2 className='nike'>UP TO 40% OFF TOPS</h2>
              <h2 className='nike'>T-SHIRTS</h2>
          </div>
          <div className="offers">
            <p>Sale Top Picks</p>
            <div className="buttons">
              <button className='button1'>Shop Men's</button>
              <button className='button2'>Shop Women's</button>
              <button className='button2'>Shop Kid's</button>
            </div>
          </div>
          <SpecialM/>
          <div className="slider">
            <Slider1/>
          </div>
          <div className="conversation">
            <div className="left-side">
              <h2>Join the conversation</h2>
              <div className="icons">
                <div className="icon">
                  <FacebookIcon/>
                  <p>Facebook</p>
                </div>
                <div className="icon">
                  <YouTubeIcon/>
                  <p>YouTube</p>
                </div>
                <div className="icon">
                  <TwitterIcon/>
                  <p>Twitter</p>
                </div>
                <div className="icon">
                  <InstagramIcon/>
                  <p>Instagram</p>
                </div>
                <div className="icon">
                  <AddAPhotoIcon/>
                  <p>TikTok</p>
                </div> 
              </div>
            </div>
            <div className="right-side">
              <input className='right-input' placeholder='Sign up for the latest news'/>
              <button className='right-button'>Sign Up</button>
            </div>
          </div>
        </div>
          <Footer/>
      </div>
    </>
  )
}

export default Home