import React, { Component } from 'react';
import MySlider from './MySlider';
import './Slider.css';

class SliderMenu extends Component {

  render() {
      let roomSlots;
      if(this.props.rooms){
        roomSlots = this.props.rooms.map(room => {
          return (
            <MySlider key={room} room={room} cost={this.props.values[room]} totalRent={this.props.totalRent} />
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
