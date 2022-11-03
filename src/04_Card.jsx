import React from "react";
import "./index.css"

const Card = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} width="300px" alt="" />
        <div className="card_info">
          <h3 className="card_title">{props.title}</h3>
          <span className="card_category">{props.sname}</span>
          <br />
          <a href={props.link} target="_blank" rel="noreferrer" >
            <button>watch now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
