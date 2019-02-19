// Program to accept age and percentage and print "Qualified" if his age<=25 and per>=75, otherwise "Not Qualified"

import React, { Component } from 'react'

export default class Ageandpercentage extends Component {
    state = {
        age :22,
        percentage :78
    }
    Ageandpercentage(a,p){
        if (a<=25 && p>=75){
            return <h2>Qualified</h2>
        }
        else{
            return <h2>Not Qualified</h2>
        }
    }
  render() {
      var val1 = this.Ageandpercentage(this.state.age,this.state.percentage);
    return (
      <div id = "Check For Eligibility">
        {val1}
      </div>
    )
  }
}
