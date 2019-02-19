// Program to find out "Area Of Rectangle"

import React, { Component } from 'react'

export default class AreaOfRectangle extends Component {
   state = {
     length : 5,
      breadth : 4
  }
  getarea (s,b){
    var area = s * b;
     return <h2>Area of Rectangle is: {area}</h2>
  }
  
  render() {
    var val1 = this.getarea(this.state.length,this.state.breadth);
    
    return (
      <div id = 'Area Of Rectangle'>
        {val1}
      </div>
    )
  }
}
