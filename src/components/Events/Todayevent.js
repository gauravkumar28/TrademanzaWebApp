import React from 'react'
import './css/eventlist.css';
import { Link } from "react-router-dom";
import { API } from '../../backend';


export class Todayevent extends React.Component{
        constructor(props) {
            super(props);
            this.state = {  
                eventslist:[],
            }
            this.fetchEvents=this.fetchEvents.bind(this)
        }
        fetchEvents = () =>{
            fetch(`${API}/events?group=today`)
            .then(response => response.json())
            .then(data => data.data)
            .then(data =>{ 
                this.setState({
                    eventslist:data
                })
            })
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
                                 <div key={index} className="eventbox">
                                 <div className="event-item">
                                    {task.name}
                                    </div>
                                    <div className="event-itemlink">
                                        <Link to={`/events/${task.id}/contests`}>
                                                Play
                                        </Link>
                                    </div> 
                                 </div>
                             )
                         })      
                    }
                </div>
          )
        }
}     



