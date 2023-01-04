import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import tourister from './images/tourister.png'

const App = () => {
    return (
        <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align ="center">Tourister</Typography>
                <img src={tourister} alt="tourister" height="60" width={60}></img>
            </AppBar>
        </Container>
    );
}

export default App;