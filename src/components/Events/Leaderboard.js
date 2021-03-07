import React, { Component } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./css/eventshow.css";
import { Link } from "react-router-dom";
import leaderBoardSvg from "./images/leaderBoard.svg";
import { API2 } from "../../backend";
import { showRanking } from "./helpers";
export default class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderboard: [],
      currPage:1,
      totalPage:0,
    };
  }
  fetchLeaderboard = (chk) => {
    let page=this.state.currPage+chk;
    const contestid = window.location.pathname.split("/")[3];
    fetch(
      `${API2}/contests/v2/${contestid}/leaderboard?userId=${localStorage.getItem(
        "id"
      )}&size=50&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          leaderboard: data.data.playerList,
          currPage:page,
          totalPage:Math.ceil(data.data.total/50)
        });
      });
  };
  componentDidMount() {
    this.fetchLeaderboard(0);
  }

  render() {
    const contestid = window.location.pathname.split("/")[3];
    const eventid = window.location.pathname.split("/")[2];
    const showTextvalue =
      this.props.showText === "View Portfolio"
        ? "viewportfolio"
        : "createportfolio";
    return (
      <div className="leaderboard">
        <div className="leaderboardBox">
          <div>
                    <div className="leaderboardData">
            
            {showRanking("Rank", this.state.leaderboard, "rank")}
            {showRanking("UserName", this.state.leaderboard, "userName")}
            {showRanking("Score", this.state.leaderboard, "score")}
          </div>

          { this.state.totalPage>1 && 
          <div className="leaderboard-navigator">
            {this.state.currPage===1 ? <button className="leaderboardButton" disabled >Prev</button> :<button className="leaderboardButton" onClick={()=>this.fetchLeaderboard(-1)}>Prev</button>} 
            {this.state.currPage===this.state.totalPage ? 
              <button className="leaderboardButton" disabled>Next</button>
            :
            <button className="leaderboardButton" onClick={ () =>  this.fetchLeaderboard(1)}>Next</button>
            }
            </div>
          }
          </div>
          <div className="InsideBox">
            <Link
              className="showtextLink"
              to={`/events/${eventid}/${contestid}/${showTextvalue}`}
            >
              {this.props.showText}{" "}
              <ArrowForwardIcon style={{ fontSize: 40 }} />
            </Link>
          </div>
        </div>
        <div className="leaderboardImage">
          <img
            src={leaderBoardSvg}
            alt="leaderBoard svg"
            className="leaderBoardSvg"
          />
        </div>
      </div>
    );
  }
}
