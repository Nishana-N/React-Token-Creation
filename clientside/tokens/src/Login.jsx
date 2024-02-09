// import React, { useState } from 'react'
// import axios from 'axios'
// import {Link, useNavigate, } from 'react-router-dom'

// const Login = () => {
//     const [email,setEmail] = useState()
//     const [password, setPassword] = useState()
//     const navigate=useNavigate()

//     axios.defaults.withCredentials=true;
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         axios.post("http://localhost:5000/login", {email,password})
//         .then(res => {
//             console.log("Login:"  + res.data);
//             if(res.data.Status === "success") {
//                 if(res.data.role === "admin") {
//                     navigate('/dashboard')
//                 } else {
//                     navigate("/")
//                 }
//             }
//         }).catch(err => console.log(err))
//     }

//   return (
//     <div className='d-flex justify-content-center align-items-center'>
//         <div className='bg-white p-3 rounded '>
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='mb-3'>
//                     <label htmlFor='email'>Email</label>
//                     <input type='email'
//                     placeholder='enter ur email'
//                     value={email}
//                     className='form-control rounded-0'
//                     onChange={(e) => setEmail(e.target.value) }
//                     />

                   
//                 </div>

//                 <div className='mb-3'>
//                     <label htmlFor='password'>Password</label>
//                     <input type='password'
//                     value={password}
//                     placeholder='enter ur password'
//                     className='form-control rounded-0'
//                     onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>

//                 <button type='submit' className='btn-success text-decoration-none'>Login</button>
//             </form>
//             <p><a>Already have an account</a></p>
//             <Link to="/register" className="text-decoration-none">SignUp</Link>
//         </div>

//     </div>
//   )
// }

// export default Login


import React, { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate, } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate=useNavigate()

    axios.defaults.withCredentials=true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/login", {email,password})
        .then(res => {
            console.log("Login:"  + res.data);
            if(res.data.Status === "success") {
                if(res.data.role === "admin") {
                    navigate('/dashboard')
                } else {
                    navigate("/")
                }
            }
        }).catch(err => console.log(err))
    }

  return (
    <div className='d-flex justify-content-center align-items-center'>
        <div className='bg-white p-3 rounded '>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input type='email'
                    placeholder='enter ur email'
                    className='form-control rounded-0'
                    onChange={(e) => setEmail(e.target.value) }
                    />

                   
                </div>

                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input type='password'
                    placeholder='enter ur password'
                    className='form-control rounded-0'
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type='submit' className='btn-success text-decoration-none'>Login</button>
            </form>
            <p><a>Already have an account</a></p>
            <Link to="/register" className="text-decoration-none">SignUp</Link>
        </div>

    </div>
  )
}

export default Login