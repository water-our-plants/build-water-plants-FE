
import React from 'react';
import { connect } from 'react-redux';
import { getPlants, addPlant, delPlant, updateSchedule } from '../actions';
import PlantForm from "../components/PlantForm";
import PlantsList from "./PlantsList";
import styled from "styled-components";

const PlantsContainer = styled.div`
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  display: flex;
  flex-basis: 0%;
  flex-grow: 1;
  flex-shrink: 1;
  font-family: "Helvetica Now", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 18.4px;
  margin-bottom: 40px;
  min-height: 245px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  user-select: none;
  width: 640px;
`;

const userId = localStorage.getItem("userId");


class plantsPlaceholder extends React.Component {
  async componentDidMount() {
    const userId = await localStorage.getItem('userId');
    console.log(userId);
    this.props.getPlants(userId);
    this.setState({ userId: userId });
  }

  state = {
    userId: ''
  }

  // getWrapper = () => {
  //   this.props.getPlants(userId);
  // };

  render() {
    return (
      <PlantsContainer>
        <PlantsList
          plants={this.props.plants}
          delPlant={this.props.delPlant}
          updateSchedule={this.props.updateSchedule}
          getPlants={this.props.getPlants}
        />
        <PlantForm userId={userId} addPlant={this.props.addPlant} />
      </PlantsContainer>

    );
  }
}

const mapStateToProps = ({ plants, userId }) => ({ plants, userId });

export default connect(
  mapStateToProps,
  { getPlants, addPlant, delPlant, updateSchedule }
)(plantsPlaceholder);
