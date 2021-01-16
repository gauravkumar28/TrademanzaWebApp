import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Card from './cards';
import './Home.css';
import img1 from './image1.jpeg';

import img2 from './image2.jpeg';

class Home extends Component {

    render() {
        return(
            <div className="container">
                {/* <div className="grid-container"> */}
                <div className="row">

                    <div className="col-xl-6 col-md-6">
                    <Carousel className="slideshow"  showArrows={false} transitionMs={1000} >
                        <Card text = "The fastest way to learn the stock market"/>
                        <Card text = "Play challenges and quizzes to learn & Earn"/>
                        <Card text = "Our users love us. ‎‎‏‏‎ ‎‏‏‎ ‎ here is what they say"/>
                    </Carousel>

                    </div>
                    <div className="col-xl-6 col-md-6">
                    {/* <div className="grid-container2"> */}
                    <div id="growContainer2">
                    <div className="grow2" ><img src={img1} alt="i2" /></div>
                    <div className="grow3" ><img src={img2} alt="i1" /> ‎</div>
                    {/* </div> */}
                    </div>

                </div>
                <div className="row">
                <h1 className="title2">‏‏‎<a href="https://play.google.com/store/apps/details?id=com.trademanza&hl=en_IN"> ‎DOWNLOAD NOW</a></h1>
                </div>

                    {/* </div> */}
                </div>
                <br></br>
                <br></br>
                <br></br>

                <h1 className="title3">OUR FEATURES</h1>
                    <div id="growContainer">
                    <div className="grow" > C </div>
                    <div className="grow" > L </div>
                    <div className="grow" > S </div>
                </div>

                <h1 className="title3">How to play</h1>
                <div class="grid-container2">
                    <div className="video-container"><iframe title="video" src="https://www.youtube.com/embed/_sYg3xa4wB4" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"  frameborder="0">
    </iframe> </div>
                </div>

                <h1 className="title3">About us</h1>
                <div className="row">
                    <div className="h2p"><p><strong>Trademanza</strong> aims to bring awareness among people 
                    about financial markets through mock stock games, news feed, learning modules, and quizzes. 
                    We, at Trademanza, believe financial knowledge is one such essential that is often ignored since 
                    childhood.</p> </div>
                </div>
            </div>
        )
    }
}

export default Home
