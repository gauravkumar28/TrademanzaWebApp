import React from 'react';
import {
  Switch, Route 
} from "react-router-dom";
import './css/events.css';

import Sidebar from './Sidebar';


import {Allevents} from './Allevents';
import { CompletedEvents } from './CompletedEvents';

import {Eventshow} from './Eventshow';
import Contests from './Contests';
import CompletedContests from './CompletedContests';


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

    return (
        
        <div className="events-page"  style={{color:'white'}}>
          {this.state.showSidebar && <Sidebar/>}
          <Switch>
                <Route exact  key="tomorrow" path="/events/tomorrow"  render={ () => (<Allevents {...this.props} showSidebar={this.showSidebar} group="tomorrow"  /> ) }/>
                <Route exact key="today" path="/events/today"  render={ () => (<Allevents {...this.props} showSidebar={this.showSidebar} group="today"/> )} />
                <Route exact key="upcoming" path="/events/upcoming" render={ () => (<Allevents {...this.props} showSidebar={this.showSidebar} group="upcoming"/> )} />
                <Route  exact key="all" path="/events" render={ () => (<Allevents {...this.props} showSidebar={this.showSidebar}  group="all" />) } />
                <Route exact path="/events/completed"   render={ () => (<CompletedEvents {...this.props} showSidebar={this.showSidebar}/> )} />              
                <Route exact path="/events/:id/contests"  render={ () => (<Contests {...this.props} hideSidebar={this.hideSidebar} />) } />
                <Route exact path="/events/:id/completedcontests"  render={ () => (<CompletedContests {...this.props} hideSidebar={this.hideSidebar} />) } />
                <Route path="/events/:id"  render={ () => (<Eventshow {...this.props} hideSidebar={this.hideSidebar} />) }  />
          </Switch>
      </div>
    )
  }
}

export default Events;

