// Program to accept any character from the user and print it is "Vowel" or "Consonant"

import React, { Component } from 'react'

export default class Vowel extends Component {
    
    state = {
        statement:'Please enter a character'
    }
    handleChange(e){
        console.log(e.target.value)
        if(
            e.target.value === 'a' ||
            e.target.value === 'e' ||
            e.target.value === 'i' ||
            e.target.value === 'o' ||
            e.target.value === 'u'
            ){
            this.setState({statement : 'Vowel'})
        }else if (e.target.value === ''){
          this.setState({statement : 'Please enter a character'})
        }else if (e.target.value.length>=1){
            this.setState({statement : 'please enter only one character'})
          }
        else {
            this.setState({statement : 'Consonant'})
        }
    }
  render() {
    return (
      <div className="Vowel or Consonant">
      <input onChange={this.handleChange.bind(this)}/>
      <p>{this.state.statement}</p>
      </div>
    )
  }
}
