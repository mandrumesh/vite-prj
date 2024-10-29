import { useState } from 'react'
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'
import './App.css'
import ToggleMode from './components/ToggleMode'
import Header from './components/Header'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route  
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const body = document.body

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode == 'dark') {
      setMode('light');
      showAlert('success', 'Light Mode is Activated')
      body.classList.add("light-mode")
      body.classList.remove("dark-mode")
    } else {
      setMode('dark')
      showAlert('success', 'Dark Mode is Activated')
      body.classList.add("dark-mode")
      body.classList.remove("light-mode")
    }
  }

  return (
    <>
      <Router>
        <ToggleMode mode={mode} toggleMode={toggleMode} />
        <Header logo="This is Logo" mode={mode} />
        <Alert alert={alert} showAlert={showAlert} />
        <Routes>
          <Route path="/" element={<Home showAlert={showAlert} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
