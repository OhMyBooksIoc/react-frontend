import React from "react";
import './styles.scss';

function Stats(props) {
  return (
    <div className="stat">
      <span className="stat__title">
        {props.title}
      </span>
      <span className="stat__value">
        {props.value}
      </span>
    </div>
  );
}

export default Stats;