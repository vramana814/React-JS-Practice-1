// Program to accept three numbers from user and print it in ascending order

import React, { Component } from 'react'

export default class Ascending extends Component {
    
    ascending(n){
      return n.sort((a,b)=>a-b).map(a=><span key={a}> {a} </span>)
    }
  render() {
    var lst = [5,77,4,8,6,9]
    var val1 = this.ascending(lst);
    return (
      <div className = "Ascending">
        {val1}
      </div>
    )
  }
}
