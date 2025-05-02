import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./index.css"
import SignInPage from './pages/SignInPage'
import Navbar from './components/commonComponents/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<SignInPage/>} path='/' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App