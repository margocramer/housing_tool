import React, { Component } from 'react';
import HouseholdSizeForm from './HouseholdSizeForm';
import IncomeForm from './IncomeForm';
import ResultTile from '../components/ResultTile';

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSelectedHouseholdSize: null,
      hasSelectedIncome: null,
    };
    this.updateIncomeStatus = this.updateIncomeStatus.bind(this);
    this.updateHouseholdStatus = this.updateHouseholdStatus.bind(this)
  }

  updateHouseholdStatus(status){
    this.setState({hasSelectedHouseholdSize: true})
  }

  updateIncomeStatus(status){
    this.setState({hasSelectedIncome: true})
  }

  render(){
    let form1 = null;
    let form2 = null;
    let result = null;

    if(this.state.hasSelectedHouseholdSize && this.state.hasSelectedIncome) {
      form1 = <HouseholdSizeForm
        updateHouseholdStatus={this.updateHouseholdStatus}
        updateIncomeStatus={this.updateIncomeStatus}
      />
      form2 = <IncomeForm
        updateIncomeStatus={this.updateIncomeStatus}
      />
      result = <ResultTile
      />
    } else if (!this.state.hasSelectedHouseholdSize){
      form1 = <HouseholdSizeForm
        updateHouseholdStatus={this.updateHouseholdStatus}
      />
    } else {
      form1 = <HouseholdSizeForm
        updateHouseholdStatus={this.updateHouseholdStatus}
      />
      form2 = <IncomeForm
        updateIncomeStatus={this.updateIncomeStatus}
      />
    }

    return(
      <div>
          {form1}
          {form2}
          {result}
      </div>
    )
  }
}

export default FormContainer;
