import React from 'react';
import styled from 'styled-components';
import Schedule from './Schedule';

const PlantDiv = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 30%;
`;
const Dates = styled.p`
  margin: 0;
`;
// const ButtonWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;

//   button {
//     margin: 10px 20px;
//   }
// `;

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
      <Dates>Last Watered:</Dates>
      <Dates> {props.plant.lastWater}</Dates>
      {/* <ul>Watering Reminder: {props.plant.watering_time} </ul> */}
      <Schedule plant={props.plant} />
      {/* <ButtonWrapper>
        <button>Schedule</button>
        <button
          onClick={e =>
            window.confirm('Are you sure you wish to delete the plant?') &&
            props.delPlant(props.plant.id, user)
          }
        >
          Delete
        </button>
        <button onClick={() => props.getWaterDays(user)}>Update</button>
      </ButtonWrapper> */}
    </PlantDiv>
  );
};

export default PlantCard;
