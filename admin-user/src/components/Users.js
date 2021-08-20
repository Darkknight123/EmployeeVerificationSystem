import React, { Component } from 'react'

export class Users extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "white", width: "90%", height: "60vh", margin: "10px auto" }}>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Employee ID</th>
                        <th>Department</th>
                        <th>Proffesion</th>
                    </tr>
                    <tr>
                        <td>{this.state.FirstName}</td>
                        <td>{this.state.EmployeeId}</td>
                        <td>{this.state.Department}</td>
                        <td>{this.state.Proffesion}</td>
                    </tr>
                </table>


            </div>
        )
    }
}

export default Users
