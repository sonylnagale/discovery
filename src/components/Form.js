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
    const { formText } = this.state

    if (this.validateForm(formText)) {
      this.setState({
        'headlineText': 'Almost Done! Please Enter Your First and Last Name.',
        'buttonText': 'Sign Up',
      })
    }
  }

  handleFormChange = (event) => {
    this.setState({
      'formText': event.target.value,
    })
    console.log(event.target.value)
  }

  validateForm  = (value) => {
    return true
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
