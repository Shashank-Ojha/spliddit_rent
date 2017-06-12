import React, { Component } from 'react';
import SliderMenu from './Components/SliderMenu'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import './App.css';
import './index.css';


class App extends Component {

  render() {
    const style = {
          margin: 12,
        };
    return (
      <div className="App">
              <div className="header">
                <h1> Explore Your Results </h1>
              </div>
              <hr />
              <div className="information">
                <h3> Divison Algorithms for Rent </h3>
                <p> Spliddits rent calculator helps roommates to fairly share rent when moving into
                    a new house or apartment. This is especially useful when bedrooms differ in
                    size, closet space, bathrooms, and more.
                </p>
              </div>
              <div className="content">
                    <div className="report">
                      <h4>Fairness Strategy</h4>
                      <p> Click on these Properties <br/>
                          to see why your result is <br/>
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
                    </div>

                    <div className="report">
                      <h4>Your Report</h4>
                      <p> Maximize Your Savings</p>
                      <br/>
                      <p> You were assigned the room called
                          <strong>"Master Bedroom"</strong> because you
                          gained the most.</p>
                      <SliderMenu />
                    </div>

                    <div className="report">
                      <h4>Group Report</h4>
                      <p> Maximize Group Fairness</p>
                      <br/>
                      <p> See your <i>your</i> price or room
                          change will affect the group! Pull your
                          slider <strong>up/down</strong> & <strong>change rooms</strong>. </p>
                      <SliderMenu />
                    </div>
                    <hr />
              </div>
      </div>
    );
  }
}

export default App;
