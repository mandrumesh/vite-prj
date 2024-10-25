import React from 'react'

const ToggleMode = (props) => {
    const toggleMode = () => {
      if (props.mode == 'light') {
        props.setMode('dark');
      } else {
        props.setMode('light')
      }
    }

    return (
        <div>
            <button class={`btn btn-${props.mode=='dark' ? 'light': 'dark'} toggle-mode`} onClick={toggleMode}>{props.mode == "dark" ? "Light Mode" : "Dark Mode" }</button>
        </div>
    )
}

export default ToggleMode
