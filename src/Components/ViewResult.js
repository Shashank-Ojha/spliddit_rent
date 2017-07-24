import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TaskRow from './TaskRow';


class ViewResult extends Component {
  constructor(props) {
    super(props);

    var matrix = this.props.tasks.map(function(val)
  {
    return val;
  });


    this.state = {
      //activeButton: this.props.assignedTo,
      tasks: this.props.tasks,
      assignments: this.props.assignments,
      names: this.props.names,
      total: this.props.total,
      matrix: matrix
    };
  }


  render(){

    let taskGrid;
    var makeRow = function(task, idx) {
      return (
        <div key={idx+1}>
          <Row key={idx}>
            <TaskRow task={this.state.tasks[idx]} thisTotal={this.state.total[idx]}
              assignment={this.state.assignments[idx]} names={this.state.names} />
          </Row>
          <br/>
        </div>
      )
    }
    if(this.state.tasks){
      taskGrid = this.state.tasks.map(makeRow.bind(this));
    }

    return(
      <div className="taskGrid">
          {taskGrid}
      </div>
    );
  }
}

export default ViewResult;
