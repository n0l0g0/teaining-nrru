import Container from '../Container'
import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const HomePage = () => {
  const history = useHistory()

  const onClickLogout = () => {
    history.push('/')
    localStorage.clear()
  }

  return (
    <Container>
      <BodyHomePage>
        <h2>Home Page</h2>
        <a onClick={() => history.push('/covid19')}>Covid Report</a>
        <button onClick={onClickLogout}>Logout</button>
      </BodyHomePage>
    </Container>
  )
}

export default HomePage

const BodyHomePage = styled.div`
  width: 300px;
  height:200px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius:6px;
`

