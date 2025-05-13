import { data } from "autoprefixer"
import React, { useState,useEffect } from "react"




function RandomUser(){

const [user,setUser]=useState(null)


function fetchUser(){
  fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((data) => {
    setUser(data.results[0])
  })
}

useEffect(() => {
  fetchUser();
}, []);


  return(
    <div>
      <h1>RandomUser</h1>

      {user &&(
        <div>
          <img src={user.picture.large}/>
          <h2>{user.name.first}</h2>
        <p>{user.email}</p>
        <button onClick={fetchUser}>Get New User</button>
        </div>
      )}
    </div>
  )
}


export default RandomUser