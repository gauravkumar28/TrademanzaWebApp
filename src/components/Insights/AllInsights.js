import React, { Component } from "react";
import "./insights.css";

export class AllInsights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newslist: [],
    };
    this.fetchNews = this.fetchNews.bind(this);
  }
  fetchNews = () => {
    let reqUrl;
    if (this.props.cate) {
      reqUrl = `https://api.trademanza.com/news?category=${this.props.cate}`;
    } else {
      reqUrl = "https://api.trademanza.com/news";
    }
    fetch(reqUrl)
      .then((response) => response.json())
      .then((data) => data.data)
      .then((data) => {
        this.setState({
          newslist: data,
        });
      });
  };
  componentWillMount() {
    this.fetchNews();
    this.props.showSidebar();
  }

  render() {
    const news = this.state.newslist;
    const DATE_OPTIONS = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return (
      <div className="containerzzz">
        <div className="container3">
          {news
            .filter((item, index) => index % 2 === 0)
            .map((item) => {
              return (
                <div>
                  <h2>{item.heading}</h2>
                  <p>{item.summary}</p>
                  <p className="date">
                    {new Date(item.createdAt).toLocaleDateString(
                      "en-US",
                      DATE_OPTIONS
                    )}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="container4">
          {news
            .filter((item, index) => index % 2 !== 0)
            .map((item) => {
              return (
                <div>
                  <h2>{item.heading}</h2>
                  <p>{item.summary}</p>
                  <p className="date">
                    {new Date(item.createdAt).toLocaleDateString(
                      "en-US",
                      DATE_OPTIONS
                    )}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
