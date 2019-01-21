import React from 'react'
import styled from 'styled-components'

const Checkbox = styled.input`
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  margin: 10px 5px 0 0;
  padding-top: 10px;
`

const CheckboxField = (props) => (
  <Checkbox
    name={ props.name }
    value={ props.value }
    className={ props.className }
    type="checkbox"
    onChange={ props.onChange }
  />
)

export default CheckboxField
