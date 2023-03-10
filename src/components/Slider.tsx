import React, { useState } from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "../styles/slider.scss";

const Slider = () => {

  const [currentSlide, setCuurentSlide] = useState(0);

  const data = [
    "/public/imgs/bg1.jpg",
    "/public/imgs/bg2.jpg",
    "/public/imgs/bg3.jpg",
    "/public/imgs/bg4.jpg",
    "/public/imgs/bg5(1).jpg",
    "/public/imgs/bg6.jpg",
  ];

  const prevSlide = () => {
    setCuurentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1);
  } ;
  const nextSlide = () => {
    setCuurentSlide(currentSlide === 5 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className='slider'>
      <div className="container" style={{transform:`translateX(-${currentSlide * 66}vw)`}}>
        <img src={data[0]} alt=''/>
        <img src={data[1]} alt=''/>
        <img src={data[2]} alt=''/>
        <img src={data[3]} alt=''/>
        <img src={data[4]} alt=''/>
        <img src={data[5]} alt=''/>
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon/>
        </div>
      </div>
    </div>
  )
}

export default Slider