import React, { Component, useState } from 'react'
import Details from './Details'
import PersonalDetails from './PersonalDetails'
import Succes from './Succes'
import Confirmation from './Confirmation'





export default class AddEmployeeForm extends Component {
    

    state = {
        step: 1,
        FirstName: '',
        SecondName: '',
        Sex: '',
        Proffesion: '',
        EmployeeId: '',
        Department: '',
        email: '',
        picture: '',
    }


    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 })
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
    render() {
        const { step } = this.state;
        const { FirstName, SecondName, Sex, Proffesion, EmployeeId, Department, email, picture} = this.state;
        const values = { FirstName, SecondName, Sex, Proffesion, EmployeeId, Department, email, picture}

        switch (step) {
            case 1:
                return (
                    <Details
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values} />
                )
            case 2:
                return (
                    <PersonalDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values} />
                )
            case 3:
                return (
                    <Confirmation
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        values={values} />
                )
            case 4:
                return (
                    <Succes />
                )
            default:
            //do nothing


        }
    }
}