import React, { Component } from 'react'
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import dollerStack from './dollerStack.svg';
import './css/eventshow.css';
export default class PrizeBreakup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                this is PrizeBreakup
                <img src={dollerStack} width="500px" height="500px" alt="dollerStack svg"/>
            </div>
            
        )
    }
}
