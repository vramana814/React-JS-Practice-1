// Program to find "Perimeter of Circle"

import React, { Component } from 'react'

export default class PerimeterOfCircle extends Component {
    state = {
        radius : 15.50
    }
    perimeterOfCircle(r){
        var perimeter = 2 * Math.PI * r;
        return <h2>Perimeter of Circle is : {perimeter}</h2>
    }
  render() {
      var val1 = this.perimeterOfCircle(this.state.radius);
    return (
      <div id = "Perimeter of Circle">
        {val1}
      </div>
    )
  }
}
