import React, { Component } from 'react'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Itemlist from './component/Category/Itemlist'
import Resources from './component/Resources'
import  Mealphotos  from './component/Mealphotos'
import Navbar from './component/Navbar'
export class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/list' element={<Itemlist/>}></Route>
        <Route path='/meals' element={<Mealphotos/>}></Route>
        <Route path='/resources' element={<Resources/>}></Route>
        </Routes>
        
      </Router>
        
      </>
    )
  }
}

export default App


