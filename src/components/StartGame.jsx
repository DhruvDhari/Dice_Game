import React from 'react'
import styled from "styled-components"
import { Button } from '../styled/Button'

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div className='pic'>
        <img src="/images/dices.png" alt="" />
        </div>
       
        <div className='content'>
            <h1>
                DICE GAME
            </h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    height: 100vh;
    margin: 0 auto;
    align-items: center;

    @media(max-width:750px){
        flex-direction: column;
        justify-content: center;
    }

  @media (max-width:1200px){
    .pic{
        margin: 20px;
        img{
            width: 50vw;
            
        }
    }
  }
    .content {
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
        @media (max-width: 1200px) {
            
            h1{
            font-size: 6vw;
            
            
        }
    
}
    }
    
`
