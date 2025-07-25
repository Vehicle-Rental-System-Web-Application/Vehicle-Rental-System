import React from 'react';

// Import layout components from React-Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// Import icons from react-icons
import { FaCar, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Footer component
const Footer = () => {
  return (
    // Main footer tag with dark background and padding
    <footer className="footer bg-dark text-light py-4">
      {/* Bootstrap container for padding and layout */}
      <Container>

        {/* Row to create 3 columns side by side */}
        <Row>

          {/* Column 1: Brand and about */}
          <Col md={4}>
            <h5>
              <FaCar className="me-2" /> RentWheels {/* Car icon + brand name */}
            </h5>
            <p>Trusted partner for vehicle rentals.</p>
          </Col>

          {/* Column 2: Navigation links */}
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled"> {/* Remove default list bullets */}
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/cars" className="text-light text-decoration-none">Browse Cars</a></li>
              <li><a href="/user/register" className="text-light text-decoration-none">Register</a></li>
              <li><a href="/user/login" className="text-light text-decoration-none">Login</a></li>
            </ul>
          </Col>

          {/* Column 3: Contact details */}
          <Col md={4}>
            <h5>Contact</h5>
            {/* Each line shows an icon and corresponding info */}
            <p><FaPhone className="me-2" /> +1 (555) 123-4567</p>
            <p><FaEnvelope className="me-2" /> info@vrs.com</p>
            <p><FaMapMarkerAlt className="me-2" /> 123 Main St, City</p>
          </Col>
        </Row>

        {/* Horizontal line to separate top and bottom */}
        <hr className="my-3" />

        {/* Footer bottom: copyright */}
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 RentWheels. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
