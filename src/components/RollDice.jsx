import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({rollDice,currentDice}) => {

 

  return (
    <DiceContainer>
    <div className="dice" onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice_1" />
    </div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer=styled.div`

    display: flex;
    margin-top: 30px;
    align-items: center;
    flex-direction: column;

    .dice{
        cursor: pointer;
       
    
        &:active{
            transform: rotate(3000deg);
            transition: .4s all;
        }
      
    }

    p{
    
        font-size: 24px;
        font-weight: 500;
    }

`