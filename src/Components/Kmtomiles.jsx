//Program to convert kilometer to miles.

import React, { Component } from 'react'

export default class kmtomiles extends Component {
    state = {
        km : 5.5
    }
    kmToMiles(k){
        var kmtomiles = k * 0.621371;
        return <h2>5.5 kilometers is equal to : {kmtomiles}</h2>
    }
  render() {
      var val1 = this.kmToMiles(this.state.km);
    return (
      <div id = "kilometer to miles">
        {val1}
      </div>
    )
  }
}
