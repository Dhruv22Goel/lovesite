import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import SecondImg from"../love/photos/second.jpg";
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
export default function Second(){
    return (
        <Div>
            <P>
                This beautiful journey begain on the 12th of september 2022 at 10:32pm.<br></br>
                What started with just a simple HI turned out into something so romantic and beautiful that was totally unexpected<br></br>
                <br></br>
                Here is a glimps of what begain that day.<br></br>
                <img src={SecondImg} height="320px" width="180px"></img>
            </P>
            <Link to="/third" claaName="link"><Div1><Button>Next</Button></Div1></Link>
        </Div>
    )
}