// Program to display all numbers between 1 and 10 using for loop

import React, { Component } from 'react'

export default class Allnumbers extends Component {
    state = {
         count : 0
    }
    increment(){
        var lst=[];
        for (let count = 0; count<=10; count++){
            lst.push( <h2>All numbers between 1 and 10 are : {count}</h2>)
        }
        return lst
    }
  render() {
      var val1 = this.increment(this.state.count);
    return (
      <div id = "All Numbers between 1 and 10">
        {val1}
      </div>
    )
  }
}
