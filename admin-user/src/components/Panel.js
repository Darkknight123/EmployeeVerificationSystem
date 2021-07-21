import "./panel.css";
import React, { Component } from 'react'
import { Link } from "@reach/router"



export class Panel extends Component {

        render() {
                return (
                        <div className="Panel">
                                <div className="btn-container">
                                        <Link to="/home" className="btn home"><div ><i className="fas fa-home"></i></div></Link>
                                        <Link to="/newuser" className="btn new-user"><div > <i className="fas fa-user-plus"></i></div></Link>
                                        <Link to="/users" className="btn users"><div > <i className="fas fa-users"></i></div></Link>
                                        <Link to="/logs" className="btn users"><div x> <i className="fas fa-cogs"></i></div></Link>
                                </div>
                        </div>
                )
        }
}


export default Panel;