import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Link as RouterLink } from '@reach/router'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://etherchest.com">
        Etherchest.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '85vh',
  },
  image: {
    backgroundImage:
      'url(https://source.unsplash.com/user/alesnesetril/1600x900)', // main carousel
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    alt: 'https://source.unsplash.com/user/alesnesetril/1600x900',
    width: '100%',
  },
  paper: {
    margin: theme.spacing(1, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#ffffff',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    fontFamily: '"Jua", sans-serif',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    margin: theme.spacing(1),
  },
  font: {
    fontFamily: '"Orbitron", sans-serif',
  },
}))

export const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const classes = useStyles()

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image}></Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <center>
            <img
              alt="etherchest Banner"
              src={`https://i.imgur.com/TJP9RZ0.png`}
            />
            <Typography variant="h4" className={classes.font}>
              Etherchest Ecosystem
            </Typography>
          </center>
        </div>
        <div className={classes.paper}>
          <form className={classes.form} validate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Email Address"
              value={username}
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
              className={classes.font}
            />
            <TextField
              id="password"
              type="password"
              required
              label="Password"
              variant="outlined"
              margin="normal"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={classes.font}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {}}
              label="Login"
              className={classes.font}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <RouterLink to="/signup" className={classes.font}>
                  {"Don't have an Etherchest account? Sign Up"}
                </RouterLink>
              </Grid>
            </Grid>
            <center>
              <Box mt={5} className={classes.font}>
                <Copyright />
              </Box>
            </center>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default LoginPage
