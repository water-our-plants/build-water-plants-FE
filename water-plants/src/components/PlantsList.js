import React from 'react';
import PlantCard from './PlantCard';

const PlantsList = props => {
  return (
    <div className="plants-list">
      {props.plants.map(plant => {
        return <PlantCard key={plant.id} plant={plant} />;
      })}
    </div>
  );
};

export default PlantsList;
