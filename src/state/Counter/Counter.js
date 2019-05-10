import React, { Component } from 'react';

export default class Counter extends Component {
    state = {
      count: 0
    };

    handleButtonClick = () => {
        console.log('this is props:', this.props);
        console.log('this is state:', this.state);
        this.setState({count: this.state.count + this.props.step});
    }

    render() {
      return (
        <div>
          <p>The current count: {this.state.count}</p>
          <button onClick={this.handleButtonClick}>
            Add 1
          </button>
        </div>
      )
    }
  }