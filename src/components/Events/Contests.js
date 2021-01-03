import React, { Component } from 'react'
import './css/eventlist.css';
import { Link } from "react-router-dom";
import { API2 } from '../../backend';
export default class Contests extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contestslist:undefined,
        }
        this.fetchContests=this.fetchContests.bind(this)
    }
    fetchContests = () =>{
        const eventid=window.location.pathname.split('/')[2];
        fetch(`${API2}/contests/v2?eventId=${eventid}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                contestslist:data.data
            })
        })
    }
    componentDidMount(){
        this.fetchContests()
        this.props.hideSidebar();
    };
    render() {
        const eventid=window.location.pathname.split('/')[2];
        return (
            <div className="eventlist">
                {
                    (this.state.contestslist &&  this.state.contestslist.NiftyFifty.length!==0) ? 
                    this.state.contestslist.NiftyFifty.map((contest,index) => {
                        return (
                                <Link to={`/events/${eventid}/${contest.id}/createportfolio`}>
                            <div key={index} className="eventbox">
                            <div className="event-item">
                            {contest.name}
                            </div>
                            <div className="event-itemlink">
                                        Play
                            </div> 
                            </div>
                                </Link>
                        )
                    }) : <div>no contests </div>     
                }                  
            </div>
        )
    }
}
