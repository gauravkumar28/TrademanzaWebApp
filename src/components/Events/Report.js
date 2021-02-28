import React, { useEffect, useState } from "react";
import { API2 } from "../../backend";
import "./css/portfolio.css";
import { showDayPercentage } from "./helpers";

const Report = () => {
  const [report, setReport] = useState();
  const fetchReport = () => {
    const contestid = window.location.pathname.split("/")[3];
    fetch(`${API2}/contests/${contestid}/report`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return null;
        }
        setReport(data.data);
      });
  };

  useEffect(() => {
    fetchReport();
  }, []);
  return (
    
    <div className="report">
    <div className="report-main-heading">
      REPORTS
    </div>
    <div className="report-div">
      <div>
        <div className="report-heading">
          POPULAR PICKS
        </div>

        {report &&
          report.topCustomerPickedStocks &&
          report.topCustomerPickedStocks.map((stock, index) => {
            return (
              <div key={index} className="report-stock" width="30px">
                <div>
                  <span id="stock-name">{stock.code}</span>
                  {showDayPercentage(stock.dayTrendPercentage)}
                </div>
              </div>
            );
          })}
      </div>
      <div>
        <div className="report-heading">TOP PERFORMERS</div>

        {report &&
          report.topPerformingStocks &&
          report.topPerformingStocks.map((stock, index) => {
            return (
              <div key={index} className="report-stock">
                <div style={{ alignSelf: "flex-end" }}>
                  <span id="stock-name">{stock.code}</span>
                  {showDayPercentage(stock.dayTrendPercentage)}
                </div>
              </div>
            );
          })}
      </div>
    </div>
    </div>
  );
};

export default Report;
