import React from 'react';
import PlantCard from './PlantCard';
import styled from 'styled-components';

const PlantWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const PlantsList = props => {
  return (
    <PlantWrapper>
      {props.plants.map(plant => {
        return (
          <PlantCard key={plant.id} plant={plant} delPlant={props.delPlant} />
        );
      })}
    </PlantWrapper>
  );
};

export default PlantsList;
