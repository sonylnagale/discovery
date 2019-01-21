import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  display: inline-block;
  box-sizing: border-box;
  font-family: 'ElaineD02-Regular';
  color: #B6FDBF;
  font-weight: normal;
  vertical-align: top;
`

const Headline = (props) => (
  <H1 data-test="headline">{ props.value }</H1>
)

export default Headline
