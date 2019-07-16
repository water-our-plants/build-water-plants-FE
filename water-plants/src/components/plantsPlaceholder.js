import React from 'react';
import { connect } from 'react-redux';
import { getPlants, addPlant } from '../actions';
import PlantForm from '../components/PlantForm';

class plantsPlaceholder extends React.Component {
  componentDidMount() {
    this.props.getPlants(this.props.userId);
  }

  render() {
    return (
      <div className="plants-page">
        <h3>Welcome to your Plants Page</h3>
        <PlantForm userId={this.props.userId} addPlant={this.props.addPlant} />
      </div>
    );
  }
}

const mapStateToProps = ({ plants, userId }) => ({ plants, userId });

export default connect(
  mapStateToProps,
  { getPlants, addPlant }
)(plantsPlaceholder);
