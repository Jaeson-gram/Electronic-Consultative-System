// import { useContext } from "react";
// import { Form, Stack, Row, Col, Alert, Button } from "react-bootstrap";
// import { AuthContext } from "../context/AuthContext";


// const Login = () => {

//     const { loginUser, isLoginLoading, loginInfo, updateLoginInfo, loginError } = useContext(AuthContext);

//     return ( 
//         <>
//         <Form onSubmit={loginUser}>
//                 <Row className="pt-5" style={{justifyContent: "center", height: "100vh"}}>
//                     <Col xs={5}>
//                         <Stack gap={3}>
//                             <h2>Sign In</h2>

//                             <Form.Control type="email" placeholder="youremail@example.com" onChange={(event) => updateLoginInfo({...loginInfo, email: event.target.value})}/>
//                             <Form.Control type="password" placeholder="password" onChange={(event) => updateLoginInfo({...loginInfo, password: event.target.value})} />

//                             <Button className="bstn" variant="secondary" type="submit">
//                                 {
//                                     isLoginLoading ? "Signing you in.." : "Sign in"
//                                 }
//                             </Button>

//                             {
//                                 loginError?.error && ( <Alert variant="danger">{loginError?.message}</Alert> )
//                             }
                           
//                         </Stack>
//                     </Col>
//                 </Row>
//             </Form>  
//         </>
//      );
// }
 
// export default Login;

import React, { useContext, useState } from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button, Row, Col, Card, Alert, Image } from 'react-bootstrap';
import { FaBars, FaSearch, FaUser, FaSun, FaTimes, FaQuestion, FaBook, FaChalkboardTeacher, FaHeadset } from 'react-icons/fa';
import { AuthContext } from "../context/AuthContext";

// import "../assets/css/style.css"; // Assuming your new styles are in this file

const Login = () => {
    const { loginUser, isLoginLoading, loginInfo, updateLoginInfo, loginError } = useContext(AuthContext);

    return (
        <>
        <div className='loginPage'>
            <header className="header ">
                <section className="flex">
                    <a href="about.html" className="logo">Consultative System</a>
                    
                    <div className="icons">
                        <div id="menu-btn" className="fas fa-bars"></div>
                        <div id="search-btn" className="fas fa-search"></div>
                        <div id="user-btn" className="fas fa-user"></div>
                        <div id="toggle-btn" className="fas fa-sun"></div>
                    </div>
                </section>
            </header>

            {/* <div className="side-bar">
                <div id="close-btn">
                    <i className="fas fa-times"></i>
                </div>

                <div className="profile">
                    <img src="images/pic-1.jpg" className="image" alt="" />
                    <h3 className="name">Shaikh Anas</h3>
                    <p className="role">student</p>
                    <a href="profile.html" className="btn">view profile</a>
                </div>

                <nav className="navbar">
                    <a href="about.html"><i className="fas fa-question"></i><span>home</span></a>
                    <a href="courses.html"><i className="fas fa-book"></i><span>materials</span></a>
                    <a href="messages.html"><i className="fas fa-chalkboard-user"></i><span>messages</span></a>
                    <a href="counsellors.html"><i className="fas fa-chalkboard-user"></i><span>Counsellors</span></a>
                    <a href="contact.html"><i className="fas fa-headset"></i><span>contact us</span></a>
                </nav>
            </div> */}

            <section className="form-container">
                <form onSubmit={loginUser}>
                    <h3>Login Now</h3>

                    <p>Your Email <span>*</span></p>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="enter your email" 
                        required 
                        maxLength="50" 
                        className="box"
                        onChange={(event) => updateLoginInfo({...loginInfo, email: event.target.value})} 
                    />

                    <p>Your Password <span>*</span></p>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="enter your password" 
                        required 
                        maxLength="20" 
                        className="box"
                        onChange={(event) => updateLoginInfo({...loginInfo, password: event.target.value})} 
                    />

                    <input 
                        type="submit" 
                        value={isLoginLoading ? "Signing you in..." : "Login"} 
                        className="btn"
                    />

                    {loginError?.error && (
                        <div className="alert alert-danger">
                            {loginError.message}
                        </div>
                    )}
                </form>
            </section>

            <footer className="footer">
                Built with ❤ | ECS 2024
            </footer>
            </div>
        </>

    );
}

export default Login;
