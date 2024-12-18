import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserList = () => {
    const navigate = useNavigate()

    const users = [
        { id: 1, name: "Ram" },
        { id: 2, name: "Shyam" },
        { id: 3, name: "Hari" },
    ]

    const handleUser = (userId, userName) => {
        navigate(`/user/${userId}/${userName}`)
    }

    return (
        <div className='container pt-5'>
            <h4>User List</h4>
            <ul className='list-unstyled'>
                {users.map((user) => (
                    <li onClick={() => handleUser(user.id, user.name)} style={{cursor:"pointer"}}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList
