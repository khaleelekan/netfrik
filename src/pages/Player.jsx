import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Player() {
    const navigate = useNavigate()
  return (
    <Container>
        <div className='player'>
            <div className='back'>
                <BsArrowLeft onClick={()=> navigate(-1)}/>
            </div>
            <video src={video} autoPlay loop controls muted></video>
        </div>
    </Container>
  )
}
const Container = styled.div``

export default Player