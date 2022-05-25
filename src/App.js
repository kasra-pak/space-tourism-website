import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './containers/Home'
import Destination from './containers/Destination';

import GlobalStyle from './globalStyles.styled'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
        </Routes>
      </Router>
    </>
  )
}