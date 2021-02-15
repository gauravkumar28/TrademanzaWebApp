import React, { Component } from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './css/eventshow.css';
import { Link } from "react-router-dom";
import leaderBoardSvg from './images/leaderBoard.svg';
import { API2 } from '../../backend';
import {showRanking} from "./helpers";
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
                                {showRanking("Rank",this.state.leaderboard,"rank")}
                                {showRanking("UserName",this.state.leaderboard,"userName")}
                                {showRanking("Score",this.state.leaderboard,"score")}
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
