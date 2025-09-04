import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <>
   <div style={{minHeight: "100vh",paddingTop: "80px",textAlign: "center",
        backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/001/937/048/small/digital-technology-background-vector.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",}}> <br /> <br /> <br />
   <h1 style={{fontSize:'70px',}}> Multi page PortFolio </h1> <br />
   <p style={{ fontSize:'20px'   }}>Objectively innovate empowered manufactured products whereas parallel platforms.</p> <br /><br /><br /><br /> 

   <Link to="" style={{marginTop: "20px",
          display: "inline-block",
          padding: "10px 15px",
          background: "#49d142ff",
          color: "white",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "500",}}>ENGAGE NOW</Link>
   </div>
   
   </>
  )
}

export default Home
