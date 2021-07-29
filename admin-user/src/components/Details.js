import React from 'react'

const Details = ({nextStep,handleChange,values}) =>{
    const Continue = e =>{
        e.preventDefault();
        nextStep();
    }
    return(
        <div style={{backgroundColor:"#78908c",width:"90%",height:"60vh",margin:"10px auto"}}>
            <label>Email
                <input 
                type="text"
                Placeholder="example@gmail.com"
                value={values.email}
                onChange ={handleChange('email')}/>

            </label>
            
        </div>
    )
}
export default Details;