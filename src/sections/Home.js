import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../scss/main.css";

import tree from "../assets/Images/tree.png";
import keyboard from "../assets/Images/keyboard.png";

const Home = () => {
  const homeRef = useRef();

  useEffect(() => {
    gsap.to(".mainAni", {
      duration: 2,
      y: "0%",
      opacity: 1,
      stagger: 0.3,
      delay: 4,
      ease: "Expo.easeOut",
    });
    gsap.to(".scrollContainer", {
      duration: 2.5,
      x: "0%",
      opacity: 1,
      delay: 6,
      ease: "Expo.easeOut",
    });
  }, []);

  return (
    <div id="home" ref={homeRef}>
      <div className="main_FullBox">
        <div className="main_MainFullBox">
          <div className="main_TextBox">
            <div className="main_firstTextBox">
              <span className="mainAni">FRONTEND</span>
              <span className="mainAni">&</span>
              <div className="mainAni">
                <img src={keyboard} alt="mainImg_keyboard"></img>
              </div>
            </div>

            <div className="main_secondTextBox">
              <div className="secondTextBox1">
                <div className="mainAni">
                  <img src={tree} alt="mainImg_tree"></img>
                </div>
                <span className="mainAni">CREATIVE</span>
              </div>
              <div className="scrollContainer">Scroll</div>
            </div>
            <div className="main_thirdTextBox">
              <span className="mainAni">DEVELOPER</span>
              <div className="main_ContactBox mainAni">
                <p>EMAIL</p>
                <p>GITHUB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
