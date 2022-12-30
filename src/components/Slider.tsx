import React, { useState } from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "../styles/slider.scss";

const Slider = () => {

  const [currentSlide, setCuurentSlide] = useState(0);

  
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ];

  const prevSlide = () => {
    setCuurentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  } ;
  const nextSlide = () => {
    setCuurentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className='slider'>
      <div className="container" style={{transform:`translateX(-${currentSlide * 67}vw)`}}>
        <img src={data[0]} alt=''/>
        <img src={data[1]} alt=''/>
        <img src={data[2]} alt=''/>
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