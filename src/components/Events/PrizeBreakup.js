import React, { Component } from 'react'
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './eventshow.css';
export default class PrizeBreakup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="Prize-Breakup">
                <table className="PrizeTable">
                    <tr>
                        <th style={{paddingRight:"10vw"}}>Rank</th>
                        <th>Prize</th>
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
