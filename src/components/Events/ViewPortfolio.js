import React, { Component } from 'react'
import './portfolio.css';

export default class ViewPortfolio extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
            <div className="portfolio-box">
                <div className="portfolio-details">
                    
                    This is View Portfolio
                </div>
                <div className="stocks-list">
                    STOCK PICKS
                    <div >
                    SELECTED STOCKS   
                    </div>
                    <div>
                    AVAILABLE STOCKS
                    </div>
                </div>
            </div>
           
            </div>
        )
    }
}
