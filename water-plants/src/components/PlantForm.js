import React from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
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
  cursor: default;
  display: flex;
  flex-basis: 0%;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  font-family: "Helvetica Now", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  height: 265px;
  justify-content: center;
  line-height: 18.4px;
  margin-left: 12px;
  padding-bottom: 25px;
  text-size-adjust: 100%;
  user-select: none;
  width: 302px;
  .plant-form-header {
    border-bottom-color: rgb(228, 228, 228);
    border-bottom-style: solid;
    border-bottom-width: 0px;
    box-sizing: border-box;
    color: rgb(54, 54, 54);
    display: block;
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
    text-align: left;
    text-size-adjust: 100%;
    user-select: none;
    width: 302px;
  }
  .plant-form {
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
    button {
      height: 42px;
      margin-top: 10px;
      width: 208px;
    }
    .input {
      display: flex;
      flex-direction: column;
      text-align: left;
    }
  }
`;

class PlantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      lastWater: "",
      watering_time: "",
      smsDelivered: "0"
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
      name: "",
      description: "",
      lastWater: "",
      watering_time: ""
    });
  };

  render() {
    return (
      <FormWrapper>
        <div className="plant-form-header">Add a plant</div>

        <div className="plant-form">
          <div className="input">
            <label for="name">Plant Name </label>
            <input
              onChange={this.handleChange}
              placeholder="Name..."
              value={this.state.name}
              name="name"
              id="name"
              type="text"
            />
          </div>
          <div class="input">
            <label for="description">Description</label>
            <input
              onChange={this.handleChange}
              placeholder="Plant type..."
              value={this.state.description}
              name="description"
              type="text"
            />
          </div>
          <div class="input">
            <label for="lastWater">Last Watered</label>

            <input
              onChange={this.handleChange}
              placeholder="Last Watered..."
              value={this.state.lastWater}
              name="lastWater"
              type="date"
            />
          </div>
          <div class="input">
            <label for="watering_time">Reminder</label>
            <input
              onChange={this.handleChange}
              placeholder="Water Next..."
              value={this.state.watering_time}
              name="watering_time"
              type="date"
            />
          </div>
          <button onClick={this.handleSubmit}>Add Plant</button>
        </div>
      </FormWrapper>
    );
  }
}

export default PlantForm;
