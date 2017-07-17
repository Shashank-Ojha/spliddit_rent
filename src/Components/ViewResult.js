import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TaskRow from './TaskRow';


class ViewResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //activeButton: this.props.assignedTo,
      tasks: this.props.tasks,
      assignments: this.props.assignments,
      names: this.props.names,
      total: this.props.total
    };
  }

  // changeActiveState(newAssignment){
  //   var changeActive = (function(event){
  //     this.setState({activeButton: newAssignment});
  //     this.props.changeAssignedTo(this.props.rowNum, newAssignment);
  //   });
  //   return changeActive;
  // }


  render(){

    let taskGrid;
    var makeRow = function(task, idx) {
      return (
        <div>
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
