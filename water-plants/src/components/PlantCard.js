import React from 'react';
import styled from 'styled-components';

const PlantDiv = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 30%;
`;

const PlantCard = props => {
  const userId = localStorage.getItem('userId');

  const user = {
    data: {
      userId: userId
    }
  };

  return (
    <PlantDiv>
      <h4>{props.plant.name}</h4>
      <p>{props.plant.description}</p>
      <ul>Last Watered: {props.plant.lastWater}</ul>
      <button
        onClick={e =>
          window.confirm('Are you sure you wish to delete the plant?') &&
          props.delPlant(props.plant.id, user)
        }
      >
        Delete
      </button>
    </PlantDiv>
  );
};

export default PlantCard;
