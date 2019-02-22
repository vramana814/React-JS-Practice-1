// Program to find "Volume Of Cone"

import React, { Component } from 'react'

export default class VolumeOfCone extends Component {
    state = {
        radius : 6,
        height : 9
    }
    volumeOfCone(r,h){
        var volume = Math.PI * Math.pow(r,2) * h/3;
        return <p>Volume of Cone is : {volume}</p>
    }
  render() {
      var val1 = this.volumeOfCone(this.state.radius,this.state.height);
    return (
      <div id = "Volume of Cone">
        {val1}
      </div>
    )
  }
}
