import React, { Component } from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import './Slider.css';


class MySlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.cost
    };
  }

  handleSlider = (event) => {
    this.setState({value: event.target.value});
    this.render();
  };

  format(val){
    return "$"+val;
  }

  render() {
    var className = "slider";
    if(this.props.highlight){
      className = "slider highlighted";
    }
    return (
      <div className={className}>
      <ReactBootstrapSlider
          value={this.state.value}
          change={this.handleSlider}
          step={1}
          orientation="vertical"
          reversed={true}
          ticks= {[0, this.props.preference, this.props.totalRent]}
          ticks_labels={["$0", "", "$"+this.props.totalRent]}
          ticks_snap_bounds={30}
          tooltip="always"
          formatter = {this.format}
          rangeHighlights={[{ "start": this.state.value, "end": this.props.preference}]}
          />
        <br/>
        <br/>
        <p> {this.props.room}</p>
      </div>
    );
  }
}

export default MySlider;
