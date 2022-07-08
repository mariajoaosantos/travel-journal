import React from "react";

export default function Log(props) {
  return (
    <section className="log">
      <img src={`./images/${props.imageUrl}`}></img>
      <div className="log--info">
        <img src="./images/location-logo.png" className="log--loclogo"></img>
        <span className="log--location">{props.location}</span>
        <span className="log--title">{props.title}</span>
        <span className="log--date">{props.startDate} - {props.endDate}</span>
        <p className="log--description">{props.description}</p>
      </div>
    </section>
  );
}
