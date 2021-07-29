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
    <Container  component="main" maxWidth="xs">
      <div>
        <List>
          <ListItem>
            <ListItemText primary="Email" secondary={FirstName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Username" secondary={SecondName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="First Name" secondary={Proffesion}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={EmployeeId}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="De" secondary={Department}/>
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
              Confirm & Continue
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default Confirmation