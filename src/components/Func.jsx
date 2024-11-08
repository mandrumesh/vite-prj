import React, { useEffect, useState } from 'react'

const Func = () => {
    // const [count, setCount] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount((c) => c+1)
    //     }, 1000);
    //     return () => clearInterval(interval)
    // }, [])

    const [count, setCount] = useState(0)
    const [message, setMessage] = useState(null)
    const [notification, setNotification] = useState([])

    console.log("This is bhadra class // render method")

    useEffect (() => {
      console.log("component mounted");
      return()=> {
        console.log("component will unmount")
      }
    },[])

    useEffect (() => {
      console.log("count updated", count, message, notification);
    },[count, message, notification])

    const increment = () => {
      setCount(count + 1)
      setMessage("Hello")
      setNotification(1)
    }

  return (
    <div className='container mt-4'>
        {/* <h2>collect: {count}</h2> */}
        <h4>count: {count}</h4>
        <button className='btn btn-primary' onClick={increment}>Click me</button>
    </div>
  )
}

export default Func
