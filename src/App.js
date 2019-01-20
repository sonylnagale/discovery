import React, { Component } from 'react'
import Form from './components/Form'
import Headline from './components/Headline'
import './App.css'

class App extends Component {

// @todo Headline -> heading
  render() {
    return (
      <div className="App">
        <Headline value="join the list" />
        <div className="form">
          <Form />
        </div>
          <div>
            <input type="checkbox" name="toc" className="toc" /><p>I agree to receive information from Discovery Communications in accordance with the following <u>Privacy Policy</u></p>
          </div>
      </div>
    )
  }
}

export default App
