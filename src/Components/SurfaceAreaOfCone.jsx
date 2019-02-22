// Program to find "Surface Area of Cone"

import React, { Component } from 'react'

export default class SurfaceAreaOfCone extends Component {
    state = {
        radius : 6,
        height : 9
    }
    surfaceAreaOfCone(r,h){
        var surfaceareaofcone = Math.PI * r * (r + Math.sqrt(Math.pow(h,2 + r,2)));
        return <p>Surface Area Of Cone is : {surfaceareaofcone}</p>
    }
  render() {
      var val1 = this.surfaceAreaOfCone(this.state.radius,this.state.height);
    return (
      <div id = " Surface Area Of Cone">
        {val1}
      </div>
    )
  }
}
