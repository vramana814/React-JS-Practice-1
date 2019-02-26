// Write a program to read amount in rupees. If amount is >=300 print idly,vada,dosa and puri followed by glass of water.
// Printing of glass of water is mandatory.

import React, { Component } from 'react'

export default class AmountinRupees extends Component {
    state = {
        statement : "Please Enter amount in Rupees"
    }
    amountChange(e){
        console.log(e.target.value)
        if (e.target.value >= 300){
            this.setState({statement : 'Idly,Vada,Dosa and Puri followed by glass of water'})
        }
        else {
            this.setState({statement : 'Glass of Water'})
        }
    }
  render() {
    return (
        
      <div>
        <input type = 'number' onChange = {this.amountChange.bind(this)}/>
        <p>{this.state.statement}</p>
      </div>
    )
  }
}
