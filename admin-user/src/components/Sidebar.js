import React, { Component } from 'react'
import {SidebarData} from './SidebarData';

export class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <ul>
                {SidebarData.map((val,key)=>{
                    return(
                        <li key={key}>
                            {""}
                            <div>{val.icon}</div>{""}
                            <div>
                                {val.title}
                            </div>
                        </li>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default Sidebar
