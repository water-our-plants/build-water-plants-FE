import React from "react";
import PlantCard from "./PlantCard";
import styled from "styled-components";

// Plant Contents
const PlantWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(228, 228, 228);
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(228, 228, 228);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(228, 228, 228);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(228, 228, 228);
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: rgba(0, 64, 128, 0.086) 0px 3px 30px 0px;
  box-sizing: border-box;
  color: rgb(54, 54, 54);
  display: flex;
  flex-basis: 0%;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  font-family: "Helvetica Now", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  min-height: 233px;
  justify-content: center;
  line-height: 18.4px;
  text-size-adjust: 100%;
  user-select: none;
  width: 302px;
  .plants-header {
    border-bottom-color: rgb(228, 228, 228);
    border-bottom-style: solid;
    border-bottom-width: 0px;
    box-sizing: border-box;
    color: rgb(54, 54, 54);
    display: flex;
    flex-basis: 0%;
    flex-grow: 0;
    flex-shrink: 1;
    font-family: "Helvetica Now", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 500;
    height: 42px;
    line-height: 18.4px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 12px;
    text-size-adjust: 100%;
    user-select: none;
    width: 302px;
  }
  .plants-body {
    box-sizing: border-box;
    color: rgb(54, 54, 54);
    display: block;
    flex-basis: 0%;
    flex-grow: 1;
    flex-shrink: 1;
    font-family: "Helvetica Now", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 500;
    height: 191px;
    line-height: 18.4px;
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 12px;
    text-size-adjust: 100%;
    user-select: none;
    width: 302px;
  }
`;

const PlantsList = props => {
  return (
    <PlantWrapper>
      <div className="plants-header">Your plants</div>
     <div className="plants-body">
       
      {props.plants.map(plant => {
        return (
          <PlantCard
            key={plant.id}
            plant={plant}
            delPlant={props.delPlant}
            updateSchedule={props.updateSchedule}
            getPlants={props.getPlants}
          />
        );
      })}
      </div>
    </PlantWrapper>
  );
};

export default PlantsList;
