import React from "react";
import styled from "styled-components";

const PlantDiv = styled.div`
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
  margin-bottom: 10px;
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
  h4 {
    align-self: center;
    border-bottom-color: rgb(228, 228, 228);
    border-bottom-style: solid;
    color: rgb(98, 119, 68);
    text-align: center;
    width: 264px;
  }
  p {
    justify-self: flex-end;
    text-align: left;
  }
`;

const ButtonWrapper = styled.div`
  align-self: center;
  display: block;
  width: 278px;

  button {
    height: 42px;
    margin: 10px 20px;
    width: 208px;
  }
`;

const Dates = styled.div`
  margin: 10px;
  height: 45px;
  p {
    margin: 0;
  }
`;

const FormColumn = styled.form`
  display: flex;
  flex-direction: column;
`;

class PlantCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isUpdating: false,

      watering_time: ''
    };
  }

  updateToggle = e => {
    this.setState(prevState => ({
      isUpdating: !prevState.isUpdating
    }));
  };

  handleChange = e => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = e => {
    const { watering_time } = this.state;
    const {
      name,
      description,
      lastWater,
      smsDelivered,
      userId,
      id
    } = this.props.plant;
    const updatePlant = {
      name,
      description,
      watering_time,
      smsDelivered,
      lastWater,
      userId
    };
    this.props.updateSchedule(id, userId, updatePlant);

    this.updateToggle();
  };

  deleteHandler = (plantId, userId) => {
    this.props.delPlant(plantId, userId);
  };

  render(){
  return (
    <PlantDiv>
      <h4>{this.props.plant.name}</h4>
      <p>{this.props.plant.description}</p>
      <Dates>
          <p>Last Watered:</p>
          <p>{this.props.plant.lastWater}</p>
        </Dates>

        {this.state.isUpdating ? (
          <Dates>
            <FormColumn>
              <label>Reminder</label>
              <input
                onChange={this.handleChange}
                placeholder="Water Next..."
                value={this.state.watering_time}
                name="watering_time"
                type="date"
              />
            </FormColumn>
          </Dates>
        ) : (
          <Dates>
            <p>Watering Reminder:</p>

            <p>{this.props.plant.watering_time}</p>
          </Dates>
        )}
      <ButtonWrapper>
        {/* <button>Schedule</button> */}
        <button
          onClick={e =>
            window.confirm("Are you sure you wish to delete the plant?") &&
            this.props.delPlant(this.props.plant.id, this.props.user)
          }
        >
          Delete
        </button>
        {this.state.isUpdating ? (
            <button
              onClick={() => {
                this.handleUpdate();
              }}
            >
              Supdate
            </button>
          ) : (
            <button onClick={() => this.updateToggle()}>Update</button>
          )}
      </ButtonWrapper>
    </PlantDiv>
  );
}
}


export default PlantCard;
