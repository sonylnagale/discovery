import React, { Component } from 'react'
import InputField from './components/InputField'
import FormButton from './components/FormButton'
import Headline from './components/Headline'

import './App.css'

class App extends Component {
  state = {
    'buttonText':'next',
    'formText':'enter email address',
    'headlineText': 'Sign up for the TLC newsletter.',
  }

  render() {
    const { buttonText, formText, headlineText } = this.state
    return (
      <div className="App">
        <div className="headline">
          <h1>join the list</h1>
        </div>
        <div className="form">
          <Headline
            value={ headlineText } 
          />
          <InputField
            placeholder={ formText }
          />
          <FormButton
            title={ buttonText }
          />
          <div>
            <input type="checkbox" name="toc" className="toc" /><p>I agree to receive information from Discovery Communications in accordance with the following <u>Privacy Policy</u></p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
