import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5d0fe;
  font-family: Roboto;
`

export const CardContainer = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  max-width: 450px;
  width: 95%;
`

export const FieldContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Heading = styled.h1`
  font-weight: bold;
  color: black;
  font-size: 25px;
  text-align: center;
  margin-bottom: 20px;
`

export const CustomField = styled.input`
  margin-right: 5px;
  width: 100%;
  height: 50px;
  font-size: 16px;
  border: ${props => (props.as === 'input' ? 'solid' : 'none')} #323f4b 2px;
  border-radius: 5px;
  color: #323f4b;
`

export const Button = styled.button`
  height: 50px;
  width: 120px;
  background-color: #d946ef;
  color: white;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
`
