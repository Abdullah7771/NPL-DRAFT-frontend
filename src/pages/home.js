import React from 'react'

import img1 from "../images/end.jpg";
import nawait from "../images/nawait.png";
import npl from "../images/npl3.jpg";
import Button from 'react-bootstrap/Button';
import { Router, Link, Outlet } from 'react-router-dom';
const Home = () => {
      return (

            <div>
                  <img src={img1} style={{ backgroundSize: 'cover' }} />

                  <div className="centered" style={{ position: 'absolute', top: '45%', left: '29%' }}>

                        <h1 style={{ color: "white" }}>WELCOME TO NPL DRAFT 2023</h1>
                        <br />

                        <Link to="/teams"> <Button variant="primary" style={{ width: '150px' }}>Start Now</Button></Link>


                  </div>

                  <img src={npl} style={{ position: 'absolute', top: '6px', left: '5px', width: "150px" }} />
                  <img src={nawait} style={{ position: 'absolute', top: '6px', right: '5px', width: "80px" }} />

                  <Outlet />
            </div>


      )
}

export default Home