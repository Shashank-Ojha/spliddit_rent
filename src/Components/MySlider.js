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
    this.props.update(this.props.room, event.target.value);
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.cost);
    if (nextProps.cost !== this.state.value) {
      console.log(nextProps.cost);
      console.log(this.state.value);
      this.setState({value: nextProps.cost });
    }
  }

  format(val){
    return "$"+val;
  }

  render() {
    // console.log(this.state.value);
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
