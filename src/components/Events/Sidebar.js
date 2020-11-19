import React from 'react';
import {Link} from 'react-router-dom';
import './css/events.css';


class Sidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = { color1: "#5958D4",color2:"white",color3:"white",color4:"white",color5:"white" };
        
    }
      allevents = () => {
        this.setState({ color1: '#5958D4',color2:'white',color3:'white',color4:"white",color5:"white"  });
     }
     spotlight= () => {
        this.setState({ color1: 'white',color2:'#5958D4',color3:'white',color4:"white",color5:"white"  });
     }
     today = () => {
        this.setState({ color1: 'white',color2:'white',color3:'#5958D4',color4:"white",color5:"white"  });
     }
     upcoming=()=>{
         this.setState({color1:'white',color2:'white',color3:'white',color4:'#5958D4',color5:"white" })
     }
     more = () => {
        this.setState({color1:'white',color2:'white',color3:'white',color4:'white',color5:"#5958D4" })
     }
     componentDidMount(){
        if(window.location.pathname==="/events/spotlight")
            this.spotlight();
        if(window.location.pathname==="/events/today")
            this.today();
        if(window.location.pathname==="/events/upcoming")
            this.upcoming();
        if(window.location.pathname==="/events/more")
            this.more();
        if(window.location.pathname==="/events")
            this.allevents();
      }
    render(){
        return(

            <div id="sidebar" >
                <li className="sidebar-item">
                    <Link   style={{color:this.state.color1}} onClick={this.allevents} to='/events' >
                         All events
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link  style={{color:this.state.color2}} onClick={this.spotlight} to="/events/spotlight" >
                        Spotlight
                    </Link>
                </li>
                <li className="sidebar-item" >
                    <Link   style={{color:this.state.color3}} onClick={this.today} to="/events/today" >
                        Today
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link   style={{color:this.state.color4}} onClick={this.upcoming} to="/events/upcoming" >
                        Upcoming
                    </Link>
                </li>
                <li className="sidebar-item" >
                    <Link   style={{color:this.state.color5}} onClick={this.more} to="/events/more" >
                        More
                    </Link>
                </li>     
            </div >

    );
    }
}
export default Sidebar;