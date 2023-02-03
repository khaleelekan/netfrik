import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <Container>
      <div className='logo'>
        <img src={logo} alt='logo'/>
      </div>
    </Container>
  )
}

const Container = styled.div``;

