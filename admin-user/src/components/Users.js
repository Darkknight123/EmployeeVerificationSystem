import React, { Component } from 'react'

export class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                { FirstName: "Kerry", Proffesion: "Senior Mobile developer", EmployeeId: "4657676", Department: "Informatics" },
                 { FirstName: "Peter", Proffesion: "Senior Mobile developer", EmployeeId: "4657676", Department: "Informatics" },
                  { FirstName: "Maggie", Proffesion: "Senior Mobile developer", EmployeeId: "4657676", Department: "Informatics" },
                   { FirstName: "Duncan", Proffesion: "Senior Mobile developer", EmployeeId: "4657676", Department: "Informatics" },
                    { FirstName: "Washington", Proffesion: "Senior Mobile developer", EmployeeId: "4657676", Department: "Informatics" }
            ]
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: "white", width: "90%", height: "70vh", margin: "50px auto" }}>
                <table style={{  borderSpacing: "5px",background: "#fff",boxShadow: "0 1px 0 0 rgba(0, 0, 37, 0.05)",width: "100%"}}>
                <tr>
                    <th>FirstName</th>
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


            </div >
        )
    }
}

export default Users
