import * as React from 'react';
import './Navbar.css';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';

function Navbar() {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.20),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.45),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));


  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color:'white',
    marginTop:'11px',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '16ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


  return (

    
      <div className='Navbar'>
        <div className='NavbarLeft'>
          {/* Mobile */}
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs:'block', sm: 'none' } }}
            >
                <div className='NavbarLeftOption' > 
                    <MenuIcon fontSize="large"  />
                </div>
            </Typography>

            {/* Website */}
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <div className='NavbarLeftOption' > Course </div>
            </Typography> 
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <div className='NavbarLeftOption' > Category </div>
            </Typography>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <div className='NavbarLeftOption' > AddRecipe </div>
            </Typography>
        </div>


        <div className='NavbarRight'>
          {/* Mobile */}
          <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs:'none', sm: 'none' } }}
            >
                <div className='NavbarRightOption' > show search in hamberg </div>
          </Typography>
          <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: {  xs:'none', sm: 'none' } }}
            >
                <div className='NavbarRightOption' > show search in hamberg </div>
            </Typography>

            {/* Website */}
          <Search  >
            <SearchIconWrapper >
               <SearchIcon style={{color:"white"}}  sx={{ flexGrow: 1, display: { xs:'none', sm: 'block' }}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="search recipe here..."
             inputProps={{ 'aria-label': 'search' }}
             sx={{ flexGrow: 1, display: { xs:'none', sm: 'block' }, textAlign:'center' }}
            />
         </Search>

         <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs:'none', sm: 'block' } }}
            >
                <div className='NavbarRightOption' > 
                    <LogoutIcon fontSize="large"/>
                </div>
            </Typography>
        </div>
      
      </div>
    
    // <Box sx={{ flexGrow: 1 }} >
    //   <AppBar position="static" style={{backgroundColor:"#FF2400"}}>
    //     <Toolbar>

    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="open drawer"
    //         sx={{ mr: 2 }}
    //       >
    //         <MenuIcon />
    //       </IconButton>

    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="div"
    //         sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
    //       >
    //         My Recipe
    //       </Typography>

    //       <Search>
    //         <SearchIconWrapper>
    //           <SearchIcon />
    //         </SearchIconWrapper>
    //         <StyledInputBase
    //           placeholder="Search…"
    //           inputProps={{ 'aria-label': 'search' }}
    //         />
    //       </Search>


    //     </Toolbar>
    //   </AppBar>
    // </Box>
  )
}

export default Navbar