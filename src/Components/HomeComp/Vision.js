import React from 'react'
import "./home.css";
import img1 from "../../pictures/vision.jpg";

export const Vision = () => {
  return (
    <div className='vision'>
        <h1>Vision and Mission</h1>

        <div className='visionmission'>
        <img src={img1} alt="vision" />
        <div>
        <div>
            <h2>Vision</h2>
            <p>At Lextra Pharmaceuticals, our vision is to pioneer advancements in healthcare through innovative pharmaceutical solutions. We aspire to be a trailblazing force, dedicated to enhancing the well-being of individuals globally. Our commitment is to push the boundaries of pharmaceutical research, development, and accessibility, contributing to a future where health is a fundamental right for all.</p>
            
        </div>
        <div>
        <h2>Mission</h2>
            <p>Lextra Pharmaceuticals is on a mission to deliver cutting-edge pharmaceuticals that redefine healthcare standards. We are dedicated to developing and providing high-quality, affordable medications that address unmet medical needs. Through rigorous research, ethical practices, and sustainable approaches, we aim to make a lasting impact on global health. Our mission extends beyond medications; we strive to foster a culture of health education, empowerment, and community well-being.</p>
        </div>
        </div>
        </div>
    </div>
  )
}
