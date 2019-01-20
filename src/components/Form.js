import React, { Component } from 'react'
import InputField from './InputField'
import FormButton from './FormButton'
import Header from './Header'

class Form extends Component {
  state = {
    'buttonText':'next',
    'formText':'enter email address',
    'headlineText': 'Sign up for the TLC newsletter.',
    'phase': 0,
  }

  handleButtonClick = (event) => {
    const { phase, formText } = this.state
    if (phase === 0 && this.validateForm(formText)) {
      this.setState({
        'headlineText': 'Almost Done! Please Enter Your First and Last Name.',
        'buttonText': 'Sign Up',
        'phase':1,
      })
    } else {
      this.setState({
        'headlineText':'Thank You For Signing Up!',
        'phase':2,
      })
      this.props.onChange(2)
    }
  }

  handleFormChange = (event) => {
    const { phase } = this.state

    this.setState({
      'formText': event.target.value,
    })

    if (this.phase === 2)  {

    }
  }

  validateForm = (value) => {
    return true
    return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
  }

  renderForm = () => {
    const { formText, phase } = this.state
    if (phase === 0) {
      return (
        <InputField
          placeholder={ formText }
          onChange={ this.handleFormChange }
        />
      )
    }

    return (
      <>
        <InputField
          placeholder="First Name"
          onChange={ this.handleFormChange }
        />
        <InputField
          placeholder="Last Name"
          onChange={ this.handleFormChange }
        />
      </>
    )
  }

  render(props) {
    const { buttonText, headlineText } = this.state

    return (
      <>
        <Header
          value={ headlineText }
        />

        { this.renderForm() }

        <FormButton
          title={ buttonText }
          onClick={ this.handleButtonClick }
        />
      </>
    )
  }
}

export default Form
