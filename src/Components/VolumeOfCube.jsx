// Program to find "Volume Of Cube"

import React, { Component } from 'react'

export default class VolumeOfCube extends Component {
    state = {
        side : 34
    }
    Volume_Of_Cube(s){
        var volume = Math.pow(s,3);
        return <h2>Volume of Cube is : {volume}</h2>
    }
  render() {
      var val1 = this.Volume_Of_Cube(this.state.side);
    return (
      <div id = "Volume of Cube">
        {val1}
      </div>
    )
  }
}
