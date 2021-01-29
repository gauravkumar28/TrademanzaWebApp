import React from 'react'
import './css/eventlist.css';
import { Link } from "react-router-dom";
import { API } from '../../backend';


export class Allevents extends React.Component{
        constructor(props) {
            super(props);
            this.state = {  
                eventslist:[],
            }
            this.fetchEvents=this.fetchEvents.bind(this)
        }
        fetchEvents = () =>{
            let reqUrl;
            if(this.props.group) reqUrl=`${API}/events?group=${this.props.group}`;
            else reqUrl=`${API}/events`;
            fetch(reqUrl)
            .then(response => response.json())
            .then(data => this.setState({
                eventslist:data.data,
            })
            )
        }
        componentWillMount(){
            this.fetchEvents()
            this.props.showSidebar();
        };
        render() { 
            const events=this.state.eventslist;
            return (
                <div className="eventlist">
                    {
                         events.map((task,index) => {
                             return (
                                        <Link to={`/events/${task.id}/contests`}>
                                 <div key={index} className="eventbox">
                                 <div className="event-item">
                                    {task.name}
                                    </div>
                                    <div className="event-itemlink">
                                                Play
                                    </div> 
                                 </div>
                                        </Link>
                             )
                         })      
                    }
                </div>
          )
        }
}     



