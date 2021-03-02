import React, { Component } from "react";
import TextCrousel from "react-elastic-carousel";
import {Carousel} from './Carousel';
import { Link } from "react-router-dom";
import "./Home.css";
import i1 from "./images/1.png";
import i2 from "./images/2.png";
import i3 from "./images/3.png";
import i4 from "./images/4.png";
import i5 from "./images/5.png";



class Home extends Component {
  render() {
    let slides = [
      <div className="img-carousel-div">
      <img  src={i1} alt="1" /> </div>,
      <div className="img-carousel-div">
      <img  src={i2} alt="2" /> </div>,
      <div className="img-carousel-div">
      <img  src={i3} alt="3" /> </div>  ,
      <div className="img-carousel-div">
      <img  src={i4} alt="4" /> </div>  ,
      <div className="img-carousel-div">
      <img  src={i5} alt="5" /> </div> ];
    
    return (
      <div className="container">
        <div className="SlideShowDiv">
          <div className="text-Crousel">
            <TextCrousel
              className="slideshow"
              showArrows={false}
              transitionMs={700}
              autoTabIndexVisibleItems={true}
              enableAutoPlay={true}
              autoPlaySpeed={2000}
            >
            <div className="card">The fastest way to learn the stock market</div>
            <div className="card">Play challenges and quizzes to learn & Earn</div>
            <div className="card">Our users love us. ‎‎‏‏‎ ‎‏‏‎ ‎ here is what they say</div>
            </TextCrousel>
          </div>
            <div className="image-carousel" >
            <Carousel slides={slides} autoplay={true}   interval={2000}/>
          </div> 
        </div>
        <div className="SpaceBox"></div>
        <div className="HeadingStyle">
              <Link to="/events">Play Now</Link>‏‏‎

        </div>
        <div className="HeadingStyle margintop-2">
        <a href="https://play.google.com/store/apps/details?id=com.trademanza&hl=en_IN">
                ‎DOWNLOAD NOW
              </a>
        </div>
        <h1 className="HeadingStyle">OUR FEATURES</h1>
        <div id="growContainer">
          <Link to="/events" className="grow">
            C
          </Link>
          <Link to="/trainings" className="grow">
            L
          </Link>
          <div className="grow"> S </div>
        </div>

        <h1 className="HeadingStyle">How to play</h1>

        {/* <div className="grid-container2"> */}
          <div className="video-container">
            <iframe
              title="video"
              src="https://www.youtube.com/embed/_sYg3xa4wB4"
              allow="autoplay; encrypted-media"
              allowfullscreen="allowfullscreen"
              frameborder="0"
            ></iframe>{" "}
          </div>
        {/* </div> */}

        <h1 className="HeadingStyle">About us</h1>
        <div className="row">
          <div className="about" >
              <strong>Trademanza</strong> aims to bring awareness among people
              about financial markets through mock stock games, news feed,
              learning modules and quizzes. We at Trademanza, believe
              financial knowledge is one such essential that is often ignored
              since childhood.

          </div>
        </div>
        
      
      </div>
    );
  }
}

export default Home;
