import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import FourthImg from"../love/photos/fourth.jpg";
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
                With the time i was getting to obssed with you all day, all night i think about you.<br></br>
                But there was one thing missing i had a person to love but not a face to love<br></br>
                But on 29 September 2022 11:31pm<br></br>
                For the very first time i saw your beautiful face.
                <br></br>
                <br></br>
                Here is a glimps of what begain that day.<br></br>
                <img src={FourthImg} height="320px" width="180px"></img>
            </P>
            <Link to="/fifth" className="link"><Div1><Button>Next</Button></Div1></Link>
        </Div>
    )
}