import React from 'react';
import { connect } from 'react-redux';
import { getPlants, addPlant, delPlant, updateSchedule } from '../actions';
import PlantForm from '../components/PlantForm';
import PlantsList from './PlantsList';

const userId = localStorage.getItem('userId');

class plantsPlaceholder extends React.Component {
  componentDidMount() {
    this.getWrapper();
  }

  getWrapper = () => {
    this.props.getPlants(userId);
  };

  render() {
    return (
      <div className="plants-page">
        <h3>Welcome to your Plants Page</h3>
        <PlantForm userId={userId} addPlant={this.props.addPlant} />
        <PlantsList
          plants={this.props.plants}
          delPlant={this.props.delPlant}
          updateSchedule={this.props.updateSchedule}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ plants, userId }) => ({ plants, userId });

export default connect(
  mapStateToProps,
  { getPlants, addPlant, delPlant, updateSchedule }
)(plantsPlaceholder);
