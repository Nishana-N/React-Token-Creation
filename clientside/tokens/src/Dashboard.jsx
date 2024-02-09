import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const [success, setSuccess] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials=true;
    useEffect(() => {
     axios.get("http://localhost:3000/dashboard")
     .then(res => {
        console.log("Dashboard: " + res.data);
        if(res.data === "Success") {
            setSuccess("sucess ok")
        } else {
            navigate("/")
        }
     }).catch(err => console.log(err))
    }, [])
    
  return (
    <div>
        <h2>Dashboard</h2>
        <p>{success}</p>
    </div>
  )
}

export default Dashboard