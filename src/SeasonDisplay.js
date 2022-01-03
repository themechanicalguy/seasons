import React from "react";
import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const seasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr! It is chilly",
    iconName: "snowflake",
  },
};

const SeasonDisplay = (props) => {
  let date = new Date().getMonth();
  const season = getSeason(props.lat, date);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`SeasonDisplay ${season}`}>
      <i className={`${iconName} icon massive icon-left`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
