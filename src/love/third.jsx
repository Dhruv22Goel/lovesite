import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import ThirdImg from"../love/photos/third.jpg";
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
                After that day our conversation begain.<br></br>
                Then on 15 Sept 2022 3:20pm I heard your voice for the very first time.<br></br>
                I had never heard such a melodious voice ever before.<br></br> 
                i still remember getting butterflies when i heard your voice.<br></br>
                <br></br>
                Here is a glimps of that day.<br></br>
                <img src={ThirdImg} height="320px" width="180px"></img>
            </P>
            <Link to="/fourth" claaName="link"><Div1><Button>Next</Button></Div1></Link>
        </Div>
    )
}