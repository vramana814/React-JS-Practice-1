// Program to find "Total Salary"

import React, { Component } from 'react'

export default class TotalSalary extends Component {
    state = {
        basicsalary : 10000  
                    }
    totals_salary(){
        var dearnessallowancnce = 0.5 * this.state.basicsalary;
        var houserentallowancce = 0.3 * this.state.basicsalary;
        var totalsalary = dearnessallowancnce + houserentallowancce + this.state.basicsalary;
        return <h2>Total Salary is : {totalsalary}</h2>
    }
    
  render() {
      var val1 = this.totals_salary();
    return (
      <div id = 'Total Salary'>
        {val1}
      </div>
    )
  }
}
