import React from 'react';
import { connect } from 'react-redux';
import { getPlants, addPlant, delPlant, updateSchedule } from '../actions';
import PlantForm from '../components/PlantForm';
import PlantsList from './PlantsList';


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
      <div className="plants-page">s
        <h3>Welcome to your Plants Page</h3>
        <h2>{this.props.username} {this.props.userId}</h2>
        <PlantForm userId={this.state.userId} addPlant={this.props.addPlant} />
        <PlantsList
          plants={this.props.plants}
          delPlant={this.props.delPlant}
          updateSchedule={this.props.updateSchedule}
          getPlants={this.props.getPlants}
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
