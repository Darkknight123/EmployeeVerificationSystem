import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

const Details = ({ nextStep, handleChange, values }) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    return (
        <div style={{ backgroundColor: "#fff", width: "90%", height: "60vh", margin: "50px auto" }}>
            <Container component="main" maxWidth="xs">
                <div>
                    <Typography component="h1" variant="h5">
                        Add New Users
                    </Typography>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    id="firstname"
                                    placeholder="FirstName"
                                    label="FirstName"
                                    onChange={handleChange('FirstName')}
                                    defaultValue={values.FirstName}
                                    autoComplete="FirstName"
                                    fullWidth />
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                                <TextField
                                    id="Secondname"
                                    placeholder="SecondName"
                                    label="SecondName"
                                    onChange={handleChange('SecondName')}
                                    defaultValue={values.SecondName}
                                    autoComplete="SecondName"
                                    fullWidth />
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                                <TextField
                                    id="gender"
                                    placeholder="Male"
                                    label="Sex"
                                    onChange={handleChange('Sex')}
                                    defaultValue={values.Sex}
                                    autoComplete="Sex"
                                    fullWidth />
                            </Grid>
                        </Grid>
                        <br />
                        <Button
                            onClick={Continue}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="rgb(85, 83, 83)">
                            Next
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}
export default Details;