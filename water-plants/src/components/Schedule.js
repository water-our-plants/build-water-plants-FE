import React from 'react';
import styled from 'styled-components';

const PlantDiv = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 30%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    margin: 10px 20px;
  }
`;

const Dates = styled.div`
  margin: 10px;
  p {
    margin: 0;
  }
`;

class Schedule extends React.Component {
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
      userId
    } = this.props.plant;
    const updatePlant = {
      name,
      description,
      watering_time,
      smsDelivered,
      lastWater,
      userId
    };
    this.props.updatePlant(e, userId, updatePlant);
  };

  render() {
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
            <form>
              <label for="watering_time">Reminder</label>
              <input
                onChange={this.handleChange}
                placeholder="Water Next..."
                value={this.state.watering_time}
                name="watering_time"
                type="date"
              />
            </form>
          </Dates>
        ) : (
          <div>
            <Dates>
              <p>Watering Reminder:</p>

              <p>{this.props.plant.watering_time}</p>
            </Dates>
          </div>
        )}

        <ButtonWrapper>
          <button
          // onClick={e =>
          //   window.confirm('Are you sure you wish to delete the plant?') &&
          //   props.delPlant(this.state.props.plant.id, user)
          // }
          >
            Delete
          </button>

          <button onClick={() => this.updateToggle()}>Update</button>
        </ButtonWrapper>
      </PlantDiv>
    );
  }
}

export default Schedule;
