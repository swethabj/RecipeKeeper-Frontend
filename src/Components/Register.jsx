import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Register.css'
import poster from '../images/poster.jpg'
import reg_bg from '../images/log_in_out_bg.jpg'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function Register() {

      const [showImage, setShowImage] = useState(true);
      useEffect(() => 
      {
          // Set a timeout to switch to the second image after 10 seconds
          const timeoutId = setTimeout(() => 
          {
            setShowImage(false);
          }, 2300); // 5 seconds in milliseconds
              // Clean up the timeout to avoid memory leaks
        return () => clearTimeout(timeoutId);
      }, []);


      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] =  useState('');
      const [confirmPass, setConfirmPass] = useState('');
      const [isUsernameValid, setIsUsernameValid] = useState(false);
      const [isPasswordValid, setIsPasswordValid] = useState(false);
      const isConfirmPassValid = password === confirmPass;
      const isEmailValid = /\S+@\S+\.\S+/.test(email);
      const [isFormSubmitted , setIsFormSubmitted] = useState(false);
      const [error, setError] = useState('');

      {/*  Password Field visible & hide */}
      const [showPassword, setShowPassword] = useState(false);
      const handleClickShowPassword = () => setShowPassword((show) => !show);
      const handleMouseDownPassword = (e) => {
        e.preventDefault();
      };
    
      const validateUsername = (input) => {    
        const isLenValid = input.length >= 3;
        return isLenValid 
      };

      const validatePassword = (input) => {    
        const isLenValid = input.length >= 3;
        return isLenValid 
      };



      const handleSubmit = async(e) => {
        e.preventDefault();
        setIsFormSubmitted(true);
        setIsUsernameValid(validateUsername(username));
        setIsPasswordValid(validatePassword(password));
        if( validateUsername(username) &&
           isEmailValid && 
           validatePassword(password) && 
           isConfirmPassValid )
        {

          const data = {
            "username": username,
            "email": email,
            "password": password,
           };

            try {
              console.log(data);
              const response = await axios.post('http://127.0.0.1:4500/api/v1/users', 
                                data, {
                                headers: {
                                  'Content-Type': 'application/json', 
                                  },
                                });

              if (!response.ok) {
                const errorMessage = await response.json();
                setError(errorMessage.message); } 
                console.log(error)
                console.log("This is an error ")
              // else {
              //   // Handle successful user creation
              //   const userData = await response.json();
              //   // Do something with the created user data
              // }

              //  console.log(response.json())
              // console.log(response.data.message);
            } catch (error) {
              console.error('Error:', error.response ? error.response.data.error : error.message);
            }

        }
        else{console.log('Form Not submitted with valid data:');}

        
      };  






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
                        Create Your Account  
                    </Typography>
                    <br/><br/>
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
                        value={username}
                        onChange={ (e) => setUsername(e.target.value)} 
                        FormHelperTextProps={{ style: { textAlign: 'center' } }}
                        helperText = { 
                                isFormSubmitted
                                  ? validateUsername(username)
                                      ? ''
                                      : 'Username must be at least 3 characters long'
                                  : ''    
                              }
                        error={isFormSubmitted && !validateUsername(username)}
                        />  
                    </Typography>
                    <br/>
                    <Typography variant="body2">
                        <TextField
                        style={{
                          width: '100%', 
                          maxWidth: '230px', 
                        }}
                        id="outlined-basic" 
                        label="Email Address" 
                        variant="outlined" 
                        size="small"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                        required = "true"
                        // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        FormHelperTextProps={{ style: { textAlign: 'center' } }}
                        helperText = { 
                          isFormSubmitted
                            ? isEmailValid
                                ? ''
                                : 'Please enter Valid Email Address eg:abc@gmail.com'
                            : ''    
                        }
                        error={isFormSubmitted && !isEmailValid}
                        />
                    </Typography>
                    <br/>
                    <FormControl 
                        style={{
                          width: '100%', 
                          maxWidth: '230px', 
                        }}
                        variant="outlined"
                        size="small"
                        value={password}
                        onChange={ (e) => setPassword(e.target.value)}
                        error={isFormSubmitted && !validatePassword(password)}
                        >
                        <InputLabel 
                            htmlFor="outlined-adornment-password" 
                            required   
                        >Password</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? 'text' : 'password'}
                          endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                    </FormControl>
                    {isFormSubmitted && !validatePassword(password) && 
                    (
                        <p style={{ color: '#d53d36', marginTop: '3px', fontSize:'small', width: '100%', maxWidth: '230px'   }} >
                          Password must be at least 3 characters long
                        </p>
                      )}
                    <br/> <br/>
                    <Typography variant="body2">
                        <TextField
                        
                        style={{
                          width: '100%', 
                          maxWidth: '230px', 
                        }}
                        id="outlined-password-input"
                        label="Confirm Password"
                        type="password"
                        autoComplete="off"
                        size="small"
                        required
                        value={confirmPass}
                        onChange={ (e) => setConfirmPass(e.target.value)}
                        FormHelperTextProps={{ style: { textAlign: 'center' } }}
                        helperText = { 
                          isFormSubmitted
                            ? isConfirmPassValid
                                ? ''
                                : 'Password and Confirm Password must be same'
                            : ''    
                        }
                        error={isFormSubmitted && !isConfirmPassValid}
                        />
                    </Typography> 
                    <br/><br/>
                    <Typography sx={{ fontSize: 'x-small',
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      marginBottom:'-20px'
                                    }} 
                        color="text.secondary">
                            Already have an Account ?        
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
                        <Link to="/login" className='link-style'>Login</Link>
                    </Button>
                    <br/>
                    <Button variant="contained"
                            onClick={handleSubmit}>
                      Create Account
                    </Button>
                    <br/><br/>
          </CardActions>
        </React.Fragment>
      );

      const backgroundContainer_1 =  {
        backgroundImage: `url(${poster})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        zindex: '0'
      }

      const backgroundContainer_2 =  {
        backgroundImage: `url(${reg_bg})`,
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
    <div className='Register' >
            {showImage ? 
                (
                    <div style={backgroundContainer_1} > </div>
                ) 
            : 
                (
                <div>
                    <div style={backgroundContainer_2} > </div>
                        <div  className='RegisterBlock'>
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
    </div>

  )
}

export default Register



