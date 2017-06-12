import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Slider.css';


class MySlider extends Component {

  render() {
    return (
      <div className="slider">
        <MuiThemeProvider>
          <Slider className="sliderBar" style={{height: 125}} axis="y" defaultValue={this.props.value} />
        </MuiThemeProvider>
        <p> {this.props.room}</p>
      </div>
    );
  }
}

export default MySlider;
