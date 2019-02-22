// Program using conditional operators to determine whether a year entered keyboard is a leap year or not.

import React, { Component } from 'react'

export default class Leapyear extends Component {
    state = {
        statement : 'Please enter a year',
        year : null
    }
    leapYear(e){
          this.setState({
          year : e.target.value
        })
      
    }

  buttonHandler(){
    console.log('Button Clicked')
    if(this.state.year !=null){
      if(this.state.year %400 === 0){
        this.setState({
          statement : 'This is Leap Year'
        })
      }
      else{
        if(this.state.year %100 === 0){
          this.setState({
            statement : ' This is not a Leap Year'

          })
        }
        else if(this.state.year %4 === 0){
          this.setState({
            statement : 'This is Leap Year'
          })
        }
        else{
          this.setState({
            statement : ' This is not Leap Year'
          })
        }
      }
  }
}

  render() {
    return (
      <div className = "Leap Year or Not">
        <input type='number' onChange = {this.leapYear.bind(this)}/>
        <p>{this.state.statement}</p>
        <button onClick = {this.buttonHandler.bind(this)}>checkLeapYear</button>
      </div>
    )
  }
}
