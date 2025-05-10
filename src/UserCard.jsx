import { useState } from "react";

function UserCard({name,age, country, isActive, onToggle}) {


  return(
    <div style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
      <h2>{name}</h2>

      {isActive && (
        <>
          <p>Age: {age}</p>
          <p>Country: {country}</p>
        </>
      )}


<button onClick={onToggle}>
  {isActive ? 'Hide Details' : 'Show details'}
</button>
</div>
  );
}

export default UserCard;