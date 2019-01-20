import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  /* display:inline; */
  font-family: 'ElaineD02-Regular';
  font-size: 80px;
  color: #B6FDBF;
  line-height: 131px;
  font-weight: normal;
  /* float: left; */
  margin: 50px;
`

const Headline = (props) => (
  <H1>{ props.value }</H1>
)

export default Headline
