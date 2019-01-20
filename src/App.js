import React, { Component } from 'react'
import Form from './components/Form'
import Headline from './components/Headline'
import './App.css'

class App extends Component {
  state = {
    headlineText: 'join the list',
  }

  onChange = (data) => {
    if (data === 2) {
      this.setState({
        headlineText: 'congratulations!',
      })
    }
  }

  render() {
    const { headlineText } = this.state

    return (
      <div className="App">
        <Headline
          value={ headlineText }
        />
        <div className="form">
          <Form
            onChange={ this.onChange }
            callbackFromParent={ this.onChange }
          />
        </div>
      </div>
    )
  }
}

export default App
