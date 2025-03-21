import {Route, Routes, Navigate} from "react-router-dom";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About.jsx"
import Contact from "./pages/Contact"
import Courses from "./pages/Courses"; // Uncomment this line
import Counsellors from "./pages/Counsellors"; // Add this import
import Profile from "./pages/Profile"


import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ChatContextProvider } from "./context/chatContext";
import MessagesPage from "./pages/MessagePage";


function App() {
  const { user } = useContext(AuthContext);

  // Log to ensure user is properly available before passing to ChatContextProvider
  console.log("User in App:", user);

  return (
    <ChatContextProvider user={user}>
      <Container>
        <Routes>
          <Route path="/" element={<Profile/>} />
          <Route path="/register" element={user ? <MessagesPage /> : <Login />} />
          <Route path="/login" element={user ? <MessagesPage /> : <Login />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/counsellors" element={<Counsellors />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
    </ChatContextProvider>
  );
}

export default App
