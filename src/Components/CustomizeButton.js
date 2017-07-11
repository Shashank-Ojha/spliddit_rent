import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class CustomizeButton extends Component {

  constructor(props) {
    super();
    this.state = {
      activeButton: ""
    };
  }

  makeFunction(name) {
    var changeActive = (function(event){
      this.setState({activeButton: name});
      this.props.customizeOption(name);
    });
    return changeActive;
  }

  decideBGColor(name){
    if(name == this.state.activeButton){
      return true;
    }
    return false;
  }

  render() {
    const styles = {
      block: {
        maxWidth: 250,
      },
      checkbox: {
        marginBottom: 16,
      },
    };

      return (
        <div className="multipleView">
          <MuiThemeProvider>
            <div style={styles.block}>
            <Checkbox
              label="Swap Rooms with Someone Else"
              style={styles.checkbox}
              onCheck={this.makeFunction("Swap Rooms with Someone Else").bind(this)}
              checked={this.decideBGColor("Swap Rooms with Someone Else")}
            />
            <Checkbox
              label="Equalize Everyone's Savings"
              style={styles.checkbox}
              onCheck={this.makeFunction("Equalize Everyone's Savings").bind(this)}
              checked={this.decideBGColor("Equalize Everyone's Savings")}
            />
            <Checkbox
              label="Negoatiate Prices"
              style={styles.checkbox}
              onCheck={this.makeFunction("Negoatiate Prices").bind(this)}
              checked={this.decideBGColor("Negoatiate Prices")}
            />
            </div>
          </MuiThemeProvider>
        </div>
    );
  }
}

export default CustomizeButton;
