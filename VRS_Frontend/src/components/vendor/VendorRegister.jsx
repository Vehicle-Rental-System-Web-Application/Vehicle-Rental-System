import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//useNavigate: Helps you redirect to another page after successful registration.
//import "./VendorRegister.css";

const VendorRegister =() =>{
  //formdata: stores values from all the input fields.
  //setFormData: Used to update those values.
  //errors: Stores validation error messages (if any).
  cont [FormData, setFormData] = useState({
    name:"",
    email: "",
    mobile : "",
    businessName: "",
    BusinessAddress : "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});//to  store validation errors messeges.
  const navigate = useNavigate();// for navigate to user login.

  // to handle input changes.

  const handlechange = (e) =>{
    setFormData({...FormData, [e.target.name]: e.target.value});  
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
    const handleSubmit = (e) => {
    //e.preventDefault() stops the page from reloading.
    e.preventDefault();

    if (!validateForm()) return;
    //If valid:
    //Prints form data to console (you’ll replace this with API call later).
    // Later we will replace this with backend API call
    console.log("Vendor registered:", formData);
    //Shows alert.
    alert("Registration successful");
    //Redirects to /vendor/login.
    navigate("/vendor/login");
  };
  
  // JSX to render the registration form.
  //The UI starts here.

  //We create a <form> and attach the handleSubmit function to its submit event.

  //It includes input fields for name, email, mobile number, business name, business address, password, and confirm password.

  //	handleChange(): Updates form values when user types
   return (
    <div className="vendor-register-container">
      <h2>Vendor Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <p className="error">{errors.mobile}</p>}

        <input
          type="text"
          name="businessName"
          placeholder="Business Name"
          value={formData.businessName}
          onChange={handleChange}
        />
        {errors.businessName && <p className="error">{errors.businessName}</p>}

        <input
          type="text"
          name="businessAddress"
          placeholder="Business Address"
          value={formData.businessAddress}
          onChange={handleChange}
        />
        {errors.businessAddress && <p className="error">{errors.businessAddress}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default VendorRegister;