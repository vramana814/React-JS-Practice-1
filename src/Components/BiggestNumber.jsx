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
                return <p>num1 is greater  and value :{n1}</p>
            }
            else if (n2>n1 && n2>n3){
            
                return <p>num2 is greater  and value :{n2}</p>
            }
            else if (n3>n1 && n3>n2){
                return <p>num3 greater and value :{n3}</p>
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
