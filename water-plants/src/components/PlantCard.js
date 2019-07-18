import React from 'react';
import styled from 'styled-components';

const PlantDiv = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 30%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    margin: 10px 20px;
  }
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
      <ul>Watering Reminder: {props.plant.watering_time} </ul>
      <ButtonWrapper>
        <button>Schedule</button>
        <button
          onClick={e =>
            window.confirm('Are you sure you wish to delete the plant?') &&
            props.delPlant(props.plant.id, user)
          }
        >
          Delete
        </button>
      </ButtonWrapper>
    </PlantDiv>
  );
};

export default PlantCard;
