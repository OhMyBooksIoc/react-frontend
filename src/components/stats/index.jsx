import React from "react";
import './styles.scss';

function Stats(props) {
  return (
    <div className="home__container__stats__list__stat">
      <span className="home__container__stats__list__stat__title">
        {props.title}
      </span>
      <span className="home__container__stats__list__stat__value">
        {props.value}
      </span>
    </div>
  );
}

export default Stats;