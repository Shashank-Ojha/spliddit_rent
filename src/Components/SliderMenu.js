import React, { Component } from 'react';
import MySlider from './MySlider';
import './Slider.css';

class SliderMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prices: this.props.prices,
      //viewMode: this.props.viewMode,
      //customizeOption: this.props.customizeOption,
      totalRent: this.props.totalRent
      // algorithm output, can be adjusted
    };
  }

  reachLimit(){
    var currentPriceAssignment = this.state.prices;
    // console.log(this.state.prices);
    for (var key in this.state.prices){
      if (currentPriceAssignment[key] >= this.state.totalRent){
        return [1, key];
      }
      if (currentPriceAssignment[key] <= 0){
        return [-1, key];
      }
    }
    return [0, key];
  }


  // componentWillReceiveProps(nextProps) {
  //   // You don't have to do this check first, but it can help prevent an unneeded render
  //   if (nextProps.viewMode !== this.state.viewMode) {
  //     this.setState({ viewMode: nextProps.viewMode });
  //   }
  //
  //   if (nextProps.customizeOption !== this.state.customizeOption) {
  //     this.setState({ customizeOption: nextProps.customizeOption });
  //   }
  // }


  updateValues(room, newVal){
    // room is the slider that is currently being moved

    var oldVal = this.state.prices[room];
    var deltaX = (newVal-oldVal)/(this.props.rooms.length-1);
    var currentPriceAssignment = this.state.prices;

    // lock only one direction
    var ifReachLimit = this.reachLimit();
    var lockRoom = ifReachLimit[1];
    // console.log(ifReachLimit[0]);

    // if one slider reaches 0
    if (ifReachLimit[0] === -1){

      // if the slider being moved is the one that reaches 0
      if (room === lockRoom){
        // console.log("this bar reaches 0");
        if (deltaX > 0){ // then it can only go up
          currentPriceAssignment[room] = newVal;
          for (var key in this.state.prices){ // the other sliders
            if(key !== room){
              currentPriceAssignment[key] = currentPriceAssignment[key]-deltaX;
            }
          }
        }
      }

      // if the slider being moved is not the one that reaches 0
      else {
        // console.log("another bar reaches 0");
        if (deltaX < 0){ // then it can only go down
          for (var key in this.state.prices){
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
      // console.log(this.state.prices[room]);
      // console.log(this.state.prices[lockRoom]);

      // if the slider being moved is the one that reaches total rent
      if (room === lockRoom){
        // console.log("this bar reaches 800");
        if (deltaX < 0){ // then it can only go down
          currentPriceAssignment[room] = newVal;
          for (var key in this.state.prices){ // the other sliders
            if(key !== room){
              currentPriceAssignment[key] = currentPriceAssignment[key] - deltaX;
            }
          }
        }
      }

      // if the slider being moved is not the one that reaches total rent
      else {
        // console.log("another bar reaches 800");
        if (deltaX > 0){ // then it can only go up
          for (var key in this.state.prices){
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
      // console.log("normal");
      for (var key in this.state.prices){
        if(key === room){
          currentPriceAssignment[key] = newVal;
        }
        else{
          currentPriceAssignment[key] = currentPriceAssignment[key]-deltaX;
        }
      }
    }
    // console.log(currentPriceAssignment);
    this.setState({prices: currentPriceAssignment});
  }

  render() {
      let roomSlots;
      var makeSlider = function(room, idx) {
        var highlight = false;
        if(this.props.highlight === room){
          highlight = true;
        }
        console.log(this.props.ticks[idx]);
        console.log(this.props.ticksLabels[idx]);
        return (
          <MySlider
            key={idx}
            room={room}
            cost={this.state.prices[room]}
            totalRent={this.props.totalRent}
            preference={this.props.preferenceList[room]}
            highlight={highlight}
            update={this.updateValues.bind(this)}
            ticks={this.props.ticks[idx]}
            ticksLabels={this.props.ticksLabels[idx]}
            />
        )
      }
      if(this.props.rooms){
        roomSlots = this.props.rooms.map(makeSlider.bind(this));
      }

      return (
      <div className="sliderMenu">
          {roomSlots}
      </div>
    );
  }
}

export default SliderMenu;
