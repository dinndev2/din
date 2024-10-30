import { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";
import SideBar from './components/SideBar';
import ToolBar from './components/Toolbar'
import toast, { Toaster, ToastBar } from 'react-hot-toast';



function App() {

  return (
    <div className='w-screen h-screen overflow-hidden flex '>
      <Toaster>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                <div className='text-sm'>{message}</div>
                {t.type !== 'loading' && (
                  <div className='text-xs font-bold bg-red-400 text-white w-3 h-3 p-2 cursor-pointer flex items-center justify-center rounded-full' onClick={() => toast.dismiss(t.id)}>X</div>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>;
      <SideBar />
      <div className='w-full flex flex-col items-start justify-center p-6' style={{height: "100vh"}}>
        <ToolBar/>
        <div className='w-full' style={{height: "95vh"}}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default App
