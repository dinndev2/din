import { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";
import SideBar from './components/SideBar';


function App() {

  return (
    <div className='w-screen h-screen overflow-hidden flex '>
      <SideBar />
      <div className='w-5/6 flex items-center justify-center'>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
