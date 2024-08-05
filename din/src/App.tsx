import { useState } from 'react'
import  Din  from './components/Din'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Din text='this is me' />
    </>
  )
}

export default App
