import React from 'react';

const HouseholdSizeField = (props) => {
  return(
    <div className="household-size-field">
      <label>{props.label}
        <select
          value={props.size}
          onChange={props.handleChange}
          name={props.name}
        >
            <option value="Household Size">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
      </label>
    </div>
  )
}

export default HouseholdSizeField;
