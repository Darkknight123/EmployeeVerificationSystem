import "./panel.css";
import React, { Component } from 'react'
import Home from './pages/Home'
import NewUser from './pages/NewUser'
import Users from './pages/Users'
import Logs from './pages/Logs'


export class Panel extends Component {
        constructor(props) {
                super(props)
        }
        
        render() {
                return (
                        <div className="Panel">
                                <div className="btn-container">
                                        <div onClick={this.props.r(<Home/>)}  className="btn home"><i className="fas fa-home"></i></div>
                                        <div onClick={this.props.r(<NewUser/>)} className="btn new-user"> <i className="fas fa-user-plus"></i></div>
                                        <div onClick={this.props.r(<Users/>)} className="btn users"> <i className="fas fa-users"></i></div>
                                        <div onClick={this.props.r(<Logs/>)} className="btn logs"> <i className="fas fa-cogs"></i></div>
                                </div>
                        </div>
                )
        }
}


export default Panel;