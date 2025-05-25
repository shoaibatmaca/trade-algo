import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./styles/optionsAcademy.css";
import ProgressBarsDisplay from "../DashboardSidebarComp/ProgressBar";
import Course from "../DashboardSidebarComp/Course";

const OptionsAcademy = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("accessToken");


  
        if (!token) {
          throw new Error("No access token found in localStorage");
        }
  
        const res = await fetch("https://valourwealthdjango-production.up.railway.app/courses/", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
  
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
  
        const data = await res.json();
  
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format received.");
        }
  
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCourses();
  }, []);
  
  return (
    <div className="container my-4">
      <h3 className="academy-title">
        <strong>Fundamentals</strong>{" "}
        <span className="lesson-info">{courses.length} courses</span>
      </h3>

      <div className="row">
        {loading ? (
          <p className="text-white">Loading courses...</p>
        ) : (
          courses.map((course, index) => (
            <div key={course.id} className={`col-md-3 mb-4 ${index !== 0 ? "blurred" : ""}`}>
              <div className="academy-card">
                <div className="academy-card-content">
                  <h5 className="academy-title">{course.title}</h5>
                  <p className="academy-duration">{course.description?.slice(0, 60) ?? ""}</p>
                </div>
                <div className="academy-footer">
                  <Link to={`/academy/${course.id}`} className="academy-link">
                      View Details →
                  </Link>
                  {/* <a
                    href={`https://valourwealthdjango-production.up.railway.app/courses/${course.id}/levels/`}
                    className="academy-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details →
                  </a> */}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <ProgressBarsDisplay />
    </div>
  );
};

export default OptionsAcademy;


















// ?/////////


// const [userData, setUserData] = useState(null);
// const [error, setError] = useState(null);
// const accessToken = localStorage.getItem("accessToken");

// // Use environment variable for API base URL
// const API_BASE_URL = process.env.REACT_APP_API_URL; // e.g. https://valourwealthdjango-production.up.railway.app/
// // Updated user data endpoint
// const USER_API_URL = `${API_BASE_URL}api/user/`;

{/* <div className="col-auto user_info">
                <img src={user_logo} alt="Profile" className="rounded-circle" width="40" height="40" />
                <div className='username_data'>
                  <h5 className={`mb-0 ${darkMode ? 'text-white' : ''}`}>{userData ? userData.username : 'Valourwealth Platform'}</h5>
                  <p className={`mb-0 ${darkMode ? 'text-white' : ''}`}>Premium Member</p> */}