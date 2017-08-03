import React, { Component } from 'react';
import FormContainer from './containers/FormContainer';
import NavBarContainer from './containers/NavBarContainer';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
    <div>
      <NavBarContainer />
      <FormContainer />
    </div>
    )
  }
}

export default App;
