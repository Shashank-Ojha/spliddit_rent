import React, { Component } from 'react';
import ReactBootstrapSliderFixed from './ReactBootstrapSliderFixed';
import style from './Slider.css';


class MySlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.cost,
      range: [{ "start": this.props.cost, "end": this.props.preference}],
      ticks: [0, this.props.preference, this.props.totalRent],
      ticks_labels: ["$0", "", "$"+this.props.totalRent]
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

  alterViewModeTicks(viewMode){
    var a;
    if (viewMode === "Preferences for Their Assignment"){
      a = this.state.ticks;
      // console.log(a);
      return a;
    }
    else {
      a = this.state.ticks[0];
      // console.log(a);
      return ([a]);
    }
  }

  alterViewModeLabels(viewMode){
    if (viewMode === "Preferences for Their Assignment"){
      return this.state.ticks_labels;
    }
    else {
      return ([this.state.ticks_labels[0]]);
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
    console.log(this.props.viewMode);
    console.log(this.alterViewModeTicks(this.props.viewMode));
    console.log(this.alterViewModeLabels(this.props.viewMode));
    return (
      <div className={className}>
      <ReactBootstrapSliderFixed
          value={this.state.value}
          change={this.handleSlider}
          step={1}
          orientation="vertical"
          reversed={true}
          ticks={this.alterViewModeTicks(this.props.viewMode)}
          ticks_labels={this.alterViewModeLabels(this.props.viewMode)}
          ticks_snap_bounds={30}
          tooltip="always"
          formatter = {this.format}
          rangeHighlights={this.state.range}
          style={style}
          />
        <br/>
        <br/>
        <p> {this.props.room}</p>
      </div>
    );
  }
}

export default MySlider;
