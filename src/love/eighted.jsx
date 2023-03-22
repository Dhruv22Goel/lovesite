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
                5th December had alot of things to offer<br></br>
                We were dating on that day and at 4:09pm we did our first video call.<br></br>
                It was the best feeling to finally see you talking to me.<br></br>
                <br></br>
                Sorry no glimps avaliable for this bcz I never took a screenshot of our vedio calls.
            </P>
            <Link to="/ninth" className="link"><Div1><Button>Next</Button></Div1></Link>
        </Div>
    )
}