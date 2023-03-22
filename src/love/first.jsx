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
                Welcome to journey we both have been walking togethere. As a team, as a strong team.<br></br>
                It is no doubt that i am super lucky and blessed to have as a partener in this journey with me.
            </P>

            <Link to="/second" claaName="link"><Div1><Button>Next</Button></Div1></Link>
        </Div>
    )
}