import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ButtonMenu extends Component {

  constructor(props) {
    super();
    this.state = {
      activeButton: "EQUITABILITY"
    };
  }

  makeFunction(name) {
    var changeActive = (function(event){
      this.setState({activeButton: name});
    });
    return changeActive;
  }

  decideBGColor(name){
    if(name === this.state.activeButton){
      return "pink";
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
                label="EQUITABILITY"
                onTouchTap={this.makeFunction("EQUITABILITY").bind(this)}
                backgroundColor={this.decideBGColor("EQUITABILITY")}
                hoverColor="#8AA62F"
                style={style}
              />
              <p>How much you Saved</p>
              <br />
              <FlatButton
                label="MAXIMIN"
                onTouchTap={this.makeFunction("MAXIMIN").bind(this)}
                backgroundColor={this.decideBGColor("MAXIMIN")}
                hoverColor="#8AA62F"
                style={style}
              />
              <p>Optimal amount of Savings as a whole</p>
              <br />
              <FlatButton
                label="ENVY-FREENESS"
                onTouchTap={this.makeFunction("ENVY-FREENESS").bind(this)}
                backgroundColor={this.decideBGColor("ENVY-FREENESS")}
                hoverColor="#8AA62F"
                style={style}
              />
              <p>Each person gets the best deal based of his or her preference</p>
            </div>
          </MuiThemeProvider>
        </div>
    );
  }
}

export default ButtonMenu;
