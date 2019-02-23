// Program to find the square of a number.

import React, { Component } from 'react'

export default class SquareofNumber extends Component {

    state = {
        number : 25
    }
squareOfNumber(n){
    var square = n * n;
    return <p>Square of a Number is : {square}</p>
}
  render() {
      var val = this.squareOfNumber(this.state.number);
    return (
      <div>
        {val}
      </div>
    )
  }
}


