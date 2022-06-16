import React from "react";
import "./Title.css";

const Title = ({ short, big, bottomShort }) => {
  return (
    <div id="titleComp">
      <h6>{short}</h6>
      <h1>{big}</h1>
      <h6>{bottomShort}</h6>
    </div>
  );
};

export default Title;
