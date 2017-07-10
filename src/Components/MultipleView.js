import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class MultipleView extends Component {

  constructor(props) {
    super();
    this.state = {
      activeButton: "Preferences for Their Assignment"
    };
  }

  makeFunction(name) {
    var changeActive = (function(event){
      this.setState({activeButton: name});
      this.props.viewMode(name);
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
              label="Preferences for Their Assignment"
              style={styles.checkbox}
              onCheck={this.makeFunction("Preferences for Their Assignment").bind(this)}
              checked={this.decideBGColor("Preferences for Their Assignment")}
            />
            <Checkbox
              label="All for all"
              style={styles.checkbox}
              onCheck={this.makeFunction("All for all").bind(this)}
              checked={this.decideBGColor("All for all")}
            />
            <Checkbox
              label="My preferences for all rooms"
              style={styles.checkbox}
              onCheck={this.makeFunction("My preferences for all rooms").bind(this)}
              checked={this.decideBGColor("My preferences for all rooms")}
            />
            </div>
          </MuiThemeProvider>
        </div>
    );
  }
}

export default MultipleView;
