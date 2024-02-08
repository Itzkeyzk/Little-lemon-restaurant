import React from "react";
import Image from '../images/food.jpg'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'

import { Link } from "react-router-dom";


export const Home = () => {
  

  return (
    
    <div className="hero">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>Lorem ipsum dolor sit amet <br/>
       consectetur adipiscing elit,<br/>
         sed do eiusmod temporincididunt ut labore et dolore magna aliqua.</p>
         <img className="cook" src={Image} alt="imgage" width ="300px" />
         <Link to="/reservation">
        <button className="maker">Make Reservation</button>
      </Link> 
      <div className="headd">
        
          <p className="head_text"> This week special</p>
        
  <div className="grid-container">
  <div className="grid-item">
    
    <img src={image1} alt="Image 1" />
    
    
  </div>
 
  <div className="grid-item">
    <img src={image2} alt="Image 2" />
  </div>
  <div className="grid-item">
    <img src={image3} alt="Image 3" />
  </div>
</div>

      </div>

      
         </div>
  );
};


export default Home;
