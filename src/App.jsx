import { useState } from 'react'
import 'bootstrap/scss/bootstrap.scss'
import './App.css'
import Header from './components/Header'
import ToggleMode from './components/ToggleMode'

import 'bootstrap'

function App() {
  const [mode, setMode] = useState('light');

  return (
    <>
      <ToggleMode mode={mode} setMode={setMode} />
      <Header logo="This is Logo" mode={mode} />
    </>
  )
}

export default App
