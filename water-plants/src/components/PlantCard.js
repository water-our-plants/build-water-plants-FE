import React from 'react';
import styled from 'styled-components';

const PlantDiv = styled.div`
border: 1px solid black;
border-radius: 10px;
width: 30%;
`;

const PlantCard = props => {
  return (
    <PlantDiv>
      <h4>{props.plant.name}</h4>
      <p>{props.plant.description}</p>
      <ul>Last Watered: {props.plant.lastWater}</ul>
      <button>wwww</button>
    </PlantDiv>
  );
};

export default PlantCard;
