import React, { Component } from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import dollerStack from './dollerStack.svg';
import './css/eventshow.css';
export default class PrizeBreakup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            prizeList:[]
        }
    }
    fetchPrizeList = () => {
        const eventid=window.location.pathname.split('/')[2];
        fetch(`https://api.trademanza.com/contests/v2/${eventid}/prizes`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                prizeList:data.data.prizeBreakupList
            })
        })
    }
    componentDidMount(){
        this.fetchPrizeList();
    }
    render() {
        return (
            <div className="PrizeBreakup">
                    <div className="PrizeBreakupBox">
                        <div className="prizeBreakupData">
                            <div>

                                    <h2>Rank</h2>
                                    {
                                        this.state.prizeList && 
                                        this.state.prizeList.map((prize,index)=> {
                                            return  (<h3 key={index} > {prize.rank}</h3>)
                                        })
                                    }

                            </div>
                            <div>
                                    <h2>Prize</h2>
                                    {
                                        this.state.prizeList && 
                                        this.state.prizeList.map((prize,index)=> {
                                            return  (<h3 key={index} > {prize.amount}</h3>)
                                        })
                                    }
                            </div>
                        </div>
                        <div className="InsideBox">
                            Create Portfolio <ArrowForwardIcon  style={{ fontSize: 40 }} />
                        </div>
                    </div>
                    <div>   
                        <img src={dollerStack}  alt="dollerStack svg"  className="dollarStackSVG"/>
                    </div>
            </div>
            
        )
    }
}


