import React, { Component } from 'react';
import FormContainer from './containers/FormContainer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
    <div>
        <FormContainer />
    </div>
    )
  }
}

export default App;
