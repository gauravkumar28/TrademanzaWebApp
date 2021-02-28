import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import './insights.css';

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return  "#5958D4" ;
    } else {
      return "#FFFFFF" ;
    }

};

const  Sidebar = ({history}) => {
    
        return(

            <div className="sidebar" >
                <li className="sidebar-item">
                    <Link   style={{color:currentTab(history,"/insights")}}  to='/insights' >
                         All Insights
                    </Link>
                </li>
                <li className="sidebar-item" >
                    <Link   style={{color:currentTab(history,"/insights/latest")}}  to="/insights/latest" >
                        Latest
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link  style={{color:currentTab(history,"/insights/tech")}}  to="/insights/tech" >
                        Tech
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link   style={{color:currentTab(history,"/insights/automobile")}} to="/insights/automobile" >
                        Automobile
                    </Link>
                </li>

                <li className="sidebar-item">
                    <Link   style={{color:currentTab(history,"/insights/finance")}} to="/insights/finance" >
                        Finance
                    </Link>
                </li>


                <li className="sidebar-item" >
                    <Link   style={{color:currentTab(history,"/insights/telecom")}}  to="/insights/telecom" >
                       Telecom
                    </Link>
                </li> 

                <li className="sidebar-item" >
                    <Link   style={{color:currentTab(history,"/insights/oilgas")}}  to="/insights/oilgas" >
                       Oil & Gas
                    </Link>
                </li> 

                
  
            </div >
)}
export default withRouter(Sidebar);