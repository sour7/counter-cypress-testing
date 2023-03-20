import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div style={{display:"flex", gap:"20px", "justifyContent":"center", padding:0, fontSize:"20px"}}>
      <Link to="/">Counter</Link>
      <Link to="/users">Users</Link>
    </div>
  )
}

export default Navbar