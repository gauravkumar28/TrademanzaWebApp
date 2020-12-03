import React, { Component } from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './css/eventshow.css';

import leaderBoardSvg from './leaderBoard.svg';
export default class Leaderboard extends Component {
    constructor(props) {
        super(props) 
        this.state = {
             leaderboard:[]
        }
    }
    fetchLeaderboard = () => {
        const eventid=window.location.pathname.split('/')[2];
        fetch(`https://api.trademanza.com/contests/${eventid}/leaderboard`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                leaderboard:data.data
            })
        })
    }
    componentDidMount(){
        this.fetchLeaderboard();
    }
       
        render() {
            return (
                <div className="leaderboard">
                        <div className="leaderboardBox">
                            <div className="leaderboardData">
                                <div>
    
                                        <h2 >Rank</h2>
                                        {
                                            this.state.leaderboard && 
                                            this.state.leaderboard.map((person,index)=> {
                                                return  (<p key={index} className="rankinglist" > {person.rank}</p>)
                                            })
                                        }
    
                                </div>
                                <div>
                                        <h2  >Name</h2>
                                        {
                                            this.state.leaderboard && 
                                            this.state.leaderboard.map((person,index)=> {
                                                return  (<p key={index} className="rankinglist" > {person.name}</p>)
                                            })
                                        }
                                </div>
                            </div>
                            <div className="InsideBox">
                                Create Portfolio <ArrowForwardIcon  style={{ fontSize: 40 }} />
                            </div>
                        </div>
                        <div>   
                            <img src={leaderBoardSvg}  alt="leaderBoard svg"  className="leaderBoardSvg"/>
                        </div>
                </div>
                
            )
        }
}
