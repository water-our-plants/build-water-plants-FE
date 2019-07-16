import React from 'react';
import { throwStatement } from '@babel/types';

class PlantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      lastWater: '',
      nextWater: ''
    };
  }

  handleChange = e => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, description, lastWater, nextWater } = this.state;
    const id = Date.now();
    const newPlant = { name, description, lastWater, nextWater, id };
    this.props.addPlant(e, newPlant);
    this.setState({
      name: '',
      description: '',
      lastWater: '',
      nextWater: ''
    });
  };

  render() {
    return (
      <div className="plant-form">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            placeholder="Name..."
            value={this.state.name}
            name="name"
            type="text"
          />
          <input
            onChange={this.handleChange}
            placeholder="Plant type..."
            value={this.state.description}
            name="description"
            type="text"
          />
          <input
            onChange={this.handleChange}
            placeholder="Last Watered..."
            value={this.state.lastWater}
            name="lastWater"
            type="date"
          />
          <input
            onChange={this.handleChange}
            placeholder="Water Next..."
            value={this.state.nextWater}
            name="nextWater"
            type="date"
          />
        </form>
      </div>
    );
  }
}

export default PlantForm;
