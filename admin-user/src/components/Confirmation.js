import React from 'react'
import { Container, Grid, List, ListItem, ListItemText, Button } from '@material-ui/core'

const Confirmation = ({ prevStep, nextStep, values }) => {
  console.log(values);
  const { FirstName, SecondName, Proffesion, EmployeeId, Department, email } = values
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
        <List>
          <ListItem>
            <ListItemText primary="FirstName" secondary={FirstName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="SecondName" secondary={SecondName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Proffession" secondary={Proffesion}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="EmployeeId" secondary={EmployeeId}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Department" secondary={Department}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="email" secondary={email}/>
          </ListItem>
        </List>

        <br />
        <Grid container spacing={2}>
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
              Confirm
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
    </div>
 
  )
}

export default Confirmation