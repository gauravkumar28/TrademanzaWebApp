import React, { Component } from "react";
import "./css/eventlist.css";
import { Link } from "react-router-dom";
import { API2 } from "../../backend";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default class CompletedContests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contestslist: undefined,
      status:"",
      eventName:""
    };
    
  }
  fetchContests = () => {
    const eventid = window.location.pathname.split("/")[2];
    const userId = localStorage.getItem("id");
    fetch(`${API2}/users/${userId}/contests?eventId=${eventid}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          contestslist: data.data,
        });
      });
  };
  componentDidMount() {
    let   {status,eventName}=this.props.location.state;

   
    this.setState({
        status:status,
      eventName:eventName
    })
    this.fetchContests();
    this.props.hideSidebar();
  }
  render() {
    const eventid = window.location.pathname.split("/")[2];
    return (
        <div>
            <div className="eventTitleheader" >
            <span>
            <Link className="showtextLink" to={`/events/${this.state.status}`}>
            <ArrowBackIcon style={{fontSize:40}}/>
            </Link>
            {/* <button onClick={this.props.history.goBack} > */}
            {this.state.eventName}
            </span> 
        </div>
      <div className="eventlist">
        {this.state.contestslist && this.state.contestslist.length !== 0 ? (
          this.state.contestslist.map((contest, index) => {
            return (
              <Link to={`/events/${eventid}/${contest.id}/viewportfolio`}>
                <div key={index} className="eventbox">
                  <div className="event-item">{contest.name}</div>
                  <div className="event-itemlink">View</div>
                </div>
              </Link>
            );
          })
        ) : (
          <div>no contests </div>
        )}
      </div>
      </div>
    );
  }
}
