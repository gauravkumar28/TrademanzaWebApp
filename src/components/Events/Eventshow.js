import React from "react";
import { Switch } from "react-router-dom";
import "./css/eventshow.css";
import "./css/eventlist.css";
import CreatePortfolio from "./CreatePortfolio";
import EventSidebar from "./EventSidebar";
import Leaderboard from "./Leaderboard";
import PrizeBreakup from "./PrizeBreakup";
import ViewPortfolio from "./ViewPortfolio";
import PrivateRoute from "./helper/PrivateRoutes";
import { API2 } from "../../backend";
import EditPortfolio from "./EditPortfolio";
import Report from "./Report";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Countdown from "react-countdown";
export class Eventshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contest: {},
      showText: "",
      backbuttonValue: "",
    };
  }

  fetchContest = () => {
    const contestid = window.location.pathname.split("/")[3];
    const userid = localStorage.getItem("id");
    fetch(`${API2}/contests/v2/${contestid}?userId=${userid}`)
      .then((res) => res.json())
      .then((data) => {
        let showtext;
        if (data.data.showCreatePortfolioButton) showtext = "Create Portfolio";
        else showtext = "View Portfolio";
        let backbuttonValue;
        if (data.data.status === "completed" && data.data.hasJoined)
          backbuttonValue = "completedcontests";
        else backbuttonValue = "contests";
        
        this.setState({
          contest: data.data,
          showText: showtext,
          backbuttonValue: backbuttonValue,
        });
      });
  };
  componentWillMount() {
    this.fetchContest();
    this.props.hideSidebar();
  }
  countdownrenderer = ({  days,hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return null;
    } else {
      // Render a countdown
      return (
        <span className="timerShow">
         starts in  {24*days+hours}H {minutes}M {seconds}S
        </span>
      );
    }
  };
  render() {
    // const eventid=window.location.pathname.split('/')[2];
    return (
      <div>
        <div >
          <span className="eventTitleheader eventheader">
            <Link className="showtextLink" to={`/events`}>
              <HiArrowNarrowLeft className="arrow-show" />
            </Link>
            {this.state.contest.name}

          </span>
      
            {this.state.contest.startTime && (
              <Countdown
                date={this.state.contest.startTime}
                renderer={this.countdownrenderer}
              />
            )}
          

          {this.state.contest.prizeMsg && (
            <h2>{this.state.contest.prizeMsg}</h2>
          )}
        </div>
        <div className="eventshow-flex">
          <EventSidebar />
          <Switch>
            <PrivateRoute
              exact
              path="/events/:eventid/:contestid/prizebreakup"
              component={() => <PrizeBreakup showText={this.state.showText} />}
            />
            <PrivateRoute
              exact
              path="/events/:eventid/:contestid/leaderboard"
              component={() => <Leaderboard showText={this.state.showText} />}
            />
            <PrivateRoute
              exact
              path="/events/:eventid/:contestid/createportfolio"
              component={CreatePortfolio}
            />
            <PrivateRoute
              exact
              path="/events/:eventid/:contestid/editportfolio"
              component={EditPortfolio}
            />
            <PrivateRoute
              exact
              path="/events/:eventid/:contestid/report"
              component={Report}
            />
            <PrivateRoute
              exact
              path="/events/:eventid/:contestid/viewportfolio"
              component={ViewPortfolio}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
