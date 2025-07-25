import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaCar, FaUser, FaSignOutAlt } from 'react-icons/fa';

// functional component
const NavigationBar = () => {
    const navigate = useNavigate();
    let user = {};
    let isLoggedIn = false;

    // Retrieve user data from localStorage
    const userstring = localStorage.getItem('user');

    // Check if user is logged in
    if (userstring !== null && userstring !== undefined) {
        try {
            user = JSON.parse(userstring); //parsing json string to object
        } catch (error) {
            // Handle JSON parsing error
            console.error("Error parsing user data from localStorage:", error);
            localStorage.removeItem('user'); // Clear invalid user data
        }
    }
    // Check if token exists to determine login status
    // If token exists, user is logged in
    isLoggedIn = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
    }


    return (
        <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <FaCar className="me-2" style={{ color: '#667eea' }} />
                        VRS
                    </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cars">
                            <Nav.Link>Browse Cars</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/ContactUs">
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                    </Nav>

                    <Nav>
                        {isLoggedIn ? (
                            <NavDropdown title={<><FaUser className="me-1" />{user.name || 'User'}</>} id="user-dropdown">
                                <LinkContainer to={`/${user.role}/dashboard`}>
                                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleLogout}>
                                    <FaSignOutAlt className="me-1" />
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <>
                                <NavDropdown title="Sign In" id="signin-dropdown">
                                    <LinkContainer to="/user/login">
                                        <NavDropdown.Item>User Login</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/vendor/login">
                                        <NavDropdown.Item>Vendor Login</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/admin/login">
                                        <NavDropdown.Item>Admin Login</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>

                                <NavDropdown title="Sign Up" id="signup-dropdown">
                                    <LinkContainer to="/user/register">
                                        <NavDropdown.Item>User Registration</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/vendor/register">
                                        <NavDropdown.Item>Vendor Registration</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default NavigationBar;