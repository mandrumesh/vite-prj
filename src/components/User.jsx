import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userId, userName} = useParams();

  return (
    <div className='container'>
        <h4>User Profile</h4>
        <h5>User Id: { userId }</h5>
        <h5>User Name: { userName }</h5>
    </div>
  )
}

export default User
