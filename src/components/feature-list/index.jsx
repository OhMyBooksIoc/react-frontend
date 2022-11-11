import React from "react";

import FeatureCard from "../feature-card";

import './styles.scss';

function FeatureList({ features }){
  return (
    <div className="features-list">
      { features.map(({ title, description}) => <FeatureCard key={title} title={title} description={description} />) }
    </div>
  );
} 

export default FeatureList;