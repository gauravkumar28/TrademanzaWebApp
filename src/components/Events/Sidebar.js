import React from 'react';
import { Fragment } from 'react';
import {Link,withRouter} from 'react-router-dom';
import './css/events.css';
import { isAuthenticated } from './helper/index';

const currentTab = (history, path) => {
    let url=history.location.pathname;
    if(url[url.length-1]==='/') url=url.slice(0,url.length-1); 
    if (url === path) {
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
                <li className="sidebar-item" >
                    <Link   style={{color:currentTab(history,"/events/today")}}  to="/events/today" >
                        Today
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link  style={{color:currentTab(history,"/events/tomorrow")}}  to="/events/tomorrow" >
                        Tomorrow
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link   style={{color:currentTab(history,"/events/upcoming")}} to="/events/upcoming" >
                        Upcoming
                    </Link>
                </li>
                { isAuthenticated() && 
                <Fragment>
                    <li className="sidebar-item" >
                        <Link   style={{color:currentTab(history,"/events/live")}}  to="/events/live" >
                        Live
                        </Link>
                    </li> 
                    <li className="sidebar-item" >
                        <Link   style={{color:currentTab(history,"/events/completed")}}  to="/events/completed" >
                        Completed
                        </Link>
                    </li>
                </Fragment>
                }
  
            </div >
)}
export default withRouter(Sidebar);