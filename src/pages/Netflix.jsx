import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import backgroundImage from '../assets/home.jpg'
import MovieLogo from '../assets/homeTitle.webp'
import {FaPlay} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {AiOutlineInfoCircle} from 'react-icons/ai'


function Netflix() {
  const [isScrolled, setIsScrolled] = useState (false)
  
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  const navigate = useNavigate();
  return (
    <Container>
      <Navbar isScrolled={isScrolled}/>
      <div className="hero">
        <img
          src={backgroundImage}
          alt="background"
          className="background-image"
        />
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="Movie Logo" />
          </div>
          <div className="buttons flex">
            <button
              onClick={() => navigate("/player")}
              className="flex j-center a-center"
            >
              <FaPlay />
              Play
            </button>
            <button
              onClick={() => navigate("/player")}
              className="flex j-center a-center"
            ><AiOutlineInfoCircle /> More Info
            </button>
   </div>
   </div>
   </div>
   </Container>
   
  )
}
const Container = styled.div`
`
export default Netflix