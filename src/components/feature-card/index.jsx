import React from "react";

import './styles.scss';

function FeatureCard({ title, description}){
  return (
    <div className="feature-card">
      <div className="feature-card__title ">
        {title}
      </div>
      <div className="feature-card__description">
        {description}
      </div>
    </div>
  );
} 

export default FeatureCard;