import React from "react";
import "./Title.css";

const Title = ({ short, big, bottomShort, background, img }) => {
  return (
    <div id="titleComp" style={{ background: background }}>
      <img src={img} width="50" alt="" />
      <h6>{short}</h6>
      <h1>{big}</h1>
      <h6>{bottomShort}</h6>
    </div>
  );
};

export default Title;
