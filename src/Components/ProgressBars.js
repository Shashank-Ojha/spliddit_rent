import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import style from './progressBarsStyles.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

// this.props.updateOnClick(j, choice)

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

  onClick(idx){
    // see if this.state.delta is 0. if not, then can only click on grey buttons
    // if delta === 0, then can only click on pink buttons.
    // also can't click on random buttons: can only click on the one (right after) the last pink button?
    // this should be taken care of by the currentAssignment[j] in the update function in TaskRow
    var update = (function(event){
      if (this.props.delta===0){
        if (this.props.buttonStatus[idx]===1){
          this.props.updateOnClick(this.props.j, -1)
        }
      }
      else if (this.props.delta<0){
        if (this.props.buttonStatus[idx]===0){
          this.props.updateOnClick(this.props.j, 1)
        }
      }
    });
    return update;
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
                onTouchTap={this.onClick(idx).bind(this)}
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
