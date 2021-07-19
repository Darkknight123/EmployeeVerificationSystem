import "./panel.css";
import React, { Component } from 'react'



export class Panel extends Component {
        constructor(props) {
                super(props)
        }
        
        render() {
                return (
                        <div className="Panel">
                                <div className="btn-container">
                                        <div className="btn home"><i className="fas fa-home"></i></div>
                                        <div className="btn new-user"> <i className="fas fa-user-plus"></i></div>
                                        <div className="btn users"> <i className="fas fa-users"></i></div>
                                        <div className="btn logs"> <i className="fas fa-cogs"></i></div>
                                </div>
                        </div>
                )
        }
}


export default Panel;