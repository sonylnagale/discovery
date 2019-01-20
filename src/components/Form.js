import React, { Component } from 'react'
import InputField from './InputField'
import FormButton from './FormButton'
import Header from './Header'

class Form extends Component {
  state = {
    'buttonText':'next',
    'formText':'enter email address',
    'headlineText': 'Sign up for the TLC newsletter.',
  }

  handleButtonClick = (event) => {
    console.log(this.state.formText)
  }

  handleFormChange = (event) => {
    this.setState({
      'formText': event.target.value,
    })
    console.log(event.target.value)
  }


  render() {
    const { buttonText, formText, headlineText } = this.state

    return (
      <>
        <Header
          value={ headlineText }
        />
        <InputField
          placeholder={ formText }
          onChange={ this.handleFormChange }
        />
        <FormButton
          title={ buttonText }
          onClick={ this.handleButtonClick }
        />
      </>
    )
  }
}

export default Form
