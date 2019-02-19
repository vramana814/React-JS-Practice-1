// Program to check eligible for voting based given age

import React, { Component } from 'react'

export default class Eligileforvotitng extends Component {
    state = {
        age1:12
        
    }
    checkForVoting(age){
        if (age>=20){
            return <h2>Eligible for Voting</h2>
        }
        else{
            return <h2>Not Eligible for Voting</h2>
        }

    }
  render() {
      var val1 = this.checkForVoting(this.state.age1);
    return (
      <div id = "Check Eligible for Voting">
        {val1}
      </div>
    )
  }
}
