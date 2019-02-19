// Program to find "Area Of Right Angled Traiangle"

import React, { Component } from 'react'

export default class AreaOfRightAngledTraiangle extends Component {
    state = {
        height : 10,
        width : 15
    }
    Area_Of_Rightangled_Traiangle(h,w){
        var area = h * w/2;
        return <h2> Area of Right Angled Triangle is : {area}</h2>
    }
  render() {
      var val1 = this.Area_Of_Rightangled_Traiangle(this.state.height,this.state.width);
    return (
      <div id = " Area of Right Angled Triangle">
        {val1}
      </div>
    )
  }
}
