import React, { Component } from 'react'

export class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {FirstName:"Kerry",Proffesion:"Senior Mobile developer", EmployeeId:"4657676", Department:"Informatics"}
            ]
        }
    }

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
                    {this.state.data.map((d, i) => (
                        <tr>
                            <td>{d.FirstName}</td>
                            <td>{d.EmployeeId}</td>
                            <td>{d.Department}</td>
                            <td>{d.Proffesion}</td>
                        </tr>
                    ))

                    }
                </table>


            </div>
        )
    }
}

export default Users
