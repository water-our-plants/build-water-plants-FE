import React from "react";
import styled from "styled-components";

const PlantDiv = styled.div`
  align-items: flex-start;
  border-bottom-color: rgb(228, 228, 228);
  border-bottom-style: solid;
  border-bottom-width: 0px;
  box-shadow: rgba(0, 64, 128, 0.086) 0px 3px 10px 0px;
  box-sizing: border-box;
  color: rgb(54, 54, 54);
  cursor: default;
  display: flex;

  flex-basis: 0%;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 1;

  font-family: "Helvetica Now", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  /*height: 42px;*/
  justify-self: center;
  line-height: 18.4px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  text-size-adjust: 100%;
  user-select: none;
  width: 278px;
  h4 {
    align-self: center;
    border-bottom-color: rgb(228, 228, 228);
    border-bottom-style: solid;
    width: 264px;
  }
  p {
    justify-self: flex-end;
    text-align: left;
  }
`;

const ButtonWrapper = styled.div`
  align-self: center;
  display: block;
  width: 278px;

  button {
    height: 42px;
    margin: 10px 20px;
    width: 208px;
  }
`;

const PlantCard = props => {
  const userId = localStorage.getItem("userId");

  const user = {
    data: {
      userId: userId
    }
  };

  return (
    <PlantDiv>
      <h4>{props.plant.name}</h4>
      <p>{props.plant.description}</p>
      <div>Last Watered: {props.plant.lastWater}</div>
      <br />
      <div>Watering Reminder: {props.plant.watering_time} </div>
      <ButtonWrapper>
        {/* <button>Schedule</button> */}
        <button
          onClick={e =>
            window.confirm("Are you sure you wish to delete the plant?") &&
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
