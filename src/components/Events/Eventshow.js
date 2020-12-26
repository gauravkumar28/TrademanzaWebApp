import React from 'react'
import {
    Switch, Route
} from "react-router-dom";
import './css/eventshow.css'


import CreatePortfolio from './CreatePortfolio';
import EventSidebar from './EventSidebar';
import Leaderboard from './Leaderboard';
import PrizeBreakup from './PrizeBreakup';
import ViewPortfolio from './ViewPortfolio';
import PrivateRoute from './helper/PrivateRoutes';

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
                        
                        <PrivateRoute exact path="/events/:eventid/:contestid/prizebreakup"  component={PrizeBreakup}/>
                        <PrivateRoute exact path="/events/:eventid/:contestid/leaderboard"  component={Leaderboard} />
                        <PrivateRoute exact path="/events/:eventid/:contestid/createportfolio"  component={CreatePortfolio} />
                        <PrivateRoute exact path="/events/:eventid/:contestid/viewportfolio"   component={ViewPortfolio} />              
                </Switch>
                
                </div>
            </div>
        )
    }
}


