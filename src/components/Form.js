import React, { Component } from 'react'
import InputField from './InputField'
import FormButton from './FormButton'
import Header from './Header'
import Text from './Text'
import CheckboxField from './CheckboxField'

class Form extends Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    toc: false,
    buttonText: 'next',
    headlineText: 'Sign up for the TLC newsletter.',
    text: 'I agree to receive information from Discovery Communications in\n'
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
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
console.log(name,value)
    this.setState({
      [name]: value,
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
    const { buttonText, phase, email, firstName, lastName } = this.state
    if (phase === 0) {
      return (
        <>
          <InputField
            name="email"
            className="field"
            placeholder="enter email address"
            onChange={ this.handleFormChange }
            data-test="email"
            value={ email }
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
          name="firstName"
          placeholder="First Name"
          className="field name"
          onChange={ this.handleFormChange }
          value={ firstName}
        />
        <InputField
          name="lastName"
          placeholder="Last Name"
          className="field name"
          onChange={ this.handleFormChange }
          value={ lastName }
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

        <div className="footer">
          <CheckboxField
            name="toc"
            onChange={ this.handleFormChange }
          />
          <Text
            value={ this.renderText() }
          />
        </div>
      </>
    )
  }
}

export default Form
