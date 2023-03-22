import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import ThirteenthImg from"../love/photos/thirteenth.png";
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
                This is something for you that i made.Hope you like it.<br></br>
                <img src={ThirteenthImg}></img>
            </P>
            <Link to="/fourteenth" className="link"><Div1><Button>Next</Button></Div1></Link>
        </Div>
    )
}