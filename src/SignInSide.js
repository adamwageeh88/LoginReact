import * as React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import GoogleButton from 'react-google-button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Synergy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url("https://images.pexels.com/photos/2860807/pexels-photo-2860807.jpeg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Typography component="h1" variant="h3">
              Welcome Back
            </Typography>
            <Typography>
              Please enter your contact details to connect.
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                    my: 3,
                    width: '80%',
                    marginTop: '50px',
                }}
              />
              <TextField
                margin="normal"
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                    width: '80%',
                }}
              />

              <FormControlLabel
                sx={{marginRight: '180px', marginTop: '5px'}}
                control={<Checkbox value="remember" color="primary"/>}
                label="Remember me"
              />

              <Link href="#" variant="body2">
                Forgot password?
              </Link>

              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 4, mb: 2, color: 'white', backgroundColor: 'black', padding: '12px', width: '80%'}}
              >
                Log In
              </Button>

              <GoogleButton
                onClick={() => { console.log('Google button clicked') }}
                style={{ width: '80%', color: 'black', backgroundColor: 'white', marginTop: '10px', marginBottom: '30px', marginLeft: '55px'}}
              />
              
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2" sx={{color: 'black', marginLeft: '160px', marginTop: '15px'}}>
                    {"Don't have an account? Sign Up here"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 20 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}