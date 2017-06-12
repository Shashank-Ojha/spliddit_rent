import React, { Component } from 'react';
import SliderMenu from './Components/SliderMenu'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


import './App.css';
import './index.css';


class App extends Component {

  render() {
    const style = {
          margin: 12,
        };

    return (
      <div className="App">
              <Grid>

                  <Row className="show-grid">
                    <Col xs={12} md={8}>
                      <h1> Explore Your Results </h1>
                    </Col>
                    <Col xs={6} md={4}>
                      <h2> $358 : Master Bedroom </h2>
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
                              <strong>"Master Bedroom"</strong> because you
                              gained the most.</p>
                          <SliderMenu />
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
                          <SliderMenu />
                        </div>
                    </Col>
                  </Row>
              </Grid>
      </div>
    );
  }
}

export default App;
