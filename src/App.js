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
import $ from 'jquery';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: ["Alice", "Bob", "Claire"],
      rooms: ["Master Bedroom", "Basement", "2nd Floor"],
      totalRent: 900,
      allPreferences:
        {"Alice": {"Master Bedroom": 455, "Basement": 5, "2nd Floor": 540},
          "Bob": {"Master Bedroom": 400, "Basement": 100 , "2nd Floor": 500},
          "Claire": {"Master Bedroom": 500, "Basement": 100 , "2nd Floor": 400}},

      initialAssignment:{"Alice":"Master Bedroom","Bob":"Basement","Claire":"2nd Floor"},
      algoPrices: {"Master Bedroom": 359, "Basement": 181 , "2nd Floor": 260},
      thisPerson: "Alice",

      assignedRoom: "Master Bedroom",
      assignedCost: 359,
      preferences: {"Master Bedroom": 455, "Basement": 5 , "2nd Floor": 540}, // Alice's preferences

      // viewMode switches between different information display modes on the sliders
      viewMode: "Preferences for Their Assignment",
      // ways that people can adjust their final results
      customizeOption: 0,
      // currentAssignment keeps track of the current assignment statue
      currentAssignment: {"Alice":"Master Bedroom","Bob":"Basement","Claire":"2nd Floor"},


      // currentPreference is the 3 preference values on the three sliders
      currentPreference:{"Master Bedroom": 455, "Basement": 100 , "2nd Floor": 400},

      // Fairness Properties
      selectedIndex: 0,
      messages: {"Utilitarian":"Message 1", "Utility":"Message 2",
                 "Maximin":"Message 3"    , "Envy-Freeness":"Message 4"},
      displayedMessage: "Message 1",

      ticks: [],
      ticksLabels: [],
      EachRoomAllPreference: {"Master Bedroom":[455,400,500,500],
                              "Basement":[83,100,100,100],
                              "2nd Floor":[462,500,400,400]}
    };
  }

  // componentWillMount(){
  //   console.log(window.location.href)
  //   // parse the url and get the instance number
  //   $.get("rentdata/14",
  //   function(data){
  //     this.setState(
  //       {}
  //     )
  //   }) // instance ID
  // }

  handleChange = (event, index, room) => this.setState({assignedRoom:room});

  changeMessage(type){
    this.setState({displayedMessage: this.state.messages[type]});
  }

  // first get each person's preference for each room, make that into a length-3 array,
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

    //console.log(preferenceList);
    this.setState({currentPreference:preferenceList});

  }


  // ticks: [0, this.props.preference, this.props.totalRent],
  // ticks_labels: ["$0", "", "$"+this.props.totalRent]
  setTicks(){
    var ticks;
    var ticksLabels;

    console.log(this.state.viewMode);
    if (this.state.viewMode==="Preferences for Their Assignment"){
      console.log("hi1");
      ticks=this.state.rooms.map(room=>{
         return [0,this.state.currentPreference[room],this.state.totalRent]
      });
      console.log(ticks);
      this.setState({ticks:ticks});
      ticksLabels=this.state.rooms.map(room=>{
        return ["$0","$"+this.state.currentPreference[room],"$"+this.state.totalRent]
      });
      console.log(ticksLabels);
      this.setState({ticksLabels:ticksLabels});
    }

    else if (this.state.viewMode==="All for all"){
      console.log("hi2");
      ticks=this.state.rooms.map(room=>{
        return ([0].concat(this.state.EachRoomAllPreference[room])).concat([this.state.totalRent])
      });
      console.log(ticks);
      this.setState({ticks:ticks});
      ticksLabels=this.state.rooms.map(room=>{
        return (["$0"].concat(this.state.EachRoomAllPreference[room])).concat(["$"+this.state.totalRent])
      });
      console.log(ticksLabels);
      this.setState({ticksLabels:ticksLabels});

    }
    else if (this.state.viewMode==="My preferences for all rooms"){
      console.log("hi3");
      ticks=this.state.rooms.map(room=>{
        return [0,this.state.allPreferences[this.state.thisPerson][room],this.state.totalRent]
      });
      console.log(ticks);
      this.setState({ticks:ticks});
      ticksLabels=this.state.rooms.map(room=>{
        return ["$0","$"+this.state.allPreferences[this.state.thisPerson][room],"$"+this.state.totalRent]
      });
      console.log(ticksLabels);
      this.setState({ticksLabels:ticksLabels});

    }
    else {
      {
        console.log("hi4");
      }
    }
  }

  changeViewMode(name){
    this.setState({viewMode: name});
    this.setTicks();
  }

  changeCustomizeOption(value){
    //console.log(value);
    this.setState({customizeOption: value});
    this.getPreferenceList(); // update the input preference list to the sliders

    // these are not magic numbers. they are indices of the particular customization options
    if (value===2){this.setState({currentAssignment: this.state.initialAssignment});}
    else if (value===3|value===4){this.changeAssignment(this.state.people[value-2]);}
  }

  changeAssignment(name){ // name of the person that Alice swaps room with
    var newAssignment = $.extend({}, this.state.currentAssignment);
    var aliceRoom=newAssignment[this.state.thisPerson];
    newAssignment[this.state.thisPerson]=newAssignment[name];
    newAssignment[name]=aliceRoom;

    this.setState({currentAssignment:newAssignment});
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

      // console.log("viewMode",this.state.viewMode);
      // console.log("currentAssignment",this.state.currentAssignment);
      //
      // console.log("rooms",this.state.rooms);
      // console.log("algoPrices",this.state.algoPrices);
      // console.log("totalRent",this.state.totalRent);
      // console.log("assignedRoom",this.state.assignedRoom);
      // console.log("ticks",this.state.ticks);
      // console.log("ticksLabels",this.state.ticksLabels);

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

                    <Col xs={6} md={10}>
                        <div className="report">
                          <h3>Your Report</h3>
                          <p> Maximize Your Savings</p>
                          <p className="info"> You were assigned the room called
                              <strong> {this.state.assignedRoom}</strong> because you
                              gained the most.</p>
                          <br/>
                          <SliderMenu
                            rooms={this.state.rooms}
                            prices={this.state.algoPrices}
                            totalRent={this.state.totalRent}
                            highlight={this.state.assignedRoom}
                            ticks={this.state.ticks}
                            ticksLabels={this.state.ticksLabels}
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
                                  value={this.state.assignedRoom}
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
