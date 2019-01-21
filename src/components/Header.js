import React from 'react'
import styled from 'styled-components'

const H2 = styled.h2`
  font-family: 'AzoSans-Bold';
  color: #94AEBF;
  text-align: left;
  text-transform: uppercase;
`

const Header = (props) => (
  <H2 className={ props.className }>{ props.value }</H2>
)

export default Header
