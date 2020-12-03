import React, { Component } from 'react'
import './css/portfolio.css';
import {ArrowUpward,ArrowDownward} from '@material-ui/icons';

export default class CreatePortfolio extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             stocksList:undefined
        }
        this.fetchStocks=this.fetchStocks.bind(this)
    }   
    componentDidMount(){
        this.fetchStocks();
    }
    fetchStocks = () => {
        fetch("https://api.trademanza.com/stocks?type=NiftyFifty")
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            this.setState({
                stocksList:data.data
            })
            // console.log(this.state.stocksList);
        })
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
                    <div className="stock-option-heading">
                    SELECTED STOCKS   
                    </div>
                    <div className="stock-option-heading">
                    AVAILABLE STOCKS
                    </div>
                    <div className="stock-listing">
                    {/* {console.log(this.state.stocksList)} */}
                    {
                        this.state.stocksList ?
                        this.state.stocksList.map((stock,index)=>{
                            return (
                                <div key={index} id="stock">
                                    <div style={{'alignSelf':"flex-end"}}>
                                    <span id="stock-name">{stock.name}</span>
                                    <span id="stock-val"> 
                                    {
                                        stock.dayTrend>0 ? <ArrowUpward style={{ fontSize: 15 }} /> 

                                        :<ArrowDownward style={{ fontSize: 15 }} />
                                    }
                                        {stock.dayTrend>0? stock.dayTrend : -stock.dayTrend}
                                    </span>
                                    </div>
                                    <div >
                                        <button id="stock-sub" >+</button>
                                    </div>
                                </div>
                            )
                        }) : <div>No stocks avial</div>
                    }
                    </div>
                </div>
            </div>
           
            </div>
        )
    }
}



 