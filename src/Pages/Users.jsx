import React from 'react'
import { Link } from 'react-router-dom'


function Users() {
    const Users = [
        {id:1, name:"Mr.Ravisankar",email:"Ravisankar@gmail.com" },
        { id: 5, name: "Mr.Ram", email: "Ramp@example.com" },
        { id: 5, name: "Mr.Arun", email: "Arun123@example.com" },
        { id: 2, name: "Mrs.Vimala", email: "VimalaR@example.com" },
        { id: 3, name: "Mr.Saravanan", email: "Saravanaravi@example.com" },
        { id: 4, name: "Mr.Prabhu", email: "Prabhuv@example.com" },
        
    ] 
  return (
    <div style={{ paddingTop: "100px", textAlign: "center", color: "black", backgroundColor:'' }}>
      <h1 style={{fontWeight:'bold',fontSize:'50px'}}> Authorised Employee's of the Company </h1>

      <ul className="flex flex-col gap-y-3" style={{listStyle:'none', padding: 0,marginLeft:'600px'}}>
        {Users.map((user) => 
         <li key={user.id} style={{ margin:'10px', width:'350px', background:'black', padding:'10px',borderRadius: "8px",color: "white",}}>
            <strong><Link to="/userslist"> {user.name} </Link> </strong>
             <br />
            <small>{user.email}</small>
        </li>
    )}       
      </ul>
    </div>
  )
}

export default Users
