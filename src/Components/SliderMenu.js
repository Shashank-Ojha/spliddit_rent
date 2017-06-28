import React, { Component } from 'react';
import MySlider from './MySlider';
import './Slider.css';

class SliderMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      values: {"Master Bedroom": 359, "Basement": 181 , "2nd Floor": 260},
      // algorithm output, can be adjusted
    };
  }

  reachLimit(){
    var currentPriceAssignment = this.state.values;
    console.log(this.state.values);
    for (var key in this.state.values){
      if (currentPriceAssignment[key] >= 800){
        return [1, key];
      }
      if (currentPriceAssignment[key] <= 0){
        return [-1, key];
      }
    }
    return [0, key];
  }

  updateValues(room, newVal){
    // room is the slider that is currently being moved


    // // in this version of code, some slider value might become negative
    // var oldVal = this.state.values[room];
    // var deltaX = (newVal-oldVal)/2;
    // var currentValues = this.state.values;
    // for(var key in this.state.values){
    //   if(key === room){
    //     currentValues[key] = newVal;
    //   }
    //   else{
    //     currentValues[key] = currentValues[key]-deltaX;
    //   }
    // }
    // this.setState({values: currentValues});


    var oldVal = this.state.values[room];
    var deltaX = (newVal-oldVal)/2;
    var currentPriceAssignment = this.state.values;

    // lock only one direction
    var ifReachLimit = this.reachLimit();
    var lockRoom = ifReachLimit[1];
    console.log(ifReachLimit[0]);

    // if one slider reaches 0
    if (ifReachLimit[0] === -1){

      // if the slider being moved is the one that reaches 0
      if (room === lockRoom){
        console.log("this bar reaches 0");
        // console.log(this.state.values[room]);
        // console.log(this.state.values[lockRoom]);
        if (deltaX > 0){ // then it can only go up
          currentPriceAssignment[room] = newVal;
          for (var key in this.state.values){ // the other sliders
            if(key !== room){
              currentPriceAssignment[key] = currentPriceAssignment[key]-deltaX;
            }
          }
        }
      }

      // if the slider being moved is not the one that reaches 0
      else {
        console.log("another bar reaches 0");
        if (deltaX < 0){ // then it can only go down
          for (var key in this.state.values){
            if(key === room){ // the slider that is currently being pulled
              currentPriceAssignment[key] = newVal;
            }
            else{
              currentPriceAssignment[key] = currentPriceAssignment[key]-deltaX;
            }
          }
        }
      }
    }

    // if one slider reaches total rent
    else if (ifReachLimit[0] === 1){
      // console.log(this.state.values[room]);
      // console.log(this.state.values[lockRoom]);

      // if the slider being moved is the one that reaches total rent
      if (room === lockRoom){
        console.log("this bar reaches 800");
        if (deltaX < 0){ // then it can only go down
          currentPriceAssignment[room] = newVal;
          for (var key in this.state.values){ // the other sliders
            if(key !== room){
              currentPriceAssignment[key] = currentPriceAssignment[key] - deltaX;
            }
          }
        }
      }

      // if the slider being moved is not the one that reaches total rent
      else {
        console.log("another bar reaches 800");
        if (deltaX > 0){ // then it can only go up
          for (var key in this.state.values){
            if(key === room){ // the slider that is currently being pulled
              currentPriceAssignment[key] = newVal;
            }
            else{
              currentPriceAssignment[key] = currentPriceAssignment[key]-deltaX;
            }
          }
        }
      }
    }

    // no slider reaches limit
    else {
      console.log("normal");
      for (var key in this.state.values){
        if(key === room){
          currentPriceAssignment[key] = newVal;
        }
        else{
          currentPriceAssignment[key] = currentPriceAssignment[key]-deltaX;
        }
      }
    }
    console.log(currentPriceAssignment);
    this.setState({values: currentPriceAssignment});
  }

  render() {
      let roomSlots;
      if(this.props.rooms){
        roomSlots = this.props.rooms.map(room => {
          var highlight = false;
          if(this.props.highlight === room){
            highlight = true;
          }
          return (
            <MySlider key={room} room={room} cost={this.state.values[room]}
              totalRent={this.props.totalRent} preference={this.props.preferences[room]}
              highlight={highlight} update={this.updateValues.bind(this)}
              />
          )
        });
      }
      return (
      <div className="sliderMenu">
          {roomSlots}
      </div>
    );
  }
}

export default SliderMenu;
