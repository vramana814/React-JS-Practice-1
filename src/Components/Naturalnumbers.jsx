// Program to display sum of first 50 natural numbers

import React, { Component } from 'react'

export default class Naturalnumbers extends Component {   
    sumOfNaturalNumbers(N){
        var Total = 0;
        for (let i = 1; i<=N; i++){
           Total += i;
            
        }
        return <p>Sum Of First 50 natural numbers are : {Total}</p>;
    }
  render() {

      var val1 = this.sumOfNaturalNumbers(50);
    return (
      <div id = "Sum Of Natural Numbers">
        {val1}
      </div>
    )
  }
}
