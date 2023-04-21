import React, { useLayoutEffect } from "react";
import "../scss/contact.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import arrow from "../assets/Images/arrow.png";
// gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useLayoutEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".contact_FullBox",
            start: "top top",
            end: "+=300%",
            scroller: ".App",
            pin: true,
            scrub: 1,
          },
        })
        .to(document.body, {
          backgroundColor: "#FF3E9A",
          color: "white",
        })
        .to(".magicText", {
          scale: 5,
          delay: 0.5,
          color: "white",
        })
        .to(document.body, {
          backgroundColor: "#FFBD3E",
          color: "white",
        })

        .to(document.body, {
          backgroundColor: "#3E8BFF",
          color: "white",
          delay: 0.5,
        })
        .to(".contact_linkBox", {
          y: 0,
          delay: 0.5,
        });

      ScrollTrigger.refresh();
    }, 1000);

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.kill();
    };
  }, []);
  return (
    <div className="contact_FullBox" id="contact">
      <div className="contact_ContentBox">
        <div className="contact_TextBox">
          <p>LET'S MAKE A</p>
          <p className="magicText">MAGIC!</p>
        </div>
        <div className="contact_linkBox">
          <p>
            <a href="mailto:zziboo3773@gmail.com">Contact Me</a>
          </p>
          <div>
            <img src={arrow} alt="contact Img"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
