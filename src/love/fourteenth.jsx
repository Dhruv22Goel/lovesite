import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
const Div = styled.div`
  display:grid;
  grid-template:row;
  align-items:center;
  justify-content:center;
  padding:30vh 0vh;
`
const Button = styled.button`
  padding:10px;
  background-color:#ff4c69;
  border-radius:5px;
  font-size:1rem;
  color:white;
  border:none;
`
const Div1 = styled.div`
  margin:10px;
  padding:5px;
  font-size:2rem;
`
const P = styled.p`
    font-size: 1.5rem;
`
export default function First(){
    return (
        <Div>
            <P>
                Today we have completed 6 beautiful months togethere.<br></br> 
                I Hope we complete many more<br></br>
                With every passing day my love for you increases and it is never going to deacrease
                I really love you meri jaan
            </P>
        </Div>
    )
}