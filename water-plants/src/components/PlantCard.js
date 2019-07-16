import React from 'react';

const PlantCard = props => {
  return (
    <div className="plant-card">
      <h4>{props.plant.name}</h4>
      <p>{props.plant.description}</p>
      <ul>Last Watered: {props.plant.lastWater}</ul>
    </div>
  );
};

export default PlantCard;
