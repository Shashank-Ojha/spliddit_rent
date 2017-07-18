import React, { Component } from 'react';
import style from './progressBarsStyles.js';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class SingleProgressBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ifAssigned: this.props.ifAssigned
    };
  }

  decideBGColor(ifAssigned){
    if(this.state.ifAssigned){
      console.log("1");
      return "pink";
    }
    console.log("0");
    return "grey";
  }

  render() {

    const computedstyle = Object.assign({"backgroundColor":this.decideBGColor(this.props.ifAssigned)},style.custom)

    return (
      <div className="SingleProgressBar">
        <MuiThemeProvider>
          <FlatButton
            label={" "}
            style={computedstyle}
            fullWidth={false}
            backgroundColor={this.decideBGColor(this.props.ifAssigned)}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default SingleProgressBar;
