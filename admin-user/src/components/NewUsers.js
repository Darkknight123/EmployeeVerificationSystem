import React, { Component } from 'react'
import './NewUsers.css'

export class NewUsers extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="FormContainer" style={{ backgroundColor: "#b0bec5", width: "90%", height: "60vh", margin: "10px auto" }}>
                <form className="NewUsers" onSubmit={this.handleSubmit}>
                    <div className="name">
                      <label>
                           Name:
                          <input type="text" value={this.state.value} onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="EmployeeId">
                        <label>
                            EmployeeId:
                            <input type="number" value={this.state.value} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div className="proffesion">
                        <label>
                            proffesion:
                            <input type="text" value={this.state.value} onChange={this.handleChange}/>
                        </label>
                    </div>
                </form>
            </div>


        )
    }
}

export default NewUsers