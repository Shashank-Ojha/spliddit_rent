import React, { Component } from 'react';
import SingleProgressBar from './SingleProgressBar.js';
import Col from 'react-bootstrap/lib/Col';
import ProgressBars from './ProgressBars';


class TaskRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.tasks,
      total: this.props.thisTotal,
      assignment: this.props.assignment,
      names: this.props.names
    };
  }

  make01s(assignedNum, total){
    var i;
    var result=new Array(total);
    for (i=0; i<total; i++){
      if (i<assignedNum) {result[i]=1;}
      else {result[i]=0;}
    }
    console.log(result);
    return result;
  }


  render(){
    let TaskRow;
    var makeCol = function(name, idx){
      return (
        <div key={idx+1}>
          <Col xs={6} md={2} key={idx}>
            <ProgressBars
              buttonStatus={this.make01s.bind(this)(this.state.assignment[idx],this.state.total)}/>
          </Col>
          <Col xs={6} md={2} key={idx+2}>
          </Col>
        </div>
      )
    }

    if(this.props.names){
      TaskRow = this.props.names.map(makeCol.bind(this));
    }

    return (
    <div className="TaskRow">
        {TaskRow}
    </div>
    );
  }
}

export default TaskRow;
