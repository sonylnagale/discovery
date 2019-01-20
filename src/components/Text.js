import React from 'react'
import styled from 'styled-components'
const Parser = require('html-react-parser')

const P = styled.p`
  font-family: 'AzoSans-Light';
  font-size: 12px;
  color: #888888;
  line-height: 14px;
`

const Text = (props) => (
  <P>{ Parser(props.value) }</P>
)

export default Text
