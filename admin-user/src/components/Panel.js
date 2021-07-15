import React from 'react';
import Sidebar from './Sidebar'



import "./panel.css";



 function Panel() {
  
     
    
        return (
            <Router>
                 <div className="container">
                     <Switch>
                         <Route path='/' />
                     </Switch>
                    <Sidebar/>
                </div>
            </Router>
     
        )
  
}

export default Panel;