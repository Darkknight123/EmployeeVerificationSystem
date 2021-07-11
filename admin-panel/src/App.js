import React from 'react';
import {observer} from 'mobx-react';
import UserStore from './Stores/UserStore';
import LoginForm from './LoginForm';
import inputField from './inputField';
import submitButton from './SubmitButton';
import './App.css';

class App extends React.Component {

  async componentDidMount(){

    try {

      let res=await fetch('/isLoggedIn',{
        method:'post',
        headers:{
          'Accept':'application/json',
          'Content-type':'application/json'
        }
      });
      let result=await res.json();


      if (result && result.success){
        UserStore.loading=false;
        UserStore.isLoggedIn=true;
        UserStore.username=result.username;
      }

      else{
        UserStore.loading=false;
        UserStore.isLoggedIn=false;

      }
      
    } catch (error) {
      UserStore.loading=false;
      UserStore.isLoggedIn=false;
      
    }

  }
  async doLogout(){

    try {

      let res=await fetch('/Logout',{
        method:'post',
        headers:{
          'Accept':'application/json',
          'Content-type':'application/json'
        }
      });
      let result=await res.json();


      if (result && result.success){
        UserStore.isLoggedIn=false;
        UserStore.username='';
      }

    } catch (e) {
      console.log(e)
      
    }

  }
 render(){

  if(UserStore.loading){
    return(
      <div className="App">
        <div className='container'>
          Loading, please wait    
        </div>
        
      </div>
    );
  }
  else{ 
    if (UserStore.isLoggedIn){
      return(
          <div className="App">
            <div className='container'>
            Welcome{UserStore.username}
            <submitButton
                text={'Log Out'}
                disabled={false}
                onClick={()=>this.doLogout()}/>  
            </div>
            
          </div>
      );
      
    }
    return (
      <div className="App">
        <div className='container'>
          <LoginForm/>
        </div>
        
      </div>
    );
  }
}
  }
 

export default observer(App);
