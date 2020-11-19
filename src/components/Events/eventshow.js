import React from 'react'
import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom";
import './eventshow.css'


import CreatePortfolio from './CreatePortfolio';
import EventSidebar from './EventSidebar';
import Leaderboard from './Leaderboard';
import PrizeBreakup from './PrizeBreakup';
import ViewPortfolio from './ViewPortfolio';

export class Eventshow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             currevent:{},
             eventid:null,
        }
        this.fetchevent=this.fetchevent.bind(this)
    }
   
    fetchevent = () => {
        const eventid=window.location.pathname.split('/')[2];
        this.setState({
            eventid:eventid,
        })
        console.log(eventid)
        console.log('gdasgdsa')
        fetch(`https://stgapi.trademanza.com/events/${eventid}`)
        .then(response => response.json())
        .then(data => this.setState({
            currevent:data.data,
        })
        )
    }
    
    componentWillMount(){
        this.fetchevent()
        this.props.hideSidebar();
    }
    render() {
        const currevent=this.state.currevent;
        const eventid=this.state.eventid;
        return (
            <div>
                <div className="eventheader">
                    <h1>
                    {currevent.name} 
                    </h1> 
                </div>
                <div className='eventshow-flex'>
                   
                <EventSidebar/>
                <Switch>
                        <Route exact path={`/events/${eventid}/prizebreakup`}  component={PrizeBreakup}/>
                        <Route exact path={`/events/${eventid}/leaderboard`}  component={Leaderboard} />
                        <Route exact path={`/events/${eventid}/createportfolio`}  component={CreatePortfolio} />
                        <Route exact path={`/events/${eventid}/viewportfolio`}   component={ViewPortfolio} />              
                </Switch>
                
                </div>
            </div>
        )
    }
}


