import React, { Component } from 'react';
import MySlider from './MySlider';
import './Slider.css';

class SliderMenu extends Component {

  render() {
    return (
      <div className="sliderMenu">
        <MySlider room="Master Bedroom" value="7" />
        <MySlider room="Basement" value="10" />
        <MySlider room="2nd Floor" value="3" />
      </div>
    );
  }
}

export default SliderMenu;
