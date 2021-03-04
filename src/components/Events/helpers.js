import { ArrowUpward, ArrowDownward } from "@material-ui/icons";
import React from "react";
const roundToNPlaces = (num, n) => {
  return +(Math.round(num + "e+" + n) + "e-" + n);
};

export const showDayPercentage = (dayTrendPercentage) => {
  if (dayTrendPercentage > 0) {
    return (
      <span className="mediumfont postive">
        <ArrowUpward style={{ fontSize: 15 }} />
        {roundToNPlaces(dayTrendPercentage, 2)}
        <span>&#37;</span>
      </span>
    );
  } else {
    return (
      <span className="mediumfont negtive">
        <ArrowDownward style={{ fontSize: 15 }} color="secondary" />
        -{-roundToNPlaces(dayTrendPercentage, 2)}
        <span>&#37;</span>
      </span>
    );
  }
};

export const showRanking = (title, persons, val) => {
  if (persons.length > 0 && persons[0][val]) {
    return (
      <div>
        <div className="rankingHeader">{title}</div>
        {persons.map((person, index) => {
          return (
            <p key={index} className="rankinglist">
              {person.userName === localStorage.getItem("userName") ? (
                <p className="username-showing">
                  {val === "score"
                    ? roundToNPlaces(person[val], 3)
                    : person[val]}
                </p>
              ) : val === "score" ? (
                roundToNPlaces(person[val], 3)
              ) : (
                person[val]
              )}
            </p>
          );
        })}
      </div>
    );
  } else return null;
};
