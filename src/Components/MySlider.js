import React, { Component } from 'react';
import ReactBootstrapSliderFixed from './ReactBootstrapSliderFixed';
import './Slider.css';


class MySlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.cost,
      range: [{ "start": this.props.cost, "end": this.props.preference}],
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
      this.setState({value: nextProps.cost, range: newRange});
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
    return (
      <div className={className}>
      <ReactBootstrapSliderFixed
          value={this.state.value}
          change={this.handleSlider}
          step={1}
          orientation="vertical"
          reversed={true}
          // min={0}
          // max={800}
          ticks= {[0, this.props.preference, this.props.totalRent]}
          ticks_labels={["$0", "", "$"+this.props.totalRent]}
          ticks_snap_bounds={30}
          tooltip="always"
          formatter = {this.format}
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
