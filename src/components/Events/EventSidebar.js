import React,{Fragment,useEffect,useState} from 'react';
import {Link,withRouter} from 'react-router-dom';

import './css/events.css';
import logo from '../images/favicon.png';


const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return  "#5958D4" ;
    } else {
      return "#FFFFFF" ;
    }
};

const EventSidebar = ({history}) => {
        const eventid=window.location.pathname.split('/')[2];
        const contestid=window.location.pathname.split('/')[3];
        const [portfolio, setPortfolio] = useState([])
        const checkPortfolio = () => {
            fetch(`https://stgapi.trademanza.com/portfolios?userId=${localStorage.getItem('id')}&contestId=${contestid}`)
            .then(res => res.json())
            .then(data => {
                if(data.error){
                    setPortfolio([]);
                    return null;
                }
                    setPortfolio(data.data);
                return data.data;
            })
        }
        useEffect(checkPortfolio,[]);
        return(
            <div id="sidebar" >
                <li className="sidebar-item">
                    <Link   style={{color:currentTab(history,`/events/${eventid}/${contestid}/prizebreakup`)}}  to={`/events/${eventid}/${contestid}/prizebreakup`} >
                        Prize Breakup
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link  style={{color:currentTab(history,`/events/${eventid}/${contestid}/leaderboard`)}} to={`/events/${eventid}/${contestid}/leaderboard`} >
                        Leaderboard
                    </Link>
                </li>
                { portfolio.length>0 ? 
                    <Fragment>
                    <li className="sidebar-item" >
                    <Link   style={{color:currentTab(history,`/events/${eventid}/${contestid}/editportfolio`)}}  to={`/events/${eventid}/${contestid}/editportfolio`} >
                        {/* the checker will come here  */}
                        Edit Portfolio
                    </Link>
                    </li>
                    <li className="sidebar-item">
                    <Link   style={{color:currentTab(history,`/events/${eventid}/${contestid}/viewportfolio`)}}  to={`/events/${eventid}/${contestid}/viewportfolio`} >
                        View Portfolio
                    </Link>
                    </li>
                    
                    </Fragment>
                    :
                    <li className="sidebar-item" >
                    <Link   style={{color:currentTab(history,`/events/${eventid}/${contestid}/createportfolio`)}}  to={`/events/${eventid}/${contestid}/createportfolio`} >
                        {/* the checker will come here  */}
                        Create Portfolio
                    </Link>
                    </li>
                }


                <img src={logo} className="logo-design" alt="logo"></img>
            </div >

    );
}

export default withRouter(EventSidebar);