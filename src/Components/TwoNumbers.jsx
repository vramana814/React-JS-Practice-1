// Program to accept two numbers and check 1st number is greater, 2nd number is greater or both are equal.

import React, { Component } from 'react'

export default class TwoNumbers extends Component {

  state = {
    fnumber : 12,
    snumber : 5
  }
  greaterNumber(fn,sn){
    if (fn>sn){
      return <h2>First Number is Greater : {fn}</h2>
    }
    else if (sn>fn){
      return <h2>Second Number is Greater : {sn}</h2>
    }
    else if (fn === sn){
      return <h2>Both the Numbers are equal</h2>
    }
  }
  render() {
    var val1 = this.greaterNumber(this.state.fnumber, this.state.snumber);
    return (
      <div className = "Greater Number">
        {val1}
      </div>
    )
  }
}
