import React from "react";
import "../css/mypage.css";
import Resume from "./Resume";


function Mypage() {
  return (
    <div id="container">
      <div id="mypage">
        <div id="mypage-desc">
          <h1>Twinkle S</h1>
          <p>
            I am a passionate and hardworking developer. I design and build User
            Interfaces.
          </p>
        </div>
        <div id="image">
          <img src="src/assets/Images/mypage.webp" alt="" />
        </div>
        <div id="image-box"></div>
      </div>
      <Resume/>
    </div>
  );
}

export default Mypage;
