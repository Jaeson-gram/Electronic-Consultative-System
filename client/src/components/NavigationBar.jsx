import { useContext } from "react";
import { Navbar, Container, Nav, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.png";


const NavigationBar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    // Handle logout with delay to ensure state is updated before redirect
    const handleLogout = () => {
        logoutUser();
        // Delay the redirect to ensure logout processing is complete
        setTimeout(() => {
            window.location.href = '/login';
        }, 100); // Adjust the timeout if needed
    };

    return (
        <Navbar bg="darkslategray" className="mb-3" style={{ height: "3.7rem", border: "1px solid gray" }}>
            <Container>
                <Link to={"/"} className="link-light text-decoration-none">
                    <img src={logo} alt="logo" height="90"/>
                </Link>
                {user && <span className="text-warning">Logged in as {user?.name}</span>}
                <Nav>
                    <Stack direction="horizontal" gap={5}>
                        {!user && (
                            <>
                                <Link to={"/Login"} className="link-light text-decoration-none">Login</Link>
                                <Link to={"/register"} className="link-light text-decoration-none">Register</Link>
                            </>
                        )}
                        {user && (
                            <button onClick={handleLogout} className="link-light btn btn-link">Logout</button>
                            // Changed from <Link> to <button> for better handling of click actions
                        )}
                    </Stack>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
