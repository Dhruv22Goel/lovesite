import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import TenthImg from"../love/photos/tenth.jpg";
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
                Then a new year started<br></br>
                The start of the tear was not so good, there were alot of ups and downs between us<br></br>
                but we made it through them as a team and still loved each other as we did before<br></br>
                or even more<br></br>
                <br></br>
                Here is a glimps of 12th January 2023 10:32pm.<br></br>
                <img src={TenthImg} height="320px" width="180px"></img>
            </P>
            <Link to="/eleventh" className="link"><Div1><Button>Next</Button></Div1></Link>
        </Div>
    )
}