import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { Boards } from './modules/boards'
import { ListPage } from './modules/list'
import { Navbar } from './modules/navbar'
import { useState } from 'react'
import ErrorPage from './modules/common/ErrorPage'

function App() {
  const [backButton,setBackButton] = useState(true);

  return (
    <>
    <Navbar backButton={backButton}/>
    <Routes>
      <Route path='/' element={<Navigate to="/Boards" />}/>
      <Route path='/Boards' element={<Boards setBackButton={setBackButton}/>}/>
      <Route path='/Boards/:id' element={<ListPage setBackButton={setBackButton}/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}

export default App
