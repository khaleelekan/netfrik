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
.scrolled {
  background-color: black;
}
nav {
  position: sticky;
  top: 0;
  height: 6.5rem;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
  padding: 0 4rem;
  align-items: center;
  transition: 0.3s ease-in-out;
  .left {
    gap: 2rem;
    .brand {
      img {
        height: 4rem;
      }
    }
    .links {
      list-style-type: none;
      gap: 2rem;
      li {
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
  .right {
    gap: 1rem;
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      &:focus {
        outline: none;
      }
      svg {
        color: #f34242;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      gap: 0.4rem;
      align-items: center;
      justify-content: center;
      padding: 0.2rem;
      padding-left: 0.5rem;
      button {
        background-color: transparent;
        border: none;
        &:focus {
          outline: none;
        }
        svg {
          color: white;
          font-size: 1.2rem;
        }
      }
      input {
        width: 0;
        opacity: 0;
        visibility: hidden;
        transition: 0.3s ease-in-out;
        background-color: transparent;
        border: none;
        color: white;
        &:focus {
          outline: none;
        }
      }
    }
    .show-search {
      border: 1px solid white;
      background-color: rgba(0, 0, 0, 0.6);
      input {
        width: 100%;
        opacity: 1;
        visibility: visible;
        padding: 0.3rem;
      }
    }
  }
}
`
export default Netflix