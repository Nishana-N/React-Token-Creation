import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Signup from "./Signup"
import Login from "./Login"
import Dashboard from "./Dashboard"


function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element= {<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
