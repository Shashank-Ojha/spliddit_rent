import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {fullWhite} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ButtonMenu extends Component {

  constructor(props) {
    super();
    this.state = {
      activeButton: "Utilitarian"
    };
  }

  makeFunction(name) {
    let changeActive = (event) => this.setState({activeButton: name})
    return changeActive;
  }

  decideBGColor(name){
    if(name == this.state.activeButton)
      return "#a4c639";
    return ""
  }

  render() {
    const style = {
          marginTop: 12,
          marginBottom: 12,
        };

      return (
        <div className="buttonMenu">
          <MuiThemeProvider>
            <div>
              <FlatButton
                label="Utilitarian"
                onTouchTap={this.makeFunction("Utilitarian")}
                backgroundColor={this.decideBGColor("Utilitarian")}
                hoverColor="#8AA62F"
                style={style}
              />
              <FlatButton
                label="Utility"
                onTouchTap={this.makeFunction("Utility")}
                backgroundColor={this.decideBGColor("Utility")}
                hoverColor="#8AA62F"
                style={style}
              />
              <FlatButton
                label="Maximin"
                onTouchTap={this.makeFunction("Maximin")}
                backgroundColor={this.decideBGColor("Maximin")}
                hoverColor="#8AA62F"
                style={style}
              />
              <FlatButton
                label="Envy-Freeness"
                onTouchTap={this.makeFunction("Envy-Freeness")}
                backgroundColor={this.decideBGColor("Envy-Freeness")}
                hoverColor="#8AA62F"
                style={style}
              />
            </div>
          </MuiThemeProvider>
        </div>
    );
  }
}

export default ButtonMenu;
