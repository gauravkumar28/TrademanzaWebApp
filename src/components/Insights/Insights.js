import React, { Component } from 'react';
import '../Home.css'

class Insights extends Component {

    render() {
        return(
            <div className="container">
                
                <div class="grid-container">
                    <div class="item1">
                    <h1 className="title">THE FASTEST WAY TO</h1>
                    
                    <h1 className="title">LEARN THE STOCK MARKET</h1>
                    <nav class="indicators">
                        <ul>
                        <li class="current"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        </ul>
                    </nav>

                    <h1 className="title2">DOWNLOAD NOW</h1>
                    </div>
                  
                    <div class ="item2">
                        <div class="rectangle2"></div>
                    </div>
                    <div class ="item2">
                        <div class="rectangle"></div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default Insights