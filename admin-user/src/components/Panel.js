import React, { Component } from 'react';
import Topbar from './Topbar';
import Sidebar from 'react-sidebar';
import "./panel.css";

const mql = window.matchMedia(`(min-width: 800px)`);

 class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarDocked: mql.matches,
          sidebarOpen: false
        };
     
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
     
      componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
      }
     
      componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
      }
     
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
     
      mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
      }
     
     
    render() {
        return (
            <div>
                <Topbar/>
                <div className="container">
                    <Sidebar
                       sidebar={<b>AdminUser</b>}
                       open={this.state.sidebarOpen}
                       docked={this.state.sidebarDocked}
                       onSetOpen={this.onSetSidebarOpen}/>
                   
                </div>
            </div>
        )
    }
}

export default Panel;