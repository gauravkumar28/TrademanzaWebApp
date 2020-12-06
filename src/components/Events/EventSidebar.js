import React from 'react';
import {Link} from 'react-router-dom';
import './css/events.css';
import logo from '../images/favicon.png';

class EventSidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = { color1: "white",color2:"white",color3:"#5958D4",color4:"white"};
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
    componentDidMount(){
        if(window.location.pathname.split('/')[4]==="prizebreakup")
            this.prizeBreakup();
        if(window.location.pathname.split('/')[4]==="leaderboard")
            this.leaderBoard();
        if(window.location.pathname.split('/')[4]==="createportfolio")
            this.createPortfolio();
        if(window.location.pathname.split('/')[4]==="viewportfolio")
            this.viewPortfolio();
    }
    render(){
        const eventid=window.location.pathname.split('/')[2];
        const contestid=window.location.pathname.split('/')[3];
        return(
            <div id="sidebar" >
                <li className="sidebar-item">
                    <Link   style={{color:this.state.color1}} onClick={this.prizeBreakup} to={`/events/${eventid}/${contestid}/prizebreakup`} >
                        Prize Breakup
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link  style={{color:this.state.color2}} onClick={this.leaderBoard} to={`/events/${eventid}/${contestid}/leaderboard`} >
                        Leaderboard
                    </Link>
                </li>
                <li className="sidebar-item" >
                    <Link   style={{color:this.state.color3}} onClick={this.createPortfolio} to={`/events/${eventid}/${contestid}/createportfolio`} >
                        Create Portfolio
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link   style={{color:this.state.color4}} onClick={this.viewPortfolio} to={`/events/${eventid}/${contestid}/viewportfolio`} >
                        View Portfolio
                    </Link>
                </li>
                <img src={logo} className="logo-design" alt="logo"></img>
            </div >

    );
    }
}
export default EventSidebar;