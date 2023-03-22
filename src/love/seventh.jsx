import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import SeventhImg1 from"../love/photos/seventh1.jpg";
import SeventhImg2 from"../love/photos/seventh2.jpg";
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
                On 5 December 2022, we were dating each other for a day.<br></br>
                On that day i was over the top of the world<br></br>
                i had the most beautiful girl ever in the world dating me<br></br>
                <br></br>
                Here is a glimps of me propersing you and you saying yes to it.<br></br>
                <img src={SeventhImg1} height="320px" width="180px"></img>
                <img src={SeventhImg2} height="320px" width="180px"></img>
            </P>
            <Link to="/eighted" className="link"><Div1><Button>Next</Button></Div1></Link>
        </Div>
    )
}