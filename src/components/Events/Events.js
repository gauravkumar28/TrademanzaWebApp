import React from "react";
import { Switch, Route } from "react-router-dom";
import "./css/events.css";

import Sidebar from "./Sidebar";

import { Allevents } from "./Allevents";
import { CompletedEvents } from "./CompletedEvents";

import { Eventshow } from "./Eventshow";
import Contests from "./Contests";
import CompletedContests from "./CompletedContests";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: true,
      mobSidebar:true
    };
  }
  hideSidebar = () => {
    this.setState({
      showSidebar: false,
      mobSidebar:false
    });
  };
  showSidebar = () => {
    this.setState({
      showSidebar: true,
      mobSidebar:true
    });
  };
  togglesidebar = () => {
    let preval = this.state.showsidebar;
    this.setState({
      showsidebar: !preval,
    });
  };
  render() {
    return (
      <div className="events-page" style={{ color: "white" }}>
        {this.state.mobSidebar && 
        <div className="sidebar-box-mob">
            {this.state.showsidebar && <Sidebar />}
            <button
              onClick={this.togglesidebar}
              className="toggleSidebar-button"
            >
              <span>menu</span>
            </button>
          </div>
        }
          <div className="sidebar-box">
            <Sidebar />
          </div>
        <Switch>
          <Route
            exact
            key="tomorrow"
            path="/events/tomorrow"
            render={() => (
              <Allevents
                {...this.props}
                showSidebar={this.showSidebar}
                group="tomorrow"
              />
            )}
          />
          <Route
            exact
            key="today"
            path="/events/today"
            render={() => (
              <Allevents
                {...this.props}
                showSidebar={this.showSidebar}
                group="today"
              />
            )}
          />
          <Route
            exact
            key="upcoming"
            path="/events/upcoming"
            render={() => (
              <Allevents
                {...this.props}
                showSidebar={this.showSidebar}
                group="upcoming"
              />
            )}
          />
          <Route
            exact
            key="all"
            path="/events"
            render={() => (
              <Allevents
                {...this.props}
                showSidebar={this.showSidebar}
                group="all"
              />
            )}
          />
          <Route
            exact
            key="completed"
            path="/events/completed"
            render={() => (
              <CompletedEvents
                {...this.props}
                showSidebar={this.showSidebar}
                status="completed"
              />
            )}
          />
          <Route
            exact
            key="live"
            path="/events/live"
            render={() => (
              <CompletedEvents
                {...this.props}
                showSidebar={this.showSidebar}
                status="live"
              />
            )}
          />
          <Route
            exact
            path="/events/:id/contests"
            render={() => (
              <Contests {...this.props} hideSidebar={this.hideSidebar} />
            )}
          />
          <Route
            exact
            key="completedContests"
            path="/events/:id/completedcontests"
            render={() => (
              <CompletedContests
                {...this.props}
                hideSidebar={this.hideSidebar}
              />
            )}
          />
          <Route
            exact
            key="liveContests"
            path="/events/:id/livecontests"
            render={() => (
              <CompletedContests
                {...this.props}
                hideSidebar={this.hideSidebar}
              />
            )}
          />
          <Route
            path="/events/:id"
            render={() => (
              <Eventshow {...this.props} hideSidebar={this.hideSidebar} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Events;
