import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ButtonMenu extends Component {

  constructor(props) {
    super();
    this.state = {
      activeButton: "Utilitarian"
    };
  }

  makeFunction(name) {
    var changeActive = (function(event){
      this.setState({activeButton: name});
      this.props.changeMessage(name);
    });
    return changeActive;
  }

  decideBGColor(name){
    if(name == this.state.activeButton){
      return "#a4c639";
    }
    return "";
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
                onTouchTap={this.makeFunction("Utilitarian").bind(this)}
                backgroundColor={this.decideBGColor("Utilitarian")}
                hoverColor="#8AA62F"
                style={style}
              />
              <FlatButton
                label="Utility"
                onTouchTap={this.makeFunction("Utility").bind(this)}
                backgroundColor={this.decideBGColor("Utility")}
                hoverColor="#8AA62F"
                style={style}
              />
              <FlatButton
                label="Maximin"
                onTouchTap={this.makeFunction("Maximin").bind(this)}
                backgroundColor={this.decideBGColor("Maximin")}
                hoverColor="#8AA62F"
                style={style}
              />
              <FlatButton
                label="Envy-Freeness"
                onTouchTap={this.makeFunction("Envy-Freeness").bind(this)}
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
