import React, { Component } from 'react';
import MySlider from './MySlider';
import './Slider.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class SliderMenu extends Component {

  render() {
    return (
      <div className="sliderMenu">
        <MySlider room="Master Bedroom" value={7} />
        <MySlider room="Basement" value={10} />
        <MySlider room="2nd Floor" value={3} />
      </div>
    );
  }
}

export default SliderMenu;
