// Program to accept any number and print it is "Even" or "Odd"

import React, { Component } from 'react'

export default class Evenorodd extends Component {
    state = {
        Number: 10
    }
    evenOrOdd(n){
        if (n%2 === 0){
            return <p>Even Number</p>
        }
        else{
            return <p>Odd Number</p>
        }

    }
  render() {
      var val1 = this.evenOrOdd(this.state.Number);
    return (
      <div id = "Even or Odd">
        {val1}
      </div>
    )
  }
}
