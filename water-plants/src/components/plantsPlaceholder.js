import React from 'react';
import { connect } from 'react-redux';
import { getPlants } from '../actions';
import PlantForm from '../components/PlantForm';

class plantsPlaceholder extends React.Component {
  componentDidMount() {
    this.props.getPlants(this.props.username);
  }

  render() {
    return (
      <div className="plants-page">
        <h3>Welcome to your Plants Page</h3>
        <PlantForm />
      </div>
    );
  }
}

const mapStateToProps = ({ plants, username }) => ({ plants, username });

export default connect(
  mapStateToProps,
  { getPlants }
)(plantsPlaceholder);
