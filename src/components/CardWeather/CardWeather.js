import React from "react";
import styles from "./CardWeather.module.css";
import CardInfo from "./CardInfo/CardInfo.js";
import CardInput from "./CardInput/CardInput.js";


function CardWeather(props) {
  return (
    <div className={styles.CardWeather}>
      <CardInput/>
      <CardInfo state={props.state} />
    </div>
  );
}

export default CardWeather;
