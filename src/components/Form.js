import React, { Component } from 'react'
import InputField from './InputField'
import FormButton from './FormButton'
import Header from './Header'
import Text from './Text'

class Form extends Component {
  state = {
    buttonText: 'next',
    formText: 'enter email address',
    headlineText: 'Sign up for the TLC newsletter.',
    text: '<input type="checkbox" name="toc" className="toc" />\n'
              + 'I agree to receive information from Discovery Communications in\n'
              + 'accordance with the following <u>Privacy Policy</u>',
    finalText: 'Look out for the latest news on your favorite shows.',
    phase: 0,
  }

  handleButtonClick = () => {
    const { phase, formText } = this.state
    if (phase === 0 && this.validateForm(formText)) {
      this.setState({
        headlineText: 'Almost Done! Please Enter Your First and Last Name.',
        buttonText: 'Sign Up',
        phase:1,
      })
    } else {
      this.setState({
        headlineText: 'Thank You For Signing Up!',
        headlineClass: 'final',
        phase:2,
      })
      this.props.onChange(2)
    }
  }

  handleFormChange = (event) => {
    const { phase } = this.state

    this.setState({
      formText: event.target.value,
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
            className="field"
            placeholder={ formText }
            onChange={ this.handleFormChange }
            data-test="email"
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
          className="field name"
          defaultValue=""
          onChange={ this.handleFormChange }
        />
        <InputField
          placeholder="Last Name"
          className="field name"
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
    const { headlineText, headlineClass } = this.state

    return (
      <>
        <Header
          value={ headlineText }
          className={ headlineClass }
        />

        { this.renderForm() }

        <Text
          value={ this.renderText() }
        />
      </>
    )
  }
}

export default Form
