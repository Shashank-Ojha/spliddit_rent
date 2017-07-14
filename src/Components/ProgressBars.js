import React, { Component } from 'react';
import SingleProgressBar from './SingleProgressBar.js';
import Col from 'react-bootstrap/lib/Col';


class ProgressBars extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render(){
    let buttons;
    if(this.props.buttonStatus){
      buttons = this.props.buttonStatus.map(function(buttonState, idx){
        var assigned = false;
        if(buttonState === 1){
          assigned = true;
        }
        return (
          <Col xs={1} md={1}><SingleProgressBar key={idx} ifAssigned={assigned}/></Col>
        )
      });
    }

    return (
    <div className="ProgressBars">
        {buttons}
    </div>
    );
  }
}

export default ProgressBars;
