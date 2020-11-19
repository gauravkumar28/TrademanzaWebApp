import React from 'react';
import {Link} from 'react-router-dom';
import './events.css';
import logo from './favicon.png';

class EventSidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = { color1: "#5958D4",color2:"white",color3:"white",color4:"white"};
        
    }
    prizeBreakup = () => {
        this.setState({ color1: '#5958D4',color2:'white',color3:'white',color4:"white" });
    }
    leaderBoard= () => {
        this.setState({ color1: 'white',color2:'#5958D4',color3:'white',color4:"white" });
    }
    createPortfolio = () => {
        this.setState({ color1: 'white',color2:'white',color3:'#5958D4',color4:"white"  });
    }
    viewPortfolio =()=>{
        this.setState({color1:'white',color2:'white',color3:'white',color4:'#5958D4' })
    }
    componentWillUpdate(){
        if(window.location.pathname==="/events/:eventid/prizebreakup")
            this.prizeBreakup();
        if(window.location.pathname==="/events/:eventid/leaderboard")
            this.leaderBoard();
        if(window.location.pathname==="/events/:eventid/createportfolio")
            this.createPortfolio();
        if(window.location.pathname==="/events/:eventid/viewportfolio")
            this.viewPortfolio();
    }
    render(){
        const eventid=window.location.pathname.split('/')[2];
        return(
            <div id="sidebar" >
                <li className="sidebar-item">
                    <Link   style={{color:this.state.color1}} onClick={this.prizeBreakup} to={`/events/${eventid}/prizebreakup`} >
                        Prize Breakup
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link  style={{color:this.state.color2}} onClick={this.leaderBoard} to={`/events/${eventid}/leaderboard`} >
                        Leaderboard
                    </Link>
                </li>
                <li className="sidebar-item" >
                    <Link   style={{color:this.state.color3}} onClick={this.createPortfolio} to={`/events/${eventid}/createportfolio`} >
                        Create Portfolio
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link   style={{color:this.state.color4}} onClick={this.viewPortfolio} to={`/events/${eventid}/viewportfolio`} >
                    View Portfolio
                    </Link>
                </li>
                <img src={logo} className="logo-design" alt="logo"></img>
            </div >

    );
    }
}
export default EventSidebar;