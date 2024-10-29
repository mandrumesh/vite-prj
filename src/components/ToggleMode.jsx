import React from 'react'

const ToggleMode = (props) => {

  return (
    <div>
      <button className={`btn btn-${props.mode == 'dark' ? 'light' : 'dark'} toggle-mode`} onClick={props.toggleMode}>{props.mode == "dark" ? "Light Mode" : "Dark Mode"}</button>
    </div>
  )
}

export default ToggleMode
