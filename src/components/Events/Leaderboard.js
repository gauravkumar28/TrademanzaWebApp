import React, { Component } from 'react'
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './css/eventshow.css';

import leaderBoardSvg from './leaderBoard.svg';
export default class Leaderboard extends Component {
    constructor(props) {
        super(props) 
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                This Is Leaderboard
                <img src={leaderBoardSvg} width="500px" height="500px" alt="Leaderboard svg"/>
            </div>
        )
    }
}
