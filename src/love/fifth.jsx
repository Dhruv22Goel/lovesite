import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import FifthImg from"../love/photos/fifth .jpg";
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
export default function Fifth(){
    return (
        <Div>
            <P>
                Then eventually a month passed and the closeness increased.<br></br>
                It took me less than a month to fall in love with you.<br></br>
                I still remember when the first time you said that you love me<br></br>
                The feeling that I had when you said those three magical words.
                <br></br>
                <br></br>
                Here is a glimps of our chats on 10 October 2022 10:32pm.<br></br>
                <img src={FifthImg} height="320px" width="180px"></img>
            </P>
            <Link to="/sixth" claaName="link"><Div1><Button>Next</Button></Div1></Link>
        </Div>
    )
}
