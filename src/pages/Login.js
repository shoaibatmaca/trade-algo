// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/global.css';
// import websiteLogo from "../assets/images/Valour_Wealth.png"

// function Login() {
//   return (
//     <div className="login-container p-4">
//       <div className="login-box">
//         <div className="logo-web">
//           <img src={websiteLogo} alt="Website Logo" className="website-logo" />

//         </div>
//         <h2>Login</h2>
//         <form>
//           <div className="input-group">
//             <label>Email</label>
//             <input type="email" placeholder="Enter your email" required />
//           </div>
//           <div className="input-group">
//             <label>Password</label>
//             <input type="password" placeholder="Enter your password" required />
//           </div>
//           <div className="remember-forgot">
//             <label>
//               <input type="checkbox" /> Remember Me
//             </label>
//             <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
//           </div>
//           <button className="login-btn" type='submit'>
//               <a href="/dashboard" className="text-decoration-none text-white">Login</a>
//             </button>
//         </form>

//         <p className="or-text">Or login with</p>
//         <div className="social-login">
//           <button className="google"><i className="fab fa-google"></i> </button>
//           <button className="microsoft"><i className="fab fa-microsoft"></i> </button>
//           <button className="apple"><i className="fab fa-apple"></i></button>
//         </div>

//         <Link to="/" className="back-home">Back to Home</Link>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css";
import websiteLogo from "../assets/images/Valour_Wealth.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Prevent multiple clicks
  const navigate = useNavigate();

  // ✅ Update with your backend API URL
  const API_URL = "https://5402-119-155-34-189.ngrok-free.app/api/token/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before a new request
    setLoading(true);

    try {
      console.log("🔵 Sending login request..."); // Debugging log

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      console.log("🟡 Raw Response:", response); // Log full response

      const data = await response.json();
      console.log("🟢 Response Data:", data); // Log API response

      if (response.ok) {
        console.log("✅ Login Successful:", data);
        localStorage.setItem("authToken", data.token); // Store token
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        console.error("🔴 Login Error:", data); 
        setError(data.detail || "Invalid credentials. Try again.");
      }
    } catch (err) {
      console.error("❌ Network Error:", err);
      setError("Network error. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container p-4">
      <div className="login-box">
        <div className="logo-web">
          <img src={websiteLogo} alt="Website Logo" className="website-logo" />
        </div>

        <h2>Login</h2>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <Link to="/forgot-password" className="forgot-link">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="or-text">Or login with</p>
        <div className="social-login">
          <button className="google">
            <i className="fab fa-google"></i>{" "}
          </button>
          <button className="microsoft">
            <i className="fab fa-microsoft"></i>{" "}
          </button>
          <button className="apple">
            <i className="fab fa-apple"></i>
          </button>
        </div>

        <Link to="/" className="back-home">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Login;
