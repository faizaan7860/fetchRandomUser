import React, { useState } from "react";

function App() {

  const [searchTerm, setSearchTerm] = useState("")


  const users = [
    { id: 1, name: "Faizan", age: 21, country: "Turkey" },
    { id: 2, name: "Zaid", age: 22, country: "Morocco" },
    { id: 3, name: "Arbaaz", age: 23, country: "Dubai" },
  ];

  const filteredUsers = users.filter((users) =>
    users.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    
    <div>
     <h1>Random User Generator</h1>

     <input type="text" placeholder="Search by name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>   

     {filteredUsers.map((users)=>(
     <div key={users.id}><h3>{users.name}</h3>
     <p>Age: {users.age}</p>
    <p>Country: {users.country}</p>
    </div> 
     ))}  
    </div>
  );
}

export default App