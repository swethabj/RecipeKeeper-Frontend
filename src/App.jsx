import './App.css'
//import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register'
import Login from './Components/Login'
import Course from './Components/Course'
import Navbar from './Components/Navbar'
import Category from './Components/Category'
import Test from './Components/Test'


function App() {

  // const [data, setData] = useState([{}])

  // useEffect(() => {
  //   fetch("/members").then(
  //       res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // },[])

  const NavbarWithCourse = () => (
    <>
      <Navbar />
      <Course />
    </>
  );

  return (
    <body > 
    <div className='my_app'  >
    {/* 
        {(typeof data.members === 'undefined') ? (
          <p>Loading ... </p>
        ):(
          data.members.map((member, i) => (
            <p key={i}> {member} </p>
          ))
        )}
    */}

    <Router>
        <Routes>
          {/* Define your routes using the Route component */}
          <Route path="/" element={ <Register /> }  />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={ <Login /> } />
          <Route path="/course" element={ <NavbarWithCourse/>  } />
          <Route path="/test" element={ <Test /> }  />
        </Routes>
    </Router> 

    </div>
    </body>
  )
}

export default App