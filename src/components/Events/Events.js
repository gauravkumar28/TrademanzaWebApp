import React from 'react';
import {
  Switch, Route 
} from "react-router-dom";
import './events.css';

import Sidebar from './Sidebar';

import { Spotlight } from './spotlight';
import { Upcomingevent } from './upcomingevent';
import {Moreevents} from './moreevents';
import {Todayevent} from './todayevent';
import {Allevents} from './allevents';

import {Eventshow} from './eventshow';


 class Events extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
        showSidebar:true,
     }
   }
   hideSidebar = () => {
      this.setState({
          showSidebar:false,
      })
   }
   showSidebar = () =>{
    this.setState({
        showSidebar:true,
    })
   }
  render() {
    const somedata="this is coming from events";
    return (
        
        <div className="events-page"  style={{color:'white'}}>
        
        {/* <Router> */}
          {this.state.showSidebar && <Sidebar/>}
          {/* <Eventsdata> */}
          <Switch>
                <Route exact path="/events/spotlight"  render={ () => (<Spotlight somedata={somedata}/>) }/>
                <Route exact path="/events/today"  component={Todayevent} />
                <Route exact path="/events/upcoming"  component={Upcomingevent} />
                <Route exact path="/events/more"   component={Moreevents} />              
                <Route  exact path="/events" render={ () => (<Allevents {...this.props} showSidebar={this.showSidebar} />) } />
                <Route path="/events/:id/createportfolio"  render={ () => (<Eventshow {...this.props} hideSidebar={this.hideSidebar} />) }  />
          </Switch>
          {/* </Eventsdata> */}
        {/* </Router> */}
      </div>
    )
  }
}

export default Events;
