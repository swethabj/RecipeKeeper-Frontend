import React from 'react'
import './Course.css'
import menu_bg from '../images/menu_bg.png'
import { Button } from '@mui/material'


function Course() {
  return (
    <div className='Course'>
        <img className="Course_mobile" src={menu_bg} />
        <img className="Course_website" src={menu_bg} />
        <div className='CourseBlock' >
          <br/><br/>
            <Button variant="contained" 
                style={{ background:"#EE4B2B",
                         fontSize:"small" ,
                         fontWeight:"bold",
                         fontFamily:"inherit"
                         }}>
                Breakfast
            </Button>
            <br/><br/>
            <Button variant="contained" 
                style={{ background:"#EE4B2B",
                         fontSize:"small" ,
                         fontWeight:"bold",
                         fontFamily:"inherit"
                         }}>
                Soup
            </Button>
            <br/><br/>
            <Button variant="contained" 
                style={{ background:"#EE4B2B",
                         fontSize:"small" ,
                         fontWeight:"bold",
                         fontFamily:"inherit"
                         }}>
                Quick Bites
            </Button>
            <br/><br/>
            <Button variant="contained" 
                style={{ background:"#EE4B2B",
                         fontSize:"small" ,
                         fontWeight:"bold",
                         fontFamily:"inherit"
                         }}>
                Main Course
            </Button>
            <br/><br/>
            <Button variant="contained" 
                style={{ background:"#EE4B2B",
                         fontSize:"small" ,
                         fontWeight:"bold",
                         fontFamily:"inherit"
                         }}>
                Side Course
            </Button>
            <br/><br/>
            <Button variant="contained" 
                style={{ background:"#EE4B2B",
                         fontSize:"small" ,
                         fontWeight:"bold",
                         fontFamily:"inherit"
                         }}>
                Desert
            </Button>
            <br/><br/>
            <Button variant="contained" 
                style={{ background:"#EE4B2B",
                         fontSize:"small" ,
                         fontWeight:"bold",
                         fontFamily:"inherit"
                         }}>
                Beverages
            </Button>
            <br/><br/>
            <Button variant="contained" 
                style={{ background:"#EE4B2B",
                         fontSize:"small" ,
                         fontWeight:"bold",
                         fontFamily:"inherit"
                         }}>
                Accompaniments
            </Button>
        </div>
    </div>
  )
}

export default Course


