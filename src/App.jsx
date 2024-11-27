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
import Classes from './components/Classes'
import Func from './components/Func'
import Counter from './components/Counter'
import User from './components/User'
import UserList from './components/UserList'
import ProductState from './context/ProductState'
import SignUp from './components/SignUp'
import Login from './components/Login'
import CartItems from './components/CartItems'
import Openeditmodal from './components/Openeditmodal'



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
      <ProductState>
        <Router>
          <ToggleMode mode={mode} toggleMode={toggleMode} />
          <Header logo="This is Logo" mode={mode} />
          <Alert alert={alert} showAlert={showAlert} />
          {/* <Classes /> */}
          {/* <Func /> */}
          {/* <Counter /> */}
          <div className='header-bottom-spacer'>
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/user/:userId/:userName" element={<User />} />
              <Route path="/user" element={<UserList />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cartitems" element={<CartItems />} />
              <Route path="/editmodal" element={<Openeditmodal />} />
            </Routes>
          </div>
        </Router>
      </ProductState>
    </>
  )
}

export default App
