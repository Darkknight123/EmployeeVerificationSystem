import React, { Component } from 'react';
import Topbar from './Topbar/Topbar';
import "./panel.css";

 class Panel extends Component {
    render() {
        return (
            <div>
                <Topbar/>
                <div className="container">
                    <Sidebar/>
                   
                </div>
            </div>
        )
    }
}

export default Panel;