import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import SixthImg from"../love/photos/sixth.jpg";
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
                With each passing day i was falling in love with you more and more and more and more.<br></br>
                Having you in my life was like a victory for me that I never thought.
                <br></br>
                <br></br>
                Here is a glimps of our conversation on 12 November 2022.<br></br>
                <img src={SixthImg} height="320px" width="180px"></img>
            </P>
            <Link to="/seventh" className="link"><Div1><Button>Next</Button></Div1></Link>
        </Div>
    )
}