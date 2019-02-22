// Program to find "Area Of Equilateral Triangle"

import React, { Component } from 'react'

export default class AreaOfEquilateralTraingle extends Component {
    state = {
        side : 5
    }
    Area_Of_Equilateral_Traingle(s){
        var area = Math.sqrt(3)/4 * Math.pow(s,2);
        return <p>Area of Equilateral Traingle is : {area}</p>
    }
  render() {
      var val1 = this.Area_Of_Equilateral_Traingle(this.state.side);
    return (
      <div id = "Equilateral Traingle">
        {val1}
      </div>
    )
  }
}
