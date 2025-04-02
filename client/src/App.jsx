import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then(res => res.json())
      .then(data=>setUsers(data));
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center mt-10 font-bold text-3xl">
        <h1>Total Number of users are : {users.length}</h1>
      </div>
      <div>
        <form action="" onSubmit={handlesubmit}>
          <input type="text" name='name' placeholder='name' />
          <input type="text" name='name' placeholder='name' />
          <input type="text" name='name' placeholder='name' />
        </form>
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-center mt-10">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 justify-center items-center border-2 rounded p-2 border-black"
          >
            <h1>User Id : {user.id}</h1>
            <h1>User Name : {user.name}</h1>
            <h1>User email : {user.email}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
