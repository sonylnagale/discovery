import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  border: none;
`

const InputField = (props) => (
  <Input
    name={ props.name }
    value={ props.value }
    className={ props.className }
    type="text"
    placeholder={ props.placeholder }
    onChange={ props.onChange }
    ref={ props.refName }
    data-test={ props['data-test'] }
  />
)

export default InputField
