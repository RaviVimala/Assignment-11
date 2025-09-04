import React from "react";
import { Link } from "react-router-dom";
import logo1 from '../Images/logo1.png'

function Navbar() {
  return (
    <nav style={{
        background:"#e1e0e0ff",
        padding: "5px",
        display: "flex",
        justifyContent: 'space-between',
        position: "fixed",
        borderImage:'round',
        textAlign:"center",
        top: 20,
        left: 10,
        right:'20',
        width: "100%",
        marginRight:'40px',
        paddingRight:'100px',
        borderRadius:'20px'
      }}>
        <div className="logo" style={{ marginLeft:'80px',width:'50px',borderRadius:'0px'}}><img style={{borderRadius:'20px' }} src={ logo1 } alt="#" /></div>

        <div style={{display:'flex',justifyContent:'space-between', padding:'8px', gap:'50px'}}>
            <Link to="/" style={{ color: "blue", textDecoration: "none", textAlign:'center' }}>Home</Link>
            <Link to="/about" style={{ color: "blue", textDecoration: "none" }}>About</Link>
            <Link to="/users" style={{ color: "blue", textDecoration: "none" }}>Users</Link>
    </div>
    <Link to="" style={{padding:'8px',}}>Create an Account</Link>
    </nav>
  )
}

export default Navbar
