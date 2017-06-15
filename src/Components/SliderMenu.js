import React, { Component } from 'react';
import MySlider from './MySlider';
import './Slider.css';

class SliderMenu extends Component {

  render() {
      let roomSlots;
      if(this.props.rooms){
        roomSlots = this.props.rooms.map(room => {
          var highlight = false;
          if(this.props.highlight == room){
            // console.log(this.props.highlight);
            // console.log(room);
            // console.log(highlight);
            highlight = true;
          }
          return (
            <MySlider key={room} room={room} cost={this.props.values[room]}
              totalRent={this.props.totalRent} preference={this.props.preferences[room]}
              highlight={highlight}
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
