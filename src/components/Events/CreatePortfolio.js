import React, { Component } from 'react'
import './css/portfolio.css';


export default class CreatePortfolio extends Component {
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
                    
                    This is CreatePortfolio
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
