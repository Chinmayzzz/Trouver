import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Main from './Main'

const Pages = () => {
  return (
    <Routes>
        <Route path="/" and element={<Home/>}/>
        <Route path="/:name" and element={<Main/>}/>

    </Routes>
  )
}

export default Pages