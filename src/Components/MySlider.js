import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Slider.css';


class MySlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.cost
    };
  }

  handleSlider = (event, value) => {
    this.setState({value: value});
  };

  render() {
    return (
      <div className="slider">
        <MuiThemeProvider>
          <Slider className="sliderBar" style={{height: 125}} axis="y"
                  min={0}
                  max={this.props.totalRent}
                  step={1}
                  value={this.state.value}
                  onChange={this.handleSlider} />
        </MuiThemeProvider>
        <p> {this.props.room}</p>
        <h6> ${this.state.value}</h6>
      </div>
    );
  }
}

export default MySlider;
