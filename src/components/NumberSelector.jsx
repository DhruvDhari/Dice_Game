import React, { useState } from 'react'
import styled from 'styled-components'
const NumberSelector = ({error,setError,selectedNumber,setSelectedNumber}) => {
    const arrNumber=[1,2,3,4,5,6];
    
  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
      <div className='flex'>

    {arrNumber.map((value,i)=>{
      return(<Box 
        isSelected={
          value===selectedNumber
        }
        key={i}
        onClick={()=>{setSelectedNumber(value);setError("")}}
        >{value}</Box>)
      })}
      </div>

      <p>Select Number</p>

    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer=styled.div`
display: flex;
flex-direction: column;
align-items: end;
  .flex{
    display: flex;
    gap: 24px;
  }

  p{
    font-size: 24px;
    font-weight: 700;
  }
  .error{
    color: red;
  }
`

const Box= styled.div`
    height: 72px ;
    width: 72px;
    border: 2px solid black;
    border-radius: 3px;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;

    background-color: ${(props)=>(props.isSelected ? "black":"white")};
    color: ${(props)=>(props.isSelected ? "white":"black")};

    &:hover{
      transition:0.4s all;
    }
    &:active{
      transform: scale(0.8);
    }
`