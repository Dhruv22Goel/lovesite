import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import NinthImg from"../love/photos/ninth.jpg";
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
                7 days later we completed our 3 months together<br></br>
                3 months of love,care,respect and naughtiness.<br></br>
                <br></br>
                Here is a glimps of 12th December 2022 10:32pm.<br></br>
                <img src={NinthImg} height="320px" width="180px"></img>
            </P>
            <Link to="/tenth" className="link"><Div1><Button>Next</Button></Div1></Link>
        </Div>
    )
}