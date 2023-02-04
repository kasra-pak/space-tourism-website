import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './containers/Home'
import Destination from './containers/Destination';
import Crew from './containers/Crew';
import Technology from './containers/Technology';

import GlobalStyle from './globalStyles.styled'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </Router>
    </>
  )
}