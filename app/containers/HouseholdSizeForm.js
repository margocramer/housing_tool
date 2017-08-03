import React, { Component } from 'react';
import HouseholdSizeField from '../components/HouseholdSizeField'

class HouseholdSizeForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      size: null,
    }
    this.updateSize = this.updateSize.bind(this);
  }

  updateSize(event){
    this.setState({size: event.target.value});
    this.isSelected()
  }

  isSelected(){
      this.props.updateHouseholdStatus(true)
  }

  render(){
    return(
      <div className="household-size-form">
        <HouseholdSizeField
          handleChange={this.updateSize}
          size={this.state.size}
          label="Household Size"
          name="household-size"
        />
      </div>
    )
  }
}

export default HouseholdSizeForm;
