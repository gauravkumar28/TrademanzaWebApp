import React, { Component } from 'react'
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './eventshow.css';


export default class Leaderboard extends Component {
    constructor(props) {
        super(props) 
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="LeaderBoard">

                <table className="PrizeTable">
                    <tr>
                        <th >Rank</th>
                        <th>Name</th>
                    </tr>
                    <tr>
                        <td >Hello </td>
                        <td>adsgasdg</td>
                    </tr>
                    <tr>
                        <td >Hello </td>
                        <td>adsgasdg</td>
                    </tr>
                    <tr>
                        <td style={{paddingRight:"10vw"}}>Hello </td>
                        <td>adsgasdg</td>
                    </tr>
                    <tr>
                        <td style={{paddingRight:"10vw"}} >Hello </td>
                        <td>adsgasdg</td>
                    </tr>
                    <tr>
                        <td style={{paddingRight:"10vw"}} >Hello </td>
                        <td>adsgasdg</td>
                    </tr>
                </table>
                <div className="PortfolioView">
                 {/* View Portfolio  <ArrowForwardIcon/> */}
                </div>
            </div>
        )
    }
}
