import React, { useState, useEffect } from 'react'
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
                    {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                    </Typography> */}
                    <Typography variant="h5" component="div" >
                    Please Sign In <br/><br/>
                    </Typography>
                    <Typography variant="body2">
                        <TextField 
                         fullWidth
                        id="outlined-basic" 
                        label="UserName" 
                        variant="outlined"
                        size="small"
                        autoComplete="off"
                        /> 
                    </Typography>
                    <br/>
                    <Typography variant="body2">
                        <TextField
                        fullWidth
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
                    <Button variant="contained" color="inherit" size="small">Register</Button>
                    <br/>
                    <Button variant="contained"> Sign In </Button>
                    <br/><br/>
          </CardActions>
        </React.Fragment>
    );


  return (
    <div>
        <img src={login_bg} />
        <div  className='LoginBlock'>
            <Box sx={{
                        minWidth: '275',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center', 
                                       
                    }}>
                    <Card variant="outlined">{card}</Card>
            </Box>
        </div>
    </div>
  )
}

export default Login