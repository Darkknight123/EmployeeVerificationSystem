import React, { useState } from 'react';
import LoginForm from './components/LoginForm'
import Landing from './Landing'

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin1234"
  }
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in")
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("You do not have the Admin priviledges!  ")

    }
  }


  return (
    <div className='App'>

      {(user.email !== "") ? (
        <Landing/>
      ): (
          <LoginForm Login = { Login } error = { error }/>
     )}
    </div>
  );
}

export default App

