import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import style from './progressBarsStyles.js';


class ProgressBars extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  changeActiveState(newAssignment){
    var changeActive = (function(event){
      this.setState({activeButton: newAssignment});
    });
    return changeActive;
  }

  decideBGColor(assignment){
    if(assignment === this.state.activeButton){
      return "#a4c639";
    }
    return "#123456";
  }

  ifAssigned(assignment, no){
    if (assignment === no) {
      return {border: '1px solid grey', width: '150'};
    }
    return {}
  }

  render(){

    return(
          <Row>
            <Col xs={6} md={1}>
              {this.props.tasks}
            </Col>
            <Col xs={6} md={1}>
              <MuiThemeProvider>
              <FlatButton
                backgroundColor={this.decideBGColor(0)}
                hoverColor={this.decideBGColor(0)}
                onTouchTap={this.changeActiveState(0).bind(this)}
                label={"0"}
                style={style}
                fullWidth={false}
              />
              </MuiThemeProvider>
            </Col>

            <Col xs={6} md={1}>
              <MuiThemeProvider>
              <FlatButton
                backgroundColor={this.decideBGColor(1)}
                hoverColor={this.decideBGColor(1)}
                onTouchTap={this.changeActiveState(1).bind(this)}
                label={"0"}
                style={style}
                fullWidth={false}
              />
              </MuiThemeProvider>
            </Col>
            <Col xs={6} md={1}>
              <MuiThemeProvider>
                <FlatButton
                  backgroundColor={this.decideBGColor(2)}
                  hoverColor={this.decideBGColor(2)}
                  onTouchTap={this.changeActiveState(2).bind(this)}
                  label={"0"}
                  style={style}
                  fullWidth={false}
                />
              </MuiThemeProvider>
            </Col>
          </Row>
    );
  }
}

export default ProgressBars;
