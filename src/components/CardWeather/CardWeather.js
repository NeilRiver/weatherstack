import React from "react";
import styles from "./CardWeather.module.css";

function CardWeather(props) {
  return (
    <div className={styles.CardWeather}>
      <div className={styles.LeftNav}>
        <span>Name country : </span>
        <span>Localtime : </span>
        <span>Time zone : </span>
        <span>Feelslike : </span>
        <span>Temperature : </span>
        <span>Wind speed : </span>
      </div>
      <div className={styles.RightNav}>
        <span>{props.state.location.country}</span>
        <span>{props.state.location.localtime}</span>
        <span>{props.state.location.timezone_id}</span>
        <span>{props.state.current.feelslike}</span>
        <span>{props.state.current.temperature}</span>
        <span>{props.state.current.wind_speed}</span>
      </div>
    </div>
  );
}

export default CardWeather;
