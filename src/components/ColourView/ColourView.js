import React from "react";
import "./ColourView.scss";
import ColorCard from "./../ColourCard/ColourCard.js";

function ColourView({data}) {
  return (
    <div>
      <div className="view-heading">
        <h2>Colours Screen</h2>{" "}
        <span>{data && `Items : ${data.length}`}</span>
      </div>
      <div className="color-grid">
      {data && data.map((color) => {
        return <ColorCard data={color} key={color.id} />;
      })}
      </div>
    </div>
  );
}

export default ColourView;
