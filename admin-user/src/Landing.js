import React, { Component } from 'react'
import Home from './components/Home'
import NewUsers from './components/NewUsers'
import Users from './components/Users'
import Logs from './components/Logs'
import Panel from './components/Panel';




export class Landing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Cname: 'Panel',
            whatIsRendering: ''
        }
        this.setView = this.setView.bind(this);
    }

    setView(name) {
        this.setState({ Cname: name })
    }


    render() {
        let whatIsRendering = '';
        const { Cname } = this.state;
        if (Cname === 'Home') {
            whatIsRendering = <Home />
        } else if (Cname === 'Users') {
            whatIsRendering = <Users />
        } else if (Cname === 'NewUser') {
            whatIsRendering = <NewUsers />
        } else {
            whatIsRendering = <Logs />
        }

        return (
            <div style={{width:"100%"}}>
                <Panel />
                {/* {whatIsRendering} */}
            </div>
        )
    }
}

export default Landing
