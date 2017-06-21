import React, { Component } from 'react';
import MySlider from './MySlider';
import './Slider.css';

class SliderMenu extends Component {


  constructor(props) {
    super(props);
    this.state = {
      values: {"Master Bedroom": 359, "Basement": 181 , "2nd Floor": 260},
    };
  }

  updateValues(room, newVal){
    var oldVal = this.state.values[room];
    var deltaX = (newVal-oldVal)/2;
    var currentValues = this.state.values;
    for(var key in this.state.values){
      if(key == room){
        currentValues[key] = newVal
      }
      else{
        currentValues[key] = currentValues[key]-deltaX
      }
    }
    this.setState({values: currentValues});
    // console.log(this.state.values);
  }

  render() {
      let roomSlots;
      if(this.props.rooms){
        roomSlots = this.props.rooms.map(room => {
          var highlight = false;
          if(this.props.highlight == room){
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
