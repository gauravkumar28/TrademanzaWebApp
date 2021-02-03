import React, { Component } from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './css/eventshow.css';
import { Link } from "react-router-dom";
import leaderBoardSvg from './images/leaderBoard.svg';
import { API2 } from '../../backend';
export default class Leaderboard extends Component {
    constructor(props) {
        super(props) 
        this.state = {
             leaderboard:[]
        }
    }
    fetchLeaderboard = () => {
        const contestid=window.location.pathname.split('/')[3];
         fetch(`${API2}/contests/${contestid}/leaderboard?userId=${localStorage.getItem("id")}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.data);
            this.setState({
                leaderboard:data.data
            })
        })
    }
    componentDidMount(){
        this.fetchLeaderboard();
    }
       
        render() {
            const contestid=window.location.pathname.split('/')[3];
            const eventid=window.location.pathname.split('/')[2];
            const showTextvalue=this.props.showText==="View Portfolio"?"viewportfolio":"createportfolio";
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
                                        <h2  >UserName</h2>
                                        {
                                            this.state.leaderboard && 
                                            this.state.leaderboard.map((person,index)=> {
                                                return  (<p key={index} className="rankinglist" > {person.userName===""?person.name:person.name}</p>)
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
                            <img src={leaderBoardSvg}  alt="leaderBoard svg"  className="leaderBoardSvg"/>
                        </div>
                </div>
                
            )
        }
}
