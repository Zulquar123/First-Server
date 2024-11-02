import React, { useEffect, useState } from 'react'

export default function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users").then(res=> res.json()).then(data=>setUsers(data));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name,email}
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Inside post response", data);
        const newUser = [...users, data];
        setUsers(newUser);
        form.reset();
      });

  }

  return (
    <div className="flex flex-col h-screen w-full items-center">
      <h1 className="mt-10 font-bold text-5xl">
        User Management System of {users.length} employees
      </h1>

      <div className='mt-10 border-2 p-6 border-sky-700 rounded-xl'>
        <form action="" className='flex flex-col gap-4' onSubmit={handleAddUser}>
          <input type="text" placeholder="Enter Your Name" name="name" className='p-3 border-2 border-sky-600 rounded '/>
          <input type="email" placeholder="Enter Your Email" name="email" className='p-3 border-2 border-sky-600 rounded ' />
          <input type="submit" value="Add User" className='border-2 border-sky-600 text-sky-700 rounded p-2' />
        </form>
      </div>

      <div className="mt-10 flex gap-5 flex-wrap border-2 m-5 justify-center">
        {users.map((user, index) => (
          <div className="border-2 p-5 rounded-xl border-black text-center" key={index}>
            <h1>Name : {user.name}</h1>
            <h1>Email : {user.email}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
