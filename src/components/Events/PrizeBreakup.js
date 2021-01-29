import React, { Component } from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import dollerStack from './images/dollerStack.svg';
import './css/eventshow.css';
import { Link } from "react-router-dom";
import { API2 } from '../../backend';

export default class PrizeBreakup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prizeList:[]
        }
    }
    fetchPrizeList = () => {
        const contestid=window.location.pathname.split('/')[3];
        fetch(`${API2}/contests/v2/${contestid}/prizes`)
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
        const contestid=window.location.pathname.split('/')[3];
        const eventid=window.location.pathname.split('/')[2];
        const showTextvalue=this.props.showText==="View Portfolio"?"viewportfolio":"createportfolio";
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
                                            return  (<h3 key={index} > {prize.amount}<span> &#8377; </span> </h3>)
                                        })
                                    }
                            </div>
                        </div>
                        <div className="InsideBox">
                                    
                            <Link className="showtextLink" to={`/events/${eventid}/${contestid}/${showTextvalue}`} >
                            {this.props.showText} <ArrowForwardIcon  style={{ fontSize: 40 }} />
                            </Link>
                        </div>
                    </div>
                    <div>   
                        <img src={dollerStack}  alt="dollerStack svg"  className="dollarStackSVG"/>
                    </div>
            </div>
            
        )
    }
}


