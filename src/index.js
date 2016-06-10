require('./main.css');

import React from 'react';
import {render} from 'react-dom';
import cx from 'classnames';

export default class ClassnamesExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
  }

  toggleState = () => { this.setState({isOn: !this.state.isOn}); }

  render() {

    const circleClasses = cx({
      circle: true,
      off: !this.state.isOn,
      on: this.state.isOn
    });

    const textClasses = cx({
      textOff: !this.state.isOn
    })

    console.log(circleClasses);

    return (
      <div onClick={this.toggleState}>
        <div className={circleClasses}></div>
        <span className={textClasses}>{this.state.isOn ? 'ON' : 'OFF' }</span>
      </div>
    );
  }
}

window.onload = () => { render(<ClassnamesExample/>, document.getElementById('app')); }
