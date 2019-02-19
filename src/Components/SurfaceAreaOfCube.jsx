// Program to find "Surface Area of Cube"

import React, { Component } from 'react'

export default class SurfaceAreaOfCube extends Component {
    state = {
        side : 34
    }
    Surface_Area_Cube(s){
       var surfacearea = 6 * Math.pow(s,2)
        return <h2>Surface Area of Cube is : {surfacearea}</h2>
    }
  render() {
      var val1 = this.Surface_Area_Cube(this.state.side);
    return (
      <div id = "Surface Area of Cube">
        {val1}
      </div>
    )
  }
}
