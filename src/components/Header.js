import React from 'react'
import styled from 'styled-components'

const H2 = styled.h2`
  font-family: 'AzoSans-Bold';
  font-size: 24px;
  color: #94AEBF;
  text-align: left;
  line-height: 30px;
  text-transform: uppercase;
`

const Header = (props) => (
  <H2>{ props.value }</H2>
)

export default Header
