import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


class CustomizeButton extends Component {

  constructor(props) {
    super();
    this.state = {
      activeButton: "",
      value: 1
    };
  }

  // makeFunction(name) {
  //   var changeActive = (function(event){
  //     this.setState({activeButton: name});
  //     this.props.customizeOption(name);
  //   });
  //   return changeActive;
  // }

  decideBGColor(name){
    if(name == this.state.activeButton){
      return true;
    }
    return false;
  }

  makeFunction = (event, index, value) =>
    {
      this.setState({value});
      this.setState({activeButton: value});
      //console.log("true value", this.state.activeButton);
      this.props.customizeOption(value);
    }

  render() {
    // const styles = {
    //   block: {
    //     maxWidth: 250,
    //   },
    //   checkbox: {
    //     marginBottom: 16,
    //   },
    // };

    const styles = {
      customWidth: {
        width: 200,
      },
    };

      return (
        <div className="multipleView">
          <MuiThemeProvider>
            <div style={styles.block}>

            <DropDownMenu value={this.state.value} onChange={this.makeFunction}>
              <MenuItem value={1} primaryText="Customize Your Assignments" />
              <MenuItem value={2} primaryText="Original Assignment" />
              <MenuItem value={3} primaryText="Swap Rooms with Bob" />
              <MenuItem value={4} primaryText="Swap Rooms with Claire" />
              <MenuItem value={5} primaryText="Equalize Everyone's Savings" />
              <MenuItem value={6} primaryText="Negoatiate Prices" />
              <MenuItem value={7} primaryText="Donate" />
            </DropDownMenu>

            </div>

          </MuiThemeProvider>
        </div>
    );
  }
}

export default CustomizeButton;


// <Checkbox
//   label="Swap Rooms with Bob"
//   style={styles.checkbox}
//   onCheck={this.makeFunction("Swap Rooms with Bob").bind(this)}
//   checked={this.decideBGColor("Swap Rooms with Bob")}
// />
// <Checkbox
//   label="Equalize Everyone's Savings"
//   style={styles.checkbox}
//   onCheck={this.makeFunction("Equalize Everyone's Savings").bind(this)}
//   checked={this.decideBGColor("Equalize Everyone's Savings")}
// />
// <Checkbox
//   label="Negoatiate Prices"
//   style={styles.checkbox}
//   onCheck={this.makeFunction("Negoatiate Prices").bind(this)}
//   checked={this.decideBGColor("Negoatiate Prices")}
// />
