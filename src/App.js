import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LeftSectionone from './Component/LeftSection/LeftSectionone';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <Router>
    <div className='app'>
      <LeftSectionone />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element='explore'/>
        <Route path='/notification' element='notification'/>
        <Route path='/messages' element='messages'/>
        <Route path='/bookmarks' element='bookmarks'/>
        <Route path='/lists' element='lists'/> 
        <Route path='/profile' element='profile'/> 
      </Routes>
      <div className='right-section'>Right section</div>
    </div>
    </Router>
    
  )
}

export default App
