import React, { Component } from 'react'
import InputField from './InputField'
import FormButton from './FormButton'
import Header from './Header'
import Text from './Text'

class Form extends Component {
  state = {
    'buttonText':'next',
    'formText':'enter email address',
    'headlineText': 'Sign up for the TLC newsletter.',
    'text': '<input type="checkbox" name="toc" className="toc" /> \
              <p>I agree to receive information from Discovery Communications in \
              accordance with the following <u>Privacy Policy</u></p>',
    'finalText': 'Look out for the latest news on your favorite shows.',
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

  renderText = () => {
    const { text, finalText, phase } = this.state

    if (phase === 0 ) {
      return text
    } else if (phase === 2) {
      return finalText
    }

    return ''
  }

  renderForm = () => {
    const { formText, buttonText, phase } = this.state
    if (phase === 0) {
      return (
        <>
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
    } else if (phase === 2) {
      return null
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

        <FormButton
          title={ buttonText }
          onClick={ this.handleButtonClick }
        />
      </>
    )
  }

  render(props) {
    const { headlineText } = this.state

    return (
      <>
        <Header
          value={ headlineText }
        />

        { this.renderForm() }

        <Text
          value={ this.renderText() }
        />      </>
    )
  }
}

export default Form
