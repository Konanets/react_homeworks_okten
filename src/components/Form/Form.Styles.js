import styled from "styled-components";


export const FormContainer = styled.div`
  height: calc(100vh - 70px);
  background-color: #F0F2F5;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormCard = styled.div`
  width: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const Input = styled.input`
  height: 75px;
  font-size: 18px;
  border: black 1px solid;
  border-radius: 3px;
  margin-bottom: 15px;
  ::placeholder {
    font-size: 25px;
    color: palevioletred;
  }
`

export const Card = styled.h3`
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 40px;
  font-weight: bold;
  
`

export const FormButton= styled.button`
  width: 280px;
  height: 70px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #91C9FF;
  outline: none;
  transition: 1s ease-in-out;
  margin-bottom: 10px;

  &:hover {
    transition: 1s ease-in-out;
    background: #4F95DA;
  }
`

export const ErrorMsg= styled.p`
  color: red;
  font-size: 20px;
`