import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import style from './progressBarsStyles.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';


class ProgressBars extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  decideBGColor(ifAssigned){
    if(ifAssigned){
      return "pink";
    }
    return "grey";
  }

  render(){
    let buttons;
    var makeButton = function(buttonState, idx){
      var assigned = false;
      if(buttonState === 1){
        assigned = true;
      }

      const computedstyle = Object.assign({"backgroundColor":this.decideBGColor(assigned)},style.custom)

      return (
        <Col xs={12} md={3} key={idx}>
          <div className="SingleProgressBar" key={idx}>
            <MuiThemeProvider>
              <FlatButton
                label={" "}
                style={computedstyle}
                fullWidth={false}
                backgroundColor={this.decideBGColor(assigned)}
              />
            </MuiThemeProvider>
          </div>
        </Col>
      )
    };

    if(this.props.buttonStatus){
      buttons = this.props.buttonStatus.map(makeButton.bind(this));
    }

    return (
      <div className="ProgressBars">
          {buttons}
      </div>
    );
  }
}

export default ProgressBars;
