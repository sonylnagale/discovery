import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  display: inline-block;
  box-sizing: border-box;
  font-family: 'ElaineD02-Regular';
  font-size: 80px;
  color: #B6FDBF;
  line-height: 131px;
  font-weight: normal;
  margin: 30px 50px;
  vertical-align: top;
`

const Headline = (props) => (
  <H1 data-test="headline">{ props.value }</H1>
)

export default Headline
