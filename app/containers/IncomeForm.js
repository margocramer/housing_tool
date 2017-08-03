import React, { Component } from 'react';
import IncomeField from '../components/IncomeField'

class IncomeForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      income: null
    }
    this.updateIncome = this.updateIncome.bind(this)
  }

  updateIncome(event){
      this.setState({income: event.target.value});
      this.isSelected()
  }

  isSelected(){
    this.props.updateIncomeStatus(true)
  }

  render() {
    return(
      <div className="household-size-form">
        <IncomeField
          handleChange={this.updateIncome}
          income={this.state.income}
          label="Income"
          name="income"
        />
      </div>
    )
  }
}

export default IncomeForm
