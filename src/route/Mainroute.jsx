import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from '../component/Detail/Detail'
import Search from '../component/Search/Search'

function Mainroute() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/search' element={<Search />} />
        <Route path='/detail/:id' element={<Detail />} />
    </Routes>
    </>
  )
}

export default Mainroute