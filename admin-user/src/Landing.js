import React from 'react'
import Home from './components/Home'
import NewUsers from './components/NewUsers'
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
                <div className="Landing">
                    <div className="container">
                        <Link to="/"><i className="fas fa-home"> Home</i></Link>
                        <Link to="/newusers"> <i className="fas fa-user-plus"> New User</i></Link>
                        <Link to="/users"> <i className="fas fa-users"> Users</i></Link>
                        <Link to="/logs"><i className="fas fa-cogs"> Logs</i></Link>
                    </div>
                </div>
                
                    <Router>
                        <Panel path="/" />
                        <NewUsers path="/newusers" />
                        <Users path="/users" />
                        <Logs path="/logs" />
                    </Router>
                
            </div>
        );
    }
}

