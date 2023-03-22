import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import EleventhImg from"../love/photos/eleventh.jpg";
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
                It took a bit time for us to settle things like before.<br></br>
                and then we completed our 5 months successfully<br></br>
                I runied our 5th monthiverssary but I am glad that we again made thorugh it<br></br>

                <br></br>
                Here is a glimps of 12th Feburary 2023 10:32pm.<br></br>
                <img src={EleventhImg} height="320px" width="180px"></img>
            </P>
            <Link to="/twelfth" className="link"><Div1><Button>Next</Button></Div1></Link>
        </Div>
    )
}