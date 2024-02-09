import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const [name,setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/register", {name,email, password})
        .then(res => {
            navigate("/login")
        }).catch(err => console.log(err)) 
    }

  return (
    <div className='d-flex justify-content-center align-items-center'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
            <label htmlFor='name'>Name</label>
            <input type='text'
            placeholder='enter ur name'
            name='name'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
            </div>
            
            <div className='mb-3'>
                <label htmlFor='email'>Email</label>
                <input type='email'
                placeholder='enter ur email'
                name='email'
                
                onChange={(e)=> setEmail(e.target.value)}
                />
            </div>

            <div className='mb-3'>
                <label htmlFor='password'>Password</label>
                <input type='password'
                placeholder='enter ur password'
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type='submit'>Register</button>
        
        </form>

        <p className=' rounded-0 text-decoration-none'><a>Already have an account</a></p>
        <Link to="/login" className='bg-light rounded-0 text-decoration-none'>Login</Link>
    </div>
  )
}

export default Signup