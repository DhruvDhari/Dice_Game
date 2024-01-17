import styled from "styled-components"

export const Button = styled.button`

    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    width: 220px;
    height: 44px;
    background-color:black;
    border-radius: 5px;
    color: white;
    font-size:16px;
    cursor: pointer;
    border: 2px solid transparent;

    &:hover{
        background-color:white;
        border: 2px solid black;
        color: black;
        font-weight:bold;
        transition: 0.2s background ease-in;
    }
`

export const OutlineButton = styled(Button)`
background-color: white;
border:2px solid black;
color: black;
font-weight: 600;
&:hover{
        background-color:black;
        border: 2px solid transparent;
        color: white;
        
      
    }

`