import React, { Component } from 'react';
import SliderMenu from './Components/SliderMenu';
import ButtonMenu from './Components/ButtonMenu'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
      preferences: {"Master Bedroom": 455, "Basement": 83 , "2nd Floor": 462},
      totalRent: 800,
      value: "Master Bedroom",
      selectedIndex: 0,
      messages: {"Utilitarian":"Message 1", "Utility":"Message 2",
                 "Maximin":"Message 3"    , "Envy-Freeness":"Message 4"},
      displayedMessage: "Message 1",
    };
  }

  handleChange = (event, index, value) => this.setState({value:value});

  changeMessage(type){
    this.setState({displayedMessage: this.state.messages[type]});
  }

  render() {
    const style = {
          marginTop: 12,
          marginBottom: 12,
        };

      let roomOptions;
      if(this.state.rooms){
        roomOptions = this.state.rooms.map(room => {
          return (
            <MenuItem key={room} value={room} primaryText={room}/>
          )
        });
      }

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
                      <p> Splidditss rent calculator helps roommates to fairly share rent when moving into
                          a new house or apartment. This is especially useful when bedrooms differ in
                          size, closet space, bathrooms, and more.
                      </p>
                    </Col>
                    <Col xs={6} md={4}></Col>
                  </Row>

                  <Row className="show-grid">
                    <Col xs={6} md={2}>
                        <h3>Fairness Properties</h3>
                        <p> Click on these Properties to see why your result is
                            fair
                        </p>
                        <br/>
                        <ButtonMenu changeMessage={this.changeMessage.bind(this)}/>
                    </Col>

                    <Col xs={6} md={5}>
                        <div className="report">
                          <h3>Your Report</h3>
                          <p> Maximize Your Savings</p>
                          <p className="info"> You were assigned the room called
                              <strong> {this.state.assignedRoom}</strong> because you
                              gained the most.</p>
                          <br/>
                          <SliderMenu assignedRoom={this.state.assignedRoom} assignedCost={this.state.assignedCost}
                            rooms={this.state.rooms} values={this.state.values} totalRent={this.state.totalRent}
                            preferences={this.state.preferences}
                          />
                        </div>
                    </Col>

                    <Col xs={6} md={5}>
                        <div className="report">
                          <h3>Group Report</h3>
                          <p> Maximize Group Fairness</p>
                          <p className="info"> See how <i>your</i> price or room
                              change will affect the group! Pull your
                              slider <strong>up/down</strong> & <strong>change rooms</strong>. </p>
                          <br/>
                          <SliderMenu assignedRoom={this.state.assignedRoom} assignedCost={this.state.assignedCost}
                            rooms={this.state.rooms} values={this.state.values} totalRent={this.state.totalRent}
                            preferences={this.state.preferences} highlight={this.state.value}
                          />
                        </div>
                    </Col>
                  </Row>
                  <br/>
                  <Row className="show-grid">
                    <Col xs={6} md={2}>
                        <div className="report">
                          <h3> Total Rent: ${this.state.totalRent} </h3>
                        </div>
                    </Col>

                    <Col xs={6} md={5}>
                        <div className="info">
                          <h5> Utility </h5>
                          <p>{this.state.displayedMessage}</p>
                        </div>
                    </Col>

                    <Col xs={6} md={5}>
                        <div className="info">
                        <MuiThemeProvider>
                          <SelectField
                                  floatingLabelText="Choose Different Room"
                                  value={this.state.value}
                                  onChange={this.handleChange}
                                >
                                    {roomOptions}
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
