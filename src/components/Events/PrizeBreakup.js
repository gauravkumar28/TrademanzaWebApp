import React, { useState,useEffect } from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import dollerStack from './images/dollerStack.svg';
import coin from './images/coin.svg';
import './css/eventshow.css';
import { Link } from "react-router-dom";
import { API2 } from '../../backend';

const PrizeBreakup = (props) => {
    const [prizeList, setPrizeList] = useState();
    const fetchPrizeList = () => {
        const contestid=window.location.pathname.split('/')[3];
        fetch(`${API2}/contests/v2/${contestid}/prizes`)
        .then(res => res.json())
        .then(data => {
            setPrizeList(data.data.prizeBreakupList);
        })
    }
    useEffect(fetchPrizeList,[] );
    const contestid=window.location.pathname.split('/')[3];
    const eventid=window.location.pathname.split('/')[2];
    const showTextvalue=props.showText==="View Portfolio"?"viewportfolio":"createportfolio";    
    return (
        <div className="PrizeBreakup">
                    <div className="PrizeBreakupBox">
                        <div className="prizeBreakupData">
                            <div>

                                    <h2>Rank</h2>
                                    {
                                        prizeList && 
                                        prizeList.map((prize,index)=> {
                                            return  (<h3 key={index} > {prize.rank}</h3>)
                                        })
                                    }

                            </div>
                            <div>
                                    <h2>Prize</h2>
                                    {
                                        prizeList && 
                                        prizeList.map((prize,index)=> {
                                            return  (<h3 key={index} >  {prize.assetType==="coin"?<img src={coin} width="20px" height="20px" alt="coin svg"  />:null } {prize.amount}</h3>)
                                        })
                                    }
                            </div>
                        </div>
                        <div className="InsideBox">
                                    
                            <Link className="showtextLink" to={`/events/${eventid}/${contestid}/${showTextvalue}`} >
                            {props.showText} <ArrowForwardIcon  style={{ fontSize: 40 }} />
                            </Link>
                        </div>
                    </div>
                    <div>   
                        <img src={dollerStack}  alt="dollerStack svg"  className="dollarStackSVG"/>
                    </div>
            </div>
    )
}

export default PrizeBreakup
