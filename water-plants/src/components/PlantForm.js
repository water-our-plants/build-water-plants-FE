import React from 'react';

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
    const { name, description, lastWater } = this.state;

    const userId = this.props.userId;
    const newPlant = { name, description, lastWater, userId };
    this.props.addPlant(e, userId, newPlant);
    this.setState({
      name: '',
      description: '',
      lastWater: ''
    });
  };

  render() {
    return (
      <div className="plant-form">
        <form>
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
          {/* <input
            onChange={this.handleChange}
            placeholder="Water Next..."
            value={this.state.nextWater}
            name="nextWater"
            type="date"
          /> */}
        </form>
        <button onClick={this.handleSubmit}>Add Plant</button>
      </div>
    );
  }
}

export default PlantForm;
