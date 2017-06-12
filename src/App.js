import React, { Component } from 'react';
import SliderMenu from './Components/SliderMenu'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


import './App.css';
import './index.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      assignedRoom: "Master Bedroom",
      assignedCost: 359,
      rooms: ["Master Bedroom", "Basement", "2nd Floor"],
      values: {"Master Bedroom": 359, "Basement": 181 , "2nd Floor": 260},
      totalRent: 800,
      value: 1,
    };
  }

  handleChange = (event, index, value) => this.setState({value:value});


  render() {
    const style = {
          margin: 12
        };

    return (
      <div className="App">
              <Grid>

                  <Row className="show-grid">
                    <Col xs={12} md={8}>
                      <h1> Explore Your Results </h1>
                    </Col>
                    <Col xs={6} md={4}>
                      <h2> ${this.state.assignedCost} : {this.state.assignedRoom}</h2>
                    </Col>
                  </Row>

                  <hr />

                  <Row className="show-grid">
                    <Col xs={12} md={8}>
                      <h3> Divison Algorithms for Rent </h3>
                      <p> Spliddits rent calculator helps roommates to fairly share rent when moving into
                          a new house or apartment. This is especially useful when bedrooms differ in
                          size, closet space, bathrooms, and more.
                      </p>
                    </Col>
                    <Col xs={6} md={4}></Col>
                  </Row>

                  <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <h4>Fairness Strategy</h4>
                        <p> Click on these Properties to see why your result is
                            fair
                        </p>
                        <br/>
                        <MuiThemeProvider>
                          <RaisedButton label="Utilitarian" primary={true} style={style} />
                        </MuiThemeProvider>
                        <br />
                        <MuiThemeProvider>
                          <RaisedButton label="Utility" primary={true} style={style} />
                        </MuiThemeProvider>
                        <br />
                        <MuiThemeProvider>
                          <RaisedButton label="Maximin" primary={true} style={style} />
                        </MuiThemeProvider>
                    </Col>

                    <Col xs={6} md={4}>
                        <div className="report">
                          <h4>Your Report</h4>
                          <p> Maximize Your Savings</p>
                          <br/>
                          <p> You were assigned the room called
                              <strong> {this.state.assignedRoom}</strong> because you
                              gained the most.</p>
                          <SliderMenu assignedRoom={this.state.assignedRoom} assignedCost={this.state.assignedCost}
                            rooms={this.state.rooms} values={this.state.values} totalRent={this.state.totalRent}
                          />
                        </div>
                    </Col>

                    <Col xs={6} md={4}>
                        <div className="report">
                          <h4>Group Report</h4>
                          <p> Maximize Group Fairness</p>
                          <br/>
                          <p> See how <i>your</i> price or room
                              change will affect the group! Pull your
                              slider <strong>up/down</strong> & <strong>change rooms</strong>. </p>
                          <SliderMenu assignedRoom={this.state.assignedRoom} assignedCost={this.state.assignedCost}
                            rooms={this.state.rooms} values={this.state.values} totalRent={this.state.totalRent}
                          />
                        </div>
                    </Col>
                  </Row>
                  <br/>
                  <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <h3> Total Rent: ${this.state.totalRent} </h3>
                    </Col>

                    <Col xs={6} md={4}>
                      <h5> Utility </h5>
                      <p> You were assigned the room called {this.state.assignedRoom} for ${this.state.assignedCost}.00.
                          Since you valued the room at $455.00, you gained $96.00. You valued the room called 'Basement'
                          at $83.00. Since this room costs $136.00, you would have lost $53.00. You valued the room called
                          '2nd Floor' at $462.00. Since this room costs $466.00, you would have lost $4.00.
                      </p>
                    </Col>

                    <Col xs={6} md={4}>
                        <div>
                        <MuiThemeProvider>
                          <SelectField
                                  floatingLabelText="Choose Different Room"
                                  value={this.state.value}
                                  onChange={this.handleChange}
                                >
                                    <MenuItem value={1} primaryText={this.state.assignedRoom}/>
                                    <MenuItem value={2} primaryText="Weeknights" />
                                    <MenuItem value={3} primaryText="Weekends" />
                            </SelectField>
                         </MuiThemeProvider>
                        </div>
                    </Col>
                  </Row>
              </Grid>
      </div>
    );
  }
}

export default App;
