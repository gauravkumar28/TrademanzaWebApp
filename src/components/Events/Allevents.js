import React from 'react'
import './css/eventlist.css';
import { Link } from "react-router-dom";


export class Allevents extends React.Component{
        constructor(props) {
            super(props);
            this.state = {  
                eventslist:[],
            }
            this.fetchEvents=this.fetchEvents.bind(this)
        }
        fetchEvents = () =>{
            fetch('https://stgapi.trademanza.com/v3/events')
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
                                 <div key={index} className="eventbox">
                                 <div className="event-item">
                                    {task.name}
                                    {task.startTime}
                                    {task.details}
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



