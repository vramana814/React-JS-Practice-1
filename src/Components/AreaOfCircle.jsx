// Program to calculate area of circle

import React, { Component } from 'react'

export default class AreaOfCircle extends Component {
    state = {
        radius : 15.50
    }
    areaOfCircle(r){
        var area = Math.PI * Math.pow(r,2);
        return <h2>Area of Circle is : {area}</h2>
    }
  render() {
      var val1 = this.areaOfCircle(this.state.radius);
    return (
      <div id = "Area Of Circle">
        {val1}
      </div>
    )
  }
}
