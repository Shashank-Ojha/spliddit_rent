import React, { Component } from 'react';
import ReactBootstrapSliderFixed from './ReactBootstrapSliderFixed';
import style from './Slider.css';


class MySlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.cost, // price of the room
      range: [{ "start": this.props.cost, "end": this.props.preference}],
      ticks: this.props.ticks,
      ticks_labels: this.props.ticksLabels
    };
  }

  handleSlider = (event) => {
    this.props.update(this.props.room, event.target.value);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.cost !== this.state.value) {
      // console.log(nextProps.cost);
      // console.log(this.state.value);
      var newRange = [{"start": nextProps.cost, "end": this.props.preference}]
      //console.log(newRange);
      this.setState({value: nextProps.cost, range: newRange, ticks: this.props.ticks, ticks_labels: this.props.ticksLabels});
    }
  }


  format(val){
    return "$"+val;
  }

  render() {
    var className = "slider";
    if(this.props.highlight){
      className = "slider highlighted";
    }

    console.log("slider Input", this.state.ticks);
    console.log("slider Input", this.state.ticks_labels);

    return (
      <div className={className}>
      <ReactBootstrapSliderFixed
          value={this.state.value}
          change={this.handleSlider}
          step={1}
          orientation="vertical"
          reversed={true}
          ticks={this.state.ticks}
          ticks_labels={this.state.ticks_labels}
          ticks_snap_bounds={30}
          tooltip="always"
          formatter={this.format}
          rangeHighlights={this.state.range}
          />
        <br/>
        <br/>
        <p> {this.props.room}</p>
      </div>
    );
  }
}

export default MySlider;
