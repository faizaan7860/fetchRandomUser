import React from 'react'
import { useState } from 'react';

  function App(){
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const [submittedData, setSubmittedData] = useState(null)


const handleSubmit = (e) => {
  e.preventDefault(); // Prevents the default form submission behavior
setSubmittedData({name,email,password})
};

    return(
      <div>
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>Register</button>
        </form>

{
submittedData &&(
  <div>
  <h2> Submitted Data</h2>
  <p>Name: {submittedData.name}</p>
  <p>Email: {submittedData.email}</p>
  <p>Password: {submittedData.password}</p>
</div>
)}

  </div>
 )}

export default App;