import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
import login_bg from '../images/log_in_out_bg.jpg'


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';

function Login() {

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
    
    const card = (
        <React.Fragment>
          <CardContent >
                    <Typography variant="h5" component="div" >
                    Please Sign In <br/><br/>
                    </Typography>
                    <Typography variant="body2">
                        <TextField 
                        style={{
                          width: '100%', 
                          maxWidth: '230px', 
                        }}
                        id="outlined-basic" 
                        label="UserName" 
                        variant="outlined"
                        size="small"
                        required
                        /> 
                    </Typography>
                    <br/>
                    <Typography variant="body2">
                        <TextField
                        style={{
                          width: '100%', 
                          maxWidth: '230px', 
                        }}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="off"
                        size="small"
                        />
                    </Typography>
                    <br/>
                    <Typography sx={{ fontSize: 'x-small',
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      marginBottom:'-20px'
                                    }} 
                        color="text.secondary">
                            Don't have an Account ?        
                    </Typography>
          </CardContent>
          <CardActions sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        }}
                    >
                    <Button variant="contained" 
                            color="inherit" 
                            size="small"
                            >
                        <Link to="/register" className='link-style'>Register</Link>
                    </Button>
                    <br/>
                    <br/>
                    <Button variant="contained"> Sign In </Button>
                    <br/><br/>
          </CardActions>
        </React.Fragment>
    );


    const backgroundContainer =  {
        backgroundImage: `url(${login_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        zindex: '0'
      }


  return (
    <div>
        <div style={backgroundContainer} > </div>
        <div  className='LoginBlock'>
            <Box sx={{
                        minWidth: '275',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center', 
                        height: '70vh',
                        fontSize:'5px'               
                    }}>
                    <Card variant="outlined">{card}</Card>
            </Box>
        </div>
    </div>
  )
}

export default Login