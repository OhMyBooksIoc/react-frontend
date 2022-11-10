import React from "react";
import './styles.scss';

function FeatureCard(props){
  return (
    <div className="home__container__content__features__card">
      <div className="home__container__content__features__card__title">
        {props.title}
      </div>
      <div className="home__container__content__features__card__description">
        {props.description}
      </div>
    </div>
  );
  
}

export default FeatureCard;