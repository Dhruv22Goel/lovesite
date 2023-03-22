import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
const Div = styled.div`
  display:grid;
  grid-template:row;
  align-items:center;
  justify-content:center;
  padding:30vh 0vh;
`
const Div1 = styled.div`
  margin:10px;
  padding:5px;
  font-size:2rem;
`
const Button = styled.button`
  padding:10px;
  background-color:#ff4c69;
  border-radius:5px;
  font-size:1rem;
  color:white;
  border:none;
`
export default function Home() {
  return (
    <Div><Div1>Hi Angel welcome to love site💖💖</Div1>
    <Link to="/first" claaName="link"><Div1><Button>Next</Button></Div1></Link>
    </Div>
  )
}
