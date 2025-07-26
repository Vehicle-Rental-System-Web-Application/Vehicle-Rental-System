import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";


import { useNavigate ,Link} from "react-router-dom";
//useNavigate: Helps you redirect to another page after successful registration.

 
const VendorRegister =() =>{
  //formData: stores values from all the input fields.
  //setformData: Used to update those values.
  //errors: Stores validation error messages (if any).
  const [formData, setformData] = useState({
    name:"",
    email: "",
    mobile : "",
    businessName: "",
    BusinessAddress : "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});//to  store validation errors messeges.
  
 const [loading, setLoading] = useState(false);

  const navigate = useNavigate();// for navigate to user login.

  // to handle input changes.

  const handleChange = (e) =>{
    setformData({...formData, [e.target.name]: e.target.value});  
  }

  const validationForm = () =>{
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email";

    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (!mobileRegex.test(formData.mobile)) newErrors.mobile = "Enter 10 digit number";

    if (!formData.businessName) newErrors.businessName = "Business Name is required";
    if (!formData.businessAddress) newErrors.businessAddress = "Business Address is required";

    if (!formData.password) newErrors.password = "Password is required";
    //password must be at least 4 characters long.
    else if (formData.password.length < 4) newErrors.password = "Password too short";

    // to check if password and confirm password match.
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // when register button is clicked.
    const handleSubmit =async  (e) => {
    //e.preventDefault() stops the page from reloading.
    e.preventDefault();

    if (!validationForm()) return;
    //If valid:

    setLoading(true);

    //Prints form data to console (you’ll replace this with API call later).
    // Later we will replace this with backend API call
 
    setTimeout(() => {
      alert("Vendor registered successfully!");
      setLoading(false);
      navigate("/vendor/login");
    }, 1500);
  };
  
  // JSX to render the registration form.
  //The UI starts here.

  //We create a <form> and attach the handleSubmit function to its submit event.

  //It includes input fields for name, email, mobile number, business name, business address, password, and confirm password.

  //	handleChange(): Updates form values when user types
   return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="form-container">
            <Card>
              <Card.Header className="text-center">
                <h3>Vendor Registration</h3>
                <p className="text-muted">Join our platform to list your vehicles</p>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                          placeholder="Enter your full name"
                        />
                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          placeholder="Enter your email"
                        />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          isInvalid={!!errors.mobile}
                          placeholder="Enter your mobile number"
                        />
                        <Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          isInvalid={!!errors.businessName}
                          placeholder="Enter your business name"
                        />
                        <Form.Control.Feedback type="invalid">{errors.businessName}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Business Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleChange}
                      isInvalid={!!errors.businessAddress}
                      placeholder="Enter your business address"
                    />
                    <Form.Control.Feedback type="invalid">{errors.businessAddress}</Form.Control.Feedback>
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                          placeholder="Enter your password"
                        />
                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          isInvalid={!!errors.confirmPassword}
                          placeholder="Confirm your password"
                        />
                        <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button type="submit" variant="primary" className="w-100 mb-3" disabled={loading}>
                    {loading ? "Creating Account..." : "Register as Vendor"}
                  </Button>
                </Form>

                <div className="text-center">
                  <p>
                    Already have an account? <Link to="/vendor/login">Login here</Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VendorRegister;