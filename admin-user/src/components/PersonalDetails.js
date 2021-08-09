import React from 'react'
import { Container, Typography, Grid, TextField, Button, Input } from '@material-ui/core'

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
      <Container component="main" maxWidth="xs">
        <div>
          <Typography component="h1" variant="h5">
            Add new  User
        </Typography>
          <form>
            <Grid container spacing={2}>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="proffesion"
                  placeholder="Proffesion"
                  label="Proffesion"
                  onChange={handleChange('Proffesion')}
                  defaultValue={values.Proffesion}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="employee_id"
                  placeholder="EmployeeId"
                  label="Employee ID"
                  onChange={handleChange('EmployeeId')}
                  defaultValue={values.EmployeeId}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="department"
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
                  id="email"
                  placeholder="example@gmail.com"
                  label="Email"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  autoComplete="email"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  type="file"
                  alt="employee"
                  id="pictureToSend"
                  placeholder="picture"
                  label="employee's picture"
                  onChange={handleChange('picture')}
                  defaultValue={values.picture}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  onClick={Previous}
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
                  onClick={Continue}
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
