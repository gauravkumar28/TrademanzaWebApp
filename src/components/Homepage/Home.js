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
                
                <div class="grid-container">
                    <div class="item1">
                    <Carousel showArrows={false} transitionMs={1000} >
                        <Card text = "The fastest way to learn the stock market"/>
                        <Card text = "Play challenges and quizzes to learn & Earn"/>
                        <Card text = "Our users love us. ‎‎‏‏‎ ‎‏‏‎ ‎ here is what they say"/>
                    </Carousel>

                    <h1 className="title2">‏‏‎<a href="https://play.google.com/store/apps/details?id=com.trademanza&hl=en_IN"> ‎DOWNLOAD NOW</a></h1>
                    </div>
                    <div class ="item2">
                    <div class="grid-container2">
                    <div id="growContainer2">
                    <div class="grow2" ><img src={img1} alt="i2" /></div>
                    <div class="grow3" ><img src={img2} alt="i1" /> ‎</div>
                    </div>
                    </div>
                    </div>
                </div>
                <h1 className="title3">OUR FEATURES</h1>
                <div class="grid-container2">
                    <div id="growContainer">
                    <div class="grow" > C </div>
                    <div class="grow" > L </div>
                    <div class="grow" > S </div>
                    </div>
                </div>

                <h1 className="title3">How to play</h1>
                <div class="grid-container2">
                    <div className="video-container"><iframe src="https://www.youtube.com/embed/_sYg3xa4wB4" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen" width="640" height="480" frameborder="0">
    </iframe> </div>
                </div>

                <h1 className="title3">About us</h1>
                <div class="grid-container2">
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
