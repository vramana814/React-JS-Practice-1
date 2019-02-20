// Program to print biggest of three numbers

import React, { Component } from 'react'

export default class BiggestNumber extends Component {
    state = {
        num1 : 12,
        num2 : 24,
        num3 : 10
    }
        largest(n1,n2,n3){
            if (n1>n2 && n1>n3){
                return <h2>num1 is greater  and value :{n1}</h2>
            }
            else if (n2>n1 && n2>n3){
            
                return <h2>num2 is greater  and value :{n2}</h2>
            }
            else if (n3>n1 && n3>n2){
                return <h2>num3 greater and value :{n3}</h2>
            }
        }
        
  render() {
      var val1 = this.largest(this.state.num1,this.state.num2,this.state.num3)
    return (
      <div className = "Greater Number among 3 numbers"> 
        {val1}
      </div>
    )
  }
}
