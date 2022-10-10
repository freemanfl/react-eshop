import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-silze: 14px;
  font-weight: 200;
`
const Ann = () => {
  return (
    <Container>Super deal up to 30%!</Container>
  )
}

export default Ann