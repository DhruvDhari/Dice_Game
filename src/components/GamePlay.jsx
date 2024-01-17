import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [score,setScore] = useState(0);
  const [selectedNumber,setSelectedNumber]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [error,setError]=useState("");
  const [showRules,setShowRules]= useState(false);

  const generateRandomNumber=(min,max)=>{return Math.floor(Math.random()*(max)+min)}

  const rollDice=()=>{
    if(!selectedNumber){
      setError("You Have Not Selected Any Number")
      return;
    }
   
      const randomNumber = generateRandomNumber(1,6);
      setCurrentDice((prev)=>randomNumber)

      if(selectedNumber=== randomNumber){
        setScore(prev=>prev+randomNumber)
      }else{
        setScore(prev=>prev- 2)
      }

      setSelectedNumber(undefined);
  }

  const resetScore=()=>{
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_section">

        <TotalScore score={score}/>
        <NumberSelector 
        error={error}
        setError={setError}
        selectedNumber={selectedNumber} 
        setSelectedNumber={setSelectedNumber}/>
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice}/>
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={()=>{
          setShowRules(prev=>!prev)
        }}>{showRules?"Hide":"Show"} Rules</Button>
      </div>
      {showRules&& <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer=styled.div`
padding-top: 70px;
  .top_section{

    @media(max-width:750px){
      
      flex-direction: column;
      align-items: center;
      gap: 40px;

    }
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin-top: 30px;
    gap: 10px;
  }
`