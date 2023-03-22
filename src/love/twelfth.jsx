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
                Then all of a sudden the best day in my life came.<br></br>
                The day that is worth living a million times.<br></br>
                The day i finally meet you in person 18th Feb 2023 1:00 pm<br></br>
                The best feeling to hug you hold your hand and be with you<br></br>
                can not be explained in words<br></br>

                <br></br>
                No glimps avaliable because we did not click a photo togethere.
            </P>
            <Link to="/thirteenth" className="link"><Div1><Button>Next</Button></Div1></Link>
        </Div>
    )
}