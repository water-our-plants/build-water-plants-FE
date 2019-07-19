import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

class PlantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      lastWater: '',
      watering_time: '',
      smsDelivered: '0'
    };
  }

  handleChange = e => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      name,
      description,
      lastWater,
      watering_time,
      smsDelivered
    } = this.state;

    const userId = this.props.userId;
    const newPlant = {
      name,
      description,
      watering_time,
      smsDelivered,
      lastWater,
      userId
    };
    this.props.addPlant(e, userId, newPlant);
    this.setState({
      name: '',
      description: '',
      lastWater: '',
      watering_time: ''
    });
  };

  render() {
    return (
      <div className="plant-form">
        <FormWrapper>
          <InputWrapper>
            <label for="name">Plant Name </label>
            <input
              onChange={this.handleChange}
              placeholder="Name..."
              value={this.state.name}
              name="name"
              id="name"
              type="text"
            />
          </InputWrapper>
          <InputWrapper>
            <label for="description">Description</label>
            <input
              onChange={this.handleChange}
              placeholder="Plant type..."
              value={this.state.description}
              name="description"
              type="text"
            />
          </InputWrapper>
          <InputWrapper>
            <label for="lastWater">Last Watered</label>

            <input
              onChange={this.handleChange}
              placeholder="Last Watered..."
              value={this.state.lastWater}
              name="lastWater"
              type="date"
            />
          </InputWrapper>
          <InputWrapper>
            <label for="watering_time">Reminder</label>
            <input
              onChange={this.handleChange}
              placeholder="Water Next..."
              value={this.state.watering_time}
              name="watering_time"
              type="date"
            />
          </InputWrapper>
        </FormWrapper>
        <button onClick={this.handleSubmit}>Add Plant</button>
      </div>
    );
  }
}

export default PlantForm;

