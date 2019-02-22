// Program to accept two numbers and check 1st number is greater, 2nd number is greater or both are equal.

import React, { Component } from 'react'

export default class TwoNumbers extends Component {

  state = {
    fnumber : 12,
    snumber : 5
  }
  greaterNumber(fn,sn){
    if (fn>sn){
      return <p>First Number is Greater : {fn}</p>
    }
    else if (sn>fn){
      return <p>Second Number is Greater : {sn}</p>
    }
    else if (fn === sn){
      return <p>Both the Numbers are equal</p>
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
