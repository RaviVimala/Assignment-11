import React from 'react'
import { Link } from 'react-router-dom'

function Userslist() {
  return (
    <div style={{paddingTop:'100px',marginLeft:'230px'}}>
         <Link to="/Users" style={{
          marginTop: "0 20px",
          display: "inline-block",
          padding: "10px 25px",
          background: "#f43df0ff",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "600",
        }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg> Back</Link>
        <h1 style={{marginLeft:'180px', fontSize:'30px',color:''}}>Disclosures (Employee's Details - Developer -2025 )</h1>
        
        <div className="flex gap-x-20">
            <div className="flex flex-col gap-y-3" style={{backgroundColor:'lightblue',margin:'10px',width:'300px',padding:'10px',textAlign:'start',}}>
                <h2 style={{textAlign:'center'}}>Mr.Ravisankar</h2>
                <p>Position:    Exective </p>
                <p>Team:   Developer </p>
                <p>Office:  Bercellona</p>
                <p>Country: United State</p>
            </div>
            <div className="flex flex-col gap-y-3" style={{backgroundColor:'lightgreen',margin:'10px',width:'300px',padding:'10px',textAlign:'start',}}>
                <h2 style={{textAlign:'center'}}>Mr.Ram</h2>
                <p>Position:    Exective </p>
                <p>Team:   Design </p>
                <p>Office:  New Yark</p>
                <p>Country: Romania</p>
            </div>
            <div className="flex flex-col gap-y-3" style={{backgroundColor:'lightpink',margin:'10px',width:'300px',padding:'10px',textAlign:'start',}}>
                <h2 style={{textAlign:'center'}}>Mr.Arun</h2>
                <p>Position:    Exective </p>
                <p>Team:   Human Resources </p>
                <p>Office:  San Francisco</p>
                <p>Country: United State</p>
            </div>
        </div>
        <div className="flex gap-x-20">
            <div className="flex flex-col gap-y-3" style={{backgroundColor:'gold',margin:'10px',width:'300px',padding:'10px',textAlign:'start',}}>
                <h2 style={{textAlign:'center'}}>Mrs.Vimala</h2>
                <p>Position:    Exective </p>
                <p>Team:   Human Resources </p>
                <p>Office:  Bucuresti</p>
                <p>Country: United State</p>
            </div>
            <div className="flex flex-col gap-y-3" style={{backgroundColor:'darkorange',margin:'10px',width:'300px',padding:'10px',textAlign:'start',}}>
                <h2 style={{textAlign:'center'}}>Mr.Saravana</h2>
                <p>Position:    CEO </p>
                <p>Team:   Design </p>
                <p>Office:  Bercellona</p>
                <p>Country: United State</p>
            </div>
             <div className="flex flex-col gap-y-3" style={{backgroundColor:'deepskyblue',margin:'10px',width:'300px',padding:'10px',textAlign:'start',}}>
                <h2 style={{textAlign:'center'}}>Mr.Prabhu</h2>
                <p>Position:    Exective </p>
                <p>Team:   Design </p>
                <p>Office:  Bercellona</p>
                <p>Country: United State</p>
            </div>
        </div>
             
    </div>
  )
}

export default Userslist
