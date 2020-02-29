import React, { Component } from "react";
import API from "../../utils/scheduleAPI";
import ScheduledClass from "./ScheduledClass";

class Schedule extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.getEvents()
  };

  getEvents = () => {
    API.userSchedule()
      .then(res => { 
        this.setState({ events: res.data })
        console.log(this.state.events)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <React.Fragment>
        <h1>Schedule Page</h1>
        <ScheduledClass />
      </React.Fragment>
    );
  }
}

export default Schedule;