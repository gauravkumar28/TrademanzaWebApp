import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import './css/events.css';
const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return  "#5958D4" ;
    } else {
      return "#FFFFFF" ;
    }
};

const  Sidebar = ({history}) => {
    
        return(

            <div id="sidebar" >
                <li className="sidebar-item">
                    <Link   style={{color:currentTab(history,"/events")}}  to='/events' >
                         All events
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link  style={{color:currentTab(history,"/events/spotlight")}}  to="/events/spotlight" >
                        Spotlight
                    </Link>
                </li>
                <li className="sidebar-item" >
                    <Link   style={{color:currentTab(history,"/events/today")}}  to="/events/today" >
                        Today
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link   style={{color:currentTab(history,"/events/upcoming")}} to="/events/upcoming" >
                        Upcoming
                    </Link>
                </li>
                <li className="sidebar-item" >
                    <Link   style={{color:currentTab(history,"/events/completed")}}  to="/events/completed" >
                       Completed
                    </Link>
                </li> 
                <li className="sidebar-item" >
                    <Link   style={{color:currentTab(history,"/events/more")}}  to="/events/more" >
                        More
                    </Link>
                </li>     
            </div >
)}
export default withRouter(Sidebar);