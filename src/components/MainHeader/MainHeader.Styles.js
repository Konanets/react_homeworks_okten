import styled from "styled-components";
import {Link} from "react-router-dom";


export const Header=styled.header`
  height: 70px;
  min-width: 650px;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5% 0 5%;
`

export const HeaderButton=styled.button`
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  margin-right: 10px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s, transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
  
  &:hover{
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    transform: translateY(-2px);
  }
  
  &:focus{
    box-shadow: #D6D6E7 0 0 0 2px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  }
  
  &:active{
    box-shadow: #D6D6E7 0 3px 7px inset;
    transform: translateY(2px);
  }
`

export const Navigate=styled(Link)`
    margin-left: 15px;
    background-color: red;
    box-shadow: 0 5px 0 darkred;
    color: white;
    padding: 1em 1.5em;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
  
  &:hover {
    background-color: #ce0606;
  }

  &:active {
    box-shadow: none;
    top: 5px;
  }
`

export const HeaderLogo=styled.h1`
  color:white;
  letter-spacing: 6px;
  font-size: 15px;
  font-weight: bold;
`

export const HeaderContentContainer= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

