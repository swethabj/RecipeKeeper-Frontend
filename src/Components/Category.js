import React from 'react'
import './Category.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import menu_bg_empty from '../images/menu_bg_empty.png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Category() {
  return (
    <div className='Category'>
        <div className='CategoryLeft' 
             >
            <img src={menu_bg_empty} /> 
        </div>

        <div className='CategoryRight' >
             RIGHT 
        </div>
    </div>
  )
}

export default Category