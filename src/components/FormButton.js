import React from 'react'
import styled from 'styled-components'

const Button = styled.input`
  background-color: #ED1F34;
  border-radius: 5px;
  width: 150px;
  height: 50px;
  border: none;
  text-align: center;
  font-family: 'AzoSans-Bold';
  font-size: 20px;
  color: #FFFFFF;
  text-align: center;
  line-height: 24px;
  margin-left: 15px;
  text-transform: uppercase;
`

const FormButton = (props) => (
  <Button value={ props.title } />
)

export default FormButton
