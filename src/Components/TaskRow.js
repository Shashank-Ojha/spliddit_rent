import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import ProgressBars from './ProgressBars';


class TaskRow extends Component {
  constructor(props) {
    super(props);

    var total = this.props.thisTotal;
    var assignment = this.props.assignment;

    var matrix = this.props.names.map(function(name, idx){
      var i;
      var result=new Array(total);
      for (i=0; i<total; i++){
        if (i<assignment[idx]) {result[i]=1;}
        else {result[i]=0;}
      }
      return result;
    });

    this.state = {
      task: this.props.task,
      names: this.props.names,

      total: this.props.thisTotal,
      currentTotal: this.props.thisTotal,
      assignment: this.props.assignment,
      currentAssignment: this.props.assignment,

      matrix: matrix, // to keep track of the current button status of this ROW
      delta:0 // currentTotal-total; delta <=0 always
    }
  }

  // by clicking, change the matrix in the state. then update the last sum column

  updateMatrix(j, choice){ // choice: 1 or -1
    // since can only click on the grey ones thus just add choice to the original ifAssigned number
    var col;
    var clicked = this.state.currentAssignment[j];
    var newMatrix = this.state.matrix;
     // so we can ensure that only the "last" button is clicked

    if (choice===1){
      console.log("add a unit");
      newMatrix[j][clicked] += choice;
    }

    else if (choice===-1){
      console.log("minus a unit");
      newMatrix[j][clicked-1] += choice;
    }

    // this.setState({matrix:newMatrix});

    var newCurrentAssignment = this.state.currentAssignment;
    newCurrentAssignment[j] += choice;
    // this.setState({currentAssignment:newCurrentAssignment});

    var newCurrentTotal = this.state.currentTotal;
    newCurrentTotal += choice;
    // this.setState({currentTotal:newCurrentTotal});

    var newDelta = newCurrentTotal-this.state.total;
    this.setState({matrix:newMatrix, currentAssignment:newCurrentAssignment, currentTotal:newCurrentTotal, delta:newDelta})
    // this.setState({delta:newDelta}); // delta <=0 always
  }

  // pass this function to each column. each col has the unique idx number which ...
  // should keep another matrix to keep track of the current button status (names.length number of arrays)???
  // when a button in col j is tapped,
  // 1. report the col number to TaskRow so the matrix is updated
  // 2. depending on the original assignment status of the button, change the bg color of the button (while updating the matrix in 1.)
  // 3. depending on 2, also update currentTotal

  // display(){
  //   return (this.state.delta===0);
  // }


  render(){
    let TaskRow;
    var makeCol = function(name, idx){
      var display=this.state.assignment[idx].toString()+"/"+this.state.total.toString();
      return (
        <div key={idx+1}>
          <Col xs={6} md={2} key={idx}>
            {this.state.task}
            <ProgressBars
              buttonStatus={this.state.matrix[idx]}
              updateOnClick={this.updateMatrix.bind(this)}
              delta={this.state.delta}
              j={idx}
            />
          </Col>
          <Col xs={6} md={2} key={idx+3}>
            {display}
          </Col>
        </div>
      )
    }

    if(this.props.names){
      TaskRow = this.props.names.map(makeCol.bind(this));
    }

    var sumAssignment=this.state.currentTotal.toString()+"/"+this.state.total.toString();
    console.log("matrix", this.state.matrix);
    console.log("sumAssignment", sumAssignment);
    console.log("delta", this.state.delta);

    return (
    <div className="TaskRow">
        {TaskRow}
        <Col xs={6} md={2}>
          {sumAssignment}
        </Col>
    </div>
    );
  }
}

export default TaskRow;
