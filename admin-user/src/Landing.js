import React from 'react'
//import Home from './components/Home'
import AddEmployeeForm from './components/AddEmployeeForm'
import Topbar from './components/Topbar'
import Users from './components/Users'
import Logs from './components/Logs'
import Panel from './components/Panel';
import { Router, Link } from "@reach/router"
import './Landing.css'
export default class Landing extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div style={{ width: "100%" }}>
                <Topbar/>
                <div className="Landing">
                    <div className="container">
                        <Link to="/"><i className="fas fa-home" style={{color:'#3f51b6'}}> Home</i></Link>
                        <Link to="/addemployeeform"> <i className="fas fa-user-plus" style={{color:'#3f51b6'}}> New User</i></Link>
                        <Link to="/users"> <i className="fas fa-users" style={{color:'#3f51b6'}}> Users</i></Link>
                        <Link to="/logs"><i className="fas fa-cogs" style={{color:'#3f51b6'}}> Logs</i></Link>
                    </div>
                </div>
                
                    <Router>
                        <Panel path="/" />
                        <AddEmployeeForm path="/addemployeeform" />
                        <Users path="/users" />
                        <Logs path="/logs" />
                    </Router>
                
            </div>
        );
    }
}

