import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './love/home';
import First from './love/first';
import Second from './love/second';
import Third from './love/third';
import Fourth from './love/fourth';
import Fifth from './love/fifth';
import Sixth from './love/sixth';
import Seventh from './love/seventh';
import Eighted from './love/eighted';
import Ninth from './love/ninth';
import Tenth from './love/tenth';
import Eleventh from './love/eleventh';
import Twelfth from './love/twelfth';
import Thirteenth from './love/thirteenth';
import Fourteenth from './love/fourteenth';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
          <Route path="/fourth" element={<Fourth />} />
          <Route path="/fifth" element={<Fifth />} />
          <Route path="/sixth" element={<Sixth />} />
          <Route path="/seventh" element={<Seventh />} />
          <Route path="/eighted" element={<Eighted />} />
          <Route path="/ninth" element={<Ninth />} />
          <Route path="/tenth" element={<Tenth />} />
          <Route path="/eleventh" element={<Eleventh />} />
          <Route path="/twelfth" element={<Twelfth />} />
          <Route path="/thirteenth" element={<Thirteenth />} />
          <Route path="/fourteenth" element={<Fourteenth />} />
          
        </Routes>
      </Router>
    </>
  )
}
