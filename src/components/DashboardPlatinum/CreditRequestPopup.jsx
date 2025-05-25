import axios from "axios";
import { useState } from "react";

const CreditRequestPopup = ({ show, onClose }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [credits, setCredits] = useState("");
  const [message, setMessage] = useState("");
  const accessToken = localStorage.getItem("accessToken");

  const handleSubmit = async (e) => {
    e.preventDefault();s
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}api/request-call-credits/`,
        { email, phone, credits },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      setMessage("Request submitted!");
      setEmail("");
      setPhone("");
      setCredits("");
    } catch (err) {
      setMessage(err.response?.data?.error || "Submission failed.");
    }
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h4>Request More Call Credits</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Credits (e.g. 10, 20, 30)"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CreditRequestPopup;
