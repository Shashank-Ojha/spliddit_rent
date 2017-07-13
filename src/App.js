import React, { Component } from 'react';

import './App.css';
import './index.css';

import SliderMenu from './Components/SliderMenu';
import ButtonMenu from './Components/ButtonMenu';
import CustomizeButton from './Components/CustomizeButton';
import MultipleView from './Components/MultipleView';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: ["Alice", "Bob", "Claire"],
      rooms: ["Master Bedroom", "Basement", "2nd Floor"],
      totalRent: 800,
      allPreferences:
        {"Alice": {"Master Bedroom": 455, "Basement": 83 , "2nd Floor": 462},
          "Bob": {"Master Bedroom": 400, "Basement": 100 , "2nd Floor": 500},
          "Claire": {"Master Bedroom": 500, "Basement": 100 , "2nd Floor": 400}},

      initialAssignment:{"Alice":"Master Bedroom","Bob":"Basement","Claire":"2nd Floor"},
      prices: {"Master Bedroom": 359, "Basement": 181 , "2nd Floor": 260},
      thisPerson: "Alice",

      // currentAssignment keeps track of the current assignment statue
      currentAssignment: {"Alice":"Master Bedroom","Bob":"Basement","Claire":"2nd Floor"},
      currentPreference:{"Master Bedroom": 455, "Basement": 100 , "2nd Floor": 400},


      assignedRoom: "Master Bedroom",
      assignedCost: 400,

      values: {"Master Bedroom": 359, "Basement": 181 , "2nd Floor": 260}, // Algorithm output
      preferences: {"Master Bedroom": 455, "Basement": 83 , "2nd Floor": 462},
      value: "Master Bedroom",
      selectedIndex: 0,
      messages: {"Utilitarian":"Message 1", "Utility":"Message 2",
                 "Maximin":"Message 3"    , "Envy-Freeness":"Message 4"},
      displayedMessage: "Message 1",


      viewMode: "Preferences for Their Assignment",
      customizeOption: 0
    };
  }

  handleChange = (event, index, value) => this.setState({value:value});

  changeMessage(type){
    this.setState({displayedMessage: this.state.messages[type]});
  }

  changeViewMode(name){
    this.setState({viewMode: name});
  }

  changeAssignment(name){ // name of the person that Alice swaps room with
    var newAssignment = this.state.initialAssignment;
    console.log("initial",newAssignment);
    var aliceRoom=newAssignment["Alice"];
    newAssignment["Alice"]=newAssignment[name];
    newAssignment[name]=aliceRoom;

    this.setState({currentAssignment:newAssignment});
  }

  // then it's easy to first get each person's preference for each room, make that into a length-3 array,
  // and pass it into the sliders. just keep a state to update the current array of preferences

  getPreferenceList(){
    var preferenceList = this.state.currentPreference;
    var assignedRoom,name,i,preferenceValue;
    for (i=0; i<this.state.people.length; i++){
      name=this.state.people[i];
      assignedRoom=this.state.currentAssignment[name];
      preferenceValue=this.state.allPreferences[name][assignedRoom];
      preferenceList[assignedRoom]=preferenceValue;
    }

    console.log(preferenceList);
    this.setState({currentPreference:preferenceList});

  }

  changeCustomizeOption(value){
    this.setState({customizeOption: value});
    console.log(this.state.customizeOption);

    this.getPreferenceList(); // update the input preference list to the sliders

    if (value===2){this.setState({currentAssignment: this.state.initialAssignment});}

    else if (value===3||value===4){this.changeAssignment(this.state.people[value-2]);}
    console.log(this.state.currentAssignment);
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
                    <Col xs={6} md={3}>
                      <h3>Breakdown of Results</h3>
                      <p> The graph below shows the algorithm results and room
                      preferences for both you and the group
                      </p>
                    </Col>

                    <Col xs={6} md={5}>
                        <div className="multipleView">
                          <MultipleView viewMode={this.changeViewMode.bind(this)}/>
                        </div>
                    </Col>

                    <Col xs={6} md={4}>
                        <div className="cutomizeButton">
                          <CustomizeButton customizeOption={this.changeCustomizeOption.bind(this)}/>
                        </div>
                    </Col>
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
                            preferences={this.state.preferences} viewMode={this.state.viewMode}
                            customizeOption={this.state.customizeOption} allPreferences={this.state.allPreferences}
                            preferenceList={this.state.currentPreference}
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
                            viewMode={this.state.viewMode} allPreferences={this.state.allPreferences}
                            customizeOption={this.state.customizeOption}
                            preferenceList={this.state.currentPreference}
                          />
                        </div>
                    </Col>
                  </Row>


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

                  <Row>

                  </Row>


              </Grid>
      </div>
    );
  }
}

export default App;
