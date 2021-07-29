import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div style={{ backgroundColor: "#fff", width: "90%", height: "70vh", margin: "50px auto" }}>
        <Container  component="main" maxWidth="xs">
      <div>
        <Typography  component="h1" variant="h5">
          Add new  User
        </Typography>
        <form>
          <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="Proffesion"
                label="Proffesion"
                onChange={handleChange('Proffesion')}
                defaultValue={values.Proffesion}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="EmployeeId"
                label="Employee ID"
                onChange={handleChange('EmployeeId')}
                defaultValue={values.EmployeeId}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField 
                placeholder="Department"
                label="Department"
                onChange={handleChange('Department')}
                defaultValue={values.Department}
                autoComplete="Department"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField 
                placeholder="example@gmail.com"
                label="Email"
                onChange={handleChange('email')}
                defaultValue={values.email}
                autoComplete="email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Previous }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Continue }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
  
  )
}

export default PersonalDetails
