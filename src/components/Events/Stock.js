import React from "react";
// import "./css/portfolio.css";
import "./css/stock.css";

import { showDayPercentage } from "./helpers";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
export const Stock = ({ selectTheStock, stock }) => {
  return (
    <div className="stock">
      <div>
        <span className="stock-name">{stock.name}</span>
        {showDayPercentage(stock.dayTrendPercentage)}
      </div>
      <div>
      <div
          className="stock-sub"
          onClick={() => {
            selectTheStock(stock);
          }}
        >
          <AddIcon/>
      </div>
      </div>
    </div>
  );
};

export const SelectedStock = ({
  index,
  stock,
  currTrump,
  makeItTrump,
  removeTheStock,
}) => {
  return (
    <div className="stock Selectedstock">
      <div>
        <span className="stock-name">{stock.name}</span>
        {showDayPercentage(stock.dayTrendPercentage)}
      </div>
      <div className="removeAndTrump">
        <div className="TrumpStar">
          {currTrump === index ? (
            <StarIcon style={{ color: "#EDBD46" }} />
          ) : (
            <StarBorderIcon
              style={{ color: "#EDBD46" }}
              onClick={() => makeItTrump(index)}
            />
          )}
        </div>
        <div className="stock-remove"
          onClick={() => {
            removeTheStock(index);
            if (index === currTrump) makeItTrump(-1);
          }}
        >
          <RemoveIcon/>
        </div>
      </div>
    </div>
  );
};

export const ViewStock = ({ stock }) => {
  return (
    <div className="stock">
      <div style={{ alignSelf: "flex-end" }}>
        <span className="stock-name">{stock.name}</span>
        {showDayPercentage(stock.dayTrendPercentage)}
      </div>
      <span className="TrumpStar">
        {stock.isTrump ? (
          <StarIcon style={{ color: "#EDBD46" }} />
        ) : (
          <StarBorderIcon style={{ color: "#EDBD46" }} />
        )}
      </span>
    </div>
  );
};

export const SampleStock = ({ stock }) => {
  return (
    <div className="report-stock" width="30px">
      <div>
        <span className="stock-name">{stock.code}</span>
        {showDayPercentage(stock.dayTrendPercentage)}
      </div>
    </div>
  );
};
