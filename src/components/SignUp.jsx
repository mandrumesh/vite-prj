import React, { useState } from 'react'
import laptop from '../assets/img/photo-1605468497592-2aabbc7b0cd8.avif'
import { Link, useNavigate } from 'react-router-dom'

const signup = () => {
    const navigate = useNavigate()
    const [credential, setCredentail] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: ''
    })

    const handleSubmit = async () => {
        const { name, email, password } = credential
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        const json = await response.jason()
        setCredentail({
            name: '',
            email: '',
            password: '',
            cpassword: ''
        })
        console.log("This is user", json);
        if (json.success) {
            localStorage.setItem('token', json.authToken)
            navigate('/login')
        }
    }

    const onChange = (e) => {
        setCredentail({ ...credential, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={laptop} className="card-img-top" alt="..." />
                    </div>
                    <div className='col-md-6'>
                        <h4>Sign Up</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputText1" className="form-label">Name</label>
                                <input type="text" name='name' value={credential.name} onChange={onChange} className="form-control" id="exampleInputText1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" name='email' value={credential.email} onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name='password' value={credential.password} onChange={onChange} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                                <input type="password" name='cpassword' value={credential.cpassword} onChange={onChange} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <p>Already registered? <Link to="/login">Log In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default signup