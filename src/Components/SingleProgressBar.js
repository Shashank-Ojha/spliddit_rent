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
      return "pink";
    }
    return "grey";
  }

  render() {

    return (
      <div className="SingleProgressBar">
        <MuiThemeProvider>
          <FlatButton
            label={" "}
            style={style}
            fullWidth={false}
            backgroundColor={this.decideBGColor(this.props.ifAssigned)}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default SingleProgressBar;
