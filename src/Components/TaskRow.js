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
      total: this.props.thisTotal,
      assignment: this.props.assignment,
      names: this.props.names,
      matrix: matrix // to keep track of the current button status of this ROW
    }
  }

  // by clicking, change the matrix in the state. then update the last sum column

  // updateAssignment(j){
  //
  // }



  // pass this function to each column. each col has the unique idx number which ...
  // should keep another matrix to keep track of the current button status (names.length number of arrays)???
  // when a button in col j is tapped,
  // 1. report the col number to TaskRow so the matrix is updated
  // 2. depending on the original assignment status of the button, change the bg color of the button (while updating the matrix in 1.)
  // 3. depending on 2, also update currentTotal

  // display(){
  //   if (this.state.currentTotal===this.state.total){
  //     this.setState({countSum:true});
  //   }
  //   else { // need to count the case if currentTotal > total?
  //     this.setState({countSum:false});
  //   }
  // }




  make01s(assignedNum, total){
    var i;
    var result=new Array(total);
    for (i=0; i<total; i++){
      if (i<assignedNum) {result[i]=1;}
      else {result[i]=0;}
    }
    return result;
  }


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

    console.log(this.state.matrix);

    return (
    <div className="TaskRow">
        {TaskRow}
    </div>
    );
  }
}

export default TaskRow;
