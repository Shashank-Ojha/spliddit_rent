import React, { Component } from 'react';
import style from './progressBarsStyles.js';
import FlatButton from 'material-ui/FlatButton';


class SingleProgressBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ifAssigned: this.props.ifAssigned
    };
  }

  render() {

    return (
      <div className="SingleProgressBar">
        <FlatButton
          backgroundColor={"green"}
          label={""}
          style={style}
          fullWidth={false}
        />
      </div>
    );
  }
}

export default SingleProgressBar;
