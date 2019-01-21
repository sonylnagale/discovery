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

  tocRef = React.createRef()
  emailRef = React.createRef()
  firstNameRef = React.createRef()
  lastNameRef = React.createRef()

  handleButtonClick = () => {
    const { phase, email, firstName, lastName, toc } = this.state
    if (phase === 0) {
      if (this.validateForm(0)) {
        this.setState({
          headlineText: 'Almost Done! Please Enter Your First and Last Name.',
          buttonText: 'Sign Up',
          phase:1,
        })
      }
    } else {
      if (this.validateForm(1)) {
        this.setState({
          headlineText: 'Thank You For Signing Up!',
          headlineClass: 'final',
          phase:2,
        })
      }
    }
  }

  handleFormChange = (event) => {
    const { phase } = this.state
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value,
    })
  }

  validateForm = (phase) => {
    const { email, firstName, lastName, toc } = this.state

    const error = "0 0 3px 3px red"
    const clear = ""

    let complete = true

    if (phase === 0) {

      if (!toc) {
        this.tocRef.current.style.boxShadow = error
        complete = false
      } else {
        this.tocRef.current.style.boxShadow = clear
      }

      if (!this.validateEmail(email)) {
        this.emailRef.current.style.boxShadow = error
        complete = false
      } else {
        this.emailRef.current.style.boxShadow = clear
      }

      return complete
    }

    if (this.firstNameRef.current.length == 0) {
      this.firstNameRef.current.style.boxShadow = error
      complete = false
    } else {
      this.firstNameRef.current.style.boxShadow = clear
    }

    if (this.lastNameRef.current.length == 0) {
      this.lastNameRef.current.style.boxShadow = error
      complete = false
    } else {
      this.lastNameRef.current.style.boxShadow = clear
    }

    return complete
  }

  validateEmail = (value) => {
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
            refName={ this.emailRef }
          />

          <FormButton
            title={ buttonText }
            onClick={ this.handleButtonClick }
          />

          <div className="footer">
            <CheckboxField
              refName={ this.tocRef }
              name="toc"
              onChange={ this.handleFormChange }
            />
            <Text
              value={ this.renderText() }
            />
          </div>
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
          value={ firstName }
          refName={ this.firstNameRef }
        />
        <InputField
          name="lastName"
          placeholder="Last Name"
          className="field name"
          onChange={ this.handleFormChange }
          value={ lastName }
          refName={ this.lastNameRef }
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

      </>
    )
  }
}

export default Form
