import React, { Component } from 'react';

import './App.css';
import './index.css';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ProgressBars from './Components/ProgressBars';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people:["Alice", "Bob", "Claire"],
      tasks:["Wash", "Mow", "Plant", "Jump"],
      amount:[14,2,7,2],
      targetTask:"Wash",
      otherTask:["Mow", "Plant", "Jump"],
      person:"Alice",
      preferences:[4, 1/3, 3],
      assignment:[5,0,7,0],
      burden:[0,0,0,0],
      percentage:0
    };
  }

  handleChange = (event, index, value) => this.setState({value:value});

  changeMessage(type){
    this.setState({displayedMessage: this.state.messages[type]});
  }

  make01s(assignedNum, total){
    var i;
    var result=new Array(total);
    for (i=0; i<total; i++){
      if (i<assignedNum) {result[i]=1;}
      else {result[i]=0;}
    }
    return result;
  }

  calculateBurden(){
    var calculate=(
      function(event){
        var lcm = 1;
        var i;

        //get lcm
        for (i=0; i<this.state.preferences.length; i++){
          if (this.state.preferences[i]>=1){
            lcm = lcm * this.state.preferences[i];
          }
        }

        console.log(lcm);

        //calculate the individual burden for each unit of each task
        var burden = this.state.burden;
        for (i=0; i<this.state.tasks.length; i++){
          if (i===0) {burden[i]=lcm;}
          else {burden[i]=lcm/(this.state.preferences[i-1]);}
        }
        this.setState({burden:burden});

        console.log(burden);


        //calculate the total amount of burden
        var total=0;
        for (i=0; i<this.state.tasks.length; i++){
          total += this.state.amount[i]*this.state.burden[i];
        }

        console.log(total);

        var thisTotal=0;
        for (i=0; i<this.state.tasks.length; i++){
          thisTotal += this.state.assignment[i]*this.state.burden[i];
        }

        console.log(thisTotal);

        var percentage=thisTotal/total;

        console.log(percentage);

        this.setState({percentage:percentage});
      })

    return calculate;

  }



  render() {
    //this.calculateBurden().bind(this);

    return (
      <div className="App">
      <Grid>
                <Row className="show-grid">
                  <Col xs={12} md={8}>
                    <h1>Explore Your Results</h1>
                  </Col>

                  <Col xs={6} md={4}>
                    <h4>Diamond Ring</h4>
                    <h4>Gold Watch</h4>
                  </Col>
                </Row>

                <hr />

                <Row className="show-grid">
                  <Col xs={12} md={6}>
                    <h4>Division Algorithms for Goods</h4>
                    <p> The rent calculator helps roomates to fairly share rent
                    when moving into a new house or apartment. This is
                    especially useful when bedrooms differ in size, closet
                    space, bathrooms, and more. </p>
                  </Col>
                  <Col xs={6} md={2}>
                  </Col>
                  <Col xs={6} md={4}>
                  </Col>
                </Row>


                <Row className="show-grid">
                  <Col xs={12} md={4}>
                    <h4>Fairness Properties</h4>
                    <p> See how it works </p>
                  </Col>
                  <Col xs={6} md={8}>
                    <h4>Results</h4>
                    <p> To adjust results, click on the preference buttons </p>

                    <Grid>

                    <Row>

                      <div>
                        <MuiThemeProvider>
                          <ProgressBars buttonStatus={this.make01s.bind(this)(3,9)}/>
                        </MuiThemeProvider>
                      </div>

                    </Row>

                    </Grid>
                  </Col>
                </Row>


                <Row className="show-grid">
                  <Col xs={6} md={6}>
                    <h1>Expanded View</h1>
                    <p>Some Text</p>
                  </Col>

                  <Col xs={6} md={6}>
                  </Col>
                </Row>

                <br/>

                <Row className="show-grid">
                  <Col xs={6} md={2}>
                  </Col>

                  <Col xs={6} md={5}>
                  </Col>

                  <Col xs={6} md={5}>
                  </Col>
                </Row>

                <Row className="show-grid">
                  <Col xs={6} md={2}>
                  </Col>

                  <Col xs={6} md={5}>
                  </Col>

                  <Col xs={6} md={5}>
                  </Col>
                </Row>

          </Grid>
      </div>
    );
  }
}

export default App;
