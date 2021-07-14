import React,{useState} from 'react';
import LoginForm from './components/LoginForm'
import Panel from './components/Panel';

function App() {
  const adminUser={
    email:"admin@admin.com",
    password:"admin1234"
  }
  const [user,setUser]=useState({name:"",email:""});
  const [error,setError]=useState("");

  const Login =details=>{
    console.log(details);

    if (details.email ===adminUser.email && details.password ===adminUser.password)
    {console.log("Logged in")
       setUser({
         name:details.name,
         email:details.email
       });
    }else{
      console.log("Details do not match!");
      setError("You do not have the Admin priviledges!  ")

    }
  }

  
  return (
    <div className='App'>
     {(user.email !=="")?(
       <Panel/>
     
      
     ):(
       <LoginForm Login={Login} error={error}/>
     )}
    </div>
  );
}

export default App

