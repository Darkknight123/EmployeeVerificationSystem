import React, { useState } from 'react'
import { Container, Grid, List, ListItem, ListItemText, Button } from '@material-ui/core'

const Confirmation = ({ prevStep, nextStep, values,action }) => {
  console.log(values);
  const { FirstName, SecondName, Sex,Proffesion, EmployeeId, Department, email, picture} = values
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

const [isUserWellAdded, setIsUserWellAdded] = useState(false);
const [errorWhileAddingUser, setErrorWhileAddingUser] = useState(false); 
  return (
    <div style={{ backgroundColor: "#fff",  width: "90%", height: "60vh", margin: "50px auto" }}>
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
            <ListItemText primary="Sex" secondary={Sex}/>
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
           <ListItem>
            <ListItemText primary="picture" secondary={picture}/>
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
              color="rgb(85, 83, 83)"
            >
              Previous
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              onClick={action}
              fullWidth
              variant="contained"
              color="rgb(85, 83, 83)"
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