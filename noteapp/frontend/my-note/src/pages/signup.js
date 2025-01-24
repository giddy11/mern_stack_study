import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate and Link
import "../styles/signup.css";

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use axios to send the data to the backend to save it
    console.log("User signed up successfully:", name, email, password);

    // After successful signup, navigate to login and log success message
    navigate('/login'); // This will redirect to the login page
    console.log("Signup Success! Redirecting to login...");
  };

  return (
    <div className="signup_container">
      <div className="signup_card">
        <h2 className="signup_title">Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              className="signup_input"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="signup_input"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**************"
              className="signup_input"
              required
            />
          </div>
          <div className="mb-4">
            <button type="submit" className="signup_btn">Signup</button>
            <p>
              Already have an account? <Link to="/login">Login</Link> {/* Use Link for navigation */}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}