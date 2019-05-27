import React from "react";
import "./ImgwithTitle.css";

function ImgwithTitle(props) {
  return (
    <div className="img-container">
      <div className="blackBox top">
        <h1 className="image-header">{props.mainTitle}</h1>
        <p className="image-para">{props.extraInfo}</p>
      </div>
        <img className="image" src={props.imgUrl} alt={props.name} />
      <div className="blackBox bottom" />
    </div>
  );
}
export default ImgwithTitle;
