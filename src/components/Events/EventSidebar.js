import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

import "./css/events.css";
import logo from "../images/favicon.png";
import { API2 } from "../../backend";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return "#5958D4";
  } else {
    return "#FFFFFF";
  }
};

const EventSidebar = ({ history }) => {
  const eventid = window.location.pathname.split("/")[2];
  const contestid = window.location.pathname.split("/")[3];
  const [contest, setContest] = useState([]);
  const userId = localStorage.getItem("id");
  const fetchContest = () => {
    fetch(`${API2}/contests/v2/${contestid}?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setContest([]);
          return null;
        }
        setContest(data.data);
        return data.data;
      });
  };
  useEffect(fetchContest, []);
  return (
    <div id="sidebar">
    <div id="eventsidebar">
      <li className="sidebar-item">
        <Link
          style={{
            color: currentTab(
              history,
              `/events/${eventid}/${contestid}/prizebreakup`
            ),
          }}
          to={`/events/${eventid}/${contestid}/prizebreakup`}
        >
          Prize Breakup
        </Link>
      </li>
      <li className="sidebar-item">
        <Link
          style={{
            color: currentTab(
              history,
              `/events/${eventid}/${contestid}/leaderboard`
            ),
          }}
          to={`/events/${eventid}/${contestid}/leaderboard`}
        >
          Leaderboard
        </Link>
      </li>

      {!contest.showCreatePortfolioButton && contest.showEditPortfolioButton && (
        <li className="sidebar-item">
          <Link
            style={{
              color: currentTab(
                history,
                `/events/${eventid}/${contestid}/editportfolio`
              ),
            }}
            to={`/events/${eventid}/${contestid}/editportfolio`}
          >
            Edit Portfolio
          </Link>
        </li>
      )}
      {((!contest.showCreatePortfolioButton &&
        contest.showEditPortfolioButton) ||
        contest.hasJoined) && (
        <li className="sidebar-item">
          <Link
            style={{
              color: currentTab(
                history,
                `/events/${eventid}/${contestid}/viewportfolio`
              ),
            }}
            to={`/events/${eventid}/${contestid}/viewportfolio`}
          >
            View Portfolio
          </Link>
        </li>
      )}

      {contest.showCreatePortfolioButton && (
        <li className="sidebar-item">
          <Link
            style={{
              color: currentTab(
                history,
                `/events/${eventid}/${contestid}/createportfolio`
              ),
            }}
            to={`/events/${eventid}/${contestid}/createportfolio`}
          >
            Create Portfolio
          </Link>
        </li>
      )}
      {contest.showReport && (
        <li className="sidebar-item">
          <Link
            style={{
              color: currentTab(
                history,
                `/events/${eventid}/${contestid}/report`
              ),
            }}
            to={`/events/${eventid}/${contestid}/report`}
          >
            Report
          </Link>
        </li>
      )}

      <img src={logo} className="logo-design" alt="logo"></img>
    </div>
    </div>
  );
};

export default withRouter(EventSidebar);
