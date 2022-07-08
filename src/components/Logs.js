import React from "react";

export default function Log(props) {
  return (
    <section className="log">

      <img className="log--img" src={`./images/${props.imageUrl}`}></img>

<div className="log--content">

      <div className="log--header">
        <div className="log--pointer">
        <img src="./images/location-logo.png" className="log--loclogo"></img>
        <span className="log--location">{props.location}</span>
        </div>
        <a href={props.googleMapsUrl} className="log--link" >View on Google Maps</a>
      </div>

      <div className="log--details">
          <span className="log--title">{props.title}</span>
          <span className="log--date">
            {props.startDate} - {props.endDate}
          </span>
          <p className="log--description">{props.description}</p>
      </div>

</div>
    </section>
  );
}
