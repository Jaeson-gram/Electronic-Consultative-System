import React from "react";
import { Link } from 'react-router-dom';
import Chat from "./Chat"; // Import the Chat component
import profile from "../assets/pic-1.jpg";
import NavigationBar from "../components/NavigationBar";

const MessagesPage = () => {
  return (
    <div>
      <header className="header">
        <section className="flex">
          <Link to="/about" className="logo">Consultative System</Link>
          {/* <NavigationBar /> */}
          {/* Header contents */}
        </section>
      </header>

      <div className="side-bar">
        <div id="close-btn">
          <i className="fas fa-times" />
        </div>
        <div className="profile">
          <img src={profile} className="image" alt="" />
          <h3 className="name">shaikh anas</h3>
          <p className="role">student</p>
          <Link to="/profile" className="btn">view profile</Link>
        </div>
        <nav className="navbar">
          <Link to="/about"><i className="fas fa-home" /><span>Home</span></Link>
          <Link to="/counsellors"><i className="fas fa-chalkboard-user" /><span>Counsellors</span></Link>
          <Link to="/messages"><i className="fas fa-message" /><span>Messages</span></Link>
          <Link to="/courses"><i className="fas fa-book" /><span>Materials</span></Link>
          <Link to="/contact"><i className="fas fa-headset" /><span>Contact Us</span></Link>
        </nav>
      </div>

      <section className="chat-container">
        <Chat />
      </section>

      <footer className="footer">
      Built with ❤ | ECS 2024
      </footer>
    </div>
  );
};

export default MessagesPage;
