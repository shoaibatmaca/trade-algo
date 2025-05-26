// // import { Link } from "react-router-dom";
// // import React, { useEffect, useState } from "react";
// // import "./styles/optionsAcademy.css";
// // import ProgressBarsDisplay from "../DashboardSidebarComp/ProgressBar";
// // import Course from "../DashboardSidebarComp/Course";

// // const OptionsAcademy = () => {
// //   const [courses, setCourses] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         const token = localStorage.getItem("accessToken");

// //         if (!token) {
// //           throw new Error("No access token found in localStorage");
// //         }

// //         const res = await fetch("https://valourwealthdjango-production.up.railway.app/courses/", {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //             "Content-Type": "application/json",
// //           },
// //         });

// //         if (!res.ok) {
// //           throw new Error(`HTTP error! status: ${res.status}`);
// //         }

// //         const data = await res.json();

// //         if (!Array.isArray(data)) {
// //           throw new Error("Invalid data format received.");
// //         }

// //         setCourses(data);
// //       } catch (error) {
// //         console.error("Failed to fetch courses:", error);
// //         setCourses([]);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchCourses();
// //   }, []);

// //   return (
// //     <div className="container my-4">
// //       <h3 className="academy-title">
// //         <strong>Fundamentals</strong>{" "}
// //         <span className="lesson-info">{courses.length} courses</span>
// //       </h3>

// //       <div className="row">
// //         {/* {loading ? (
// //           <p className="text-white">Loading courses...</p> */}
// //         ) : (
// //           courses.map((course, index) => (
// //             <div key={course.id} className={`col-md-3 mb-4 ${index !== 0 ? "blurred" : ""}`}>
// //               <div className="academy-card">
// //                 <div className="academy-card-content">
// //                   <h5 className="academy-title">{course.title}</h5>
// //                   <p className="academy-duration">{course.description?.slice(0, 60) ?? ""}</p>
// //                 </div>
// //                 <div className="academy-footer">
// //                   <Link to={`/academy/${course.id}`} className="academy-link">
// //                       View Details →
// //                   </Link>
// //                   {/* <a
// //                     href={`https://valourwealthdjango-production.up.railway.app/courses/${course.id}/levels/`}
// //                     className="academy-link"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                   >
// //                     View Details →
// //                   </a> */}
// //                 </div>
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>

// //       <ProgressBarsDisplay />
// //     </div>
// //   );
// // };

// // export default OptionsAcademy;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProgressBarsDisplay from "../DashboardSidebarComp/ProgressBar";
import "./styles/optionsAcademy.css";

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

        const res = await fetch(
          "https://valourwealthdjango-production.up.railway.app/courses/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

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
          <>
            {[...Array(4)].map((_, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div
                  className="shimmer-block"
                  style={{
                    height: "180px",
                    width: "100%",
                    borderRadius: "12px",
                  }}
                ></div>
              </div>
            ))}
          </>
        ) : (
          courses.map((course, index) => (
            <div
              key={course.id}
              className={`col-md-3 mb-4 ${index !== 0 ? "blurred" : ""}`}
            >
              <div className="academy-card">
                <div className="academy-card-content">
                  <h5 className="academy-title">{course.title}</h5>
                  <p className="academy-duration">
                    {course.description?.slice(0, 60) ?? ""}
                  </p>
                </div>
                <div className="academy-footer">
                  <Link to={`/academy/${course.id}`} className="academy-link">
                    View Details →
                  </Link>
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

// import axios from "axios";
// import { useEffect, useRef, useState } from "react";
// import thumbnail from "../DashboardSidebarComp/images/video_card-overlay.png";
// import "../DashboardSidebarComp/styles/OptionAcademyComp.css";

// const OptionsAcademy = () => {
//   const [activeTab, setActiveTab] = useState("livestream");
//   const [courses, setCourses] = useState([]);
//   const [selectedCourseId, setSelectedCourseId] = useState(null);
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const dropdownRef = useRef(null);

//   const accessToken = localStorage.getItem("accessToken");
//   const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
//     ? process.env.REACT_APP_API_URL
//     : process.env.REACT_APP_API_URL + "/";

//   const getCategory = () => {
//     if (activeTab === "livestream") return "Forex";
//     if (activeTab === "support") return "Crypto";
//     if (activeTab === "options-academy") return "Stock";
//     return "Forex";
//   };

//   const fetchCourses = async (category) => {
//     setLoading(true);
//     try {
//       const res = await axios.get(
//         `${API_BASE_URL}api/beginnerhub/courses/${category}/`,
//         {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         }
//       );
//       setCourses(res.data);
//       if (res.data.length > 0) {
//         setSelectedCourseId(res.data[0].id);
//         await fetchVideos(res.data[0].id);
//       } else {
//         setVideos([]);
//         setSelectedVideo(null);
//       }
//     } catch (err) {
//       console.error("Error fetching courses:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchVideos = async (courseId) => {
//     try {
//       const res = await axios.get(
//         `${API_BASE_URL}api/beginnerhub/courses/${courseId}/videos/`,
//         {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         }
//       );
//       setVideos(res.data);
//       if (res.data.length > 0) setSelectedVideo(res.data[0]);
//     } catch (err) {
//       console.error("Error fetching videos:", err);
//     }
//   };

//   useEffect(() => {
//     fetchCourses(getCategory());
//   }, [activeTab]);

//   const handleTabChange = (tabId) => setActiveTab(tabId);
//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
//   const handleCourseSelect = (course) => {
//     setSelectedCourseId(course.id);
//     fetchVideos(course.id);
//     setIsDropdownOpen(false);
//   };

//   const selectedCourse = courses.find((c) => c.id === selectedCourseId);

//   return (
//     <div className="options-academy-container">
//       <div className="nav-container">
//         <ul className="nav nav-tabs">
//           <li className="nav-item">
//             <button
//               className={`nav-link ${
//                 activeTab === "livestream" ? "active" : ""
//               }`}
//               onClick={() => handleTabChange("livestream")}
//             >
//               Forex
//             </button>
//           </li>
//           <li className="nav-item">
//             <button
//               className={`nav-link ${activeTab === "support" ? "active" : ""}`}
//               onClick={() => handleTabChange("support")}
//             >
//               Crypto
//             </button>
//           </li>
//           <li className="nav-item">
//             <button
//               className={`nav-link ${
//                 activeTab === "options-academy" ? "active" : ""
//               }`}
//               onClick={() => handleTabChange("options-academy")}
//             >
//               Stock
//             </button>
//           </li>
//         </ul>
//         <div className="tab-indicator"></div>
//       </div>

//       <div className="tab-content-academy">
//         <div className="options-academy-content">
//           {loading ? (
//             <div className="row">
//               <div className="col-md-7">
//                 <div
//                   className="shimmer-block"
//                   style={{ height: "400px", borderRadius: "16px" }}
//                 ></div>
//               </div>
//               <div className="col-md-5">
//                 {[...Array(3)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="shimmer-block"
//                     style={{
//                       height: "100px",
//                       marginBottom: "1rem",
//                       borderRadius: "16px",
//                     }}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div className="row">
//               <div className="col-md-7">
//                 <div className="video-container-options">
//                   <div className="video-wrapper-options">
//                     <div className="ratio ratio-16x9">
//                       {selectedVideo ? (
//                         <video controls className="w-100 h-100">
//                           <source
//                             src={selectedVideo.video_url}
//                             type="video/mp4"
//                           />
//                         </video>
//                       ) : (
//                         <p className="text-white">No video selected</p>
//                       )}
//                     </div>
//                     {selectedVideo && (
//                       <div className="fundamentals-tag">
//                         {selectedVideo.title}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 {selectedVideo && (
//                   <div className="tutorial-details">
//                     <h4 className="tutorial-heading">Tutorial Description</h4>
//                     <p className="tutorial-desc">{selectedVideo.description}</p>
//                   </div>
//                 )}
//               </div>

//               <div className="col-md-5">
//                 <div className="playlist-section">
//                   <div className="playlist-header">
//                     <h4>Current Playlist</h4>
//                     <div className="custom-dropdown" ref={dropdownRef}>
//                       <button
//                         className="btn btn-outline-primary dropdown-toggle"
//                         onClick={toggleDropdown}
//                       >
//                         {selectedCourse ? selectedCourse.title : getCategory()}
//                       </button>
//                       {isDropdownOpen && (
//                         <ul className="custom-dropdown-menu">
//                           {courses.map((course) => (
//                             <li key={course.id}>
//                               <button
//                                 className="custom-dropdown-item"
//                                 onClick={() => handleCourseSelect(course)}
//                               >
//                                 {course.title}
//                               </button>
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   </div>

//                   <div className="playlist-items">
//                     {videos.map((video) => (
//                       <div
//                         key={video.id}
//                         className={`playlist-item ${
//                           selectedVideo?.id === video.id ? "now-playing" : ""
//                         }`}
//                         onClick={() => setSelectedVideo(video)}
//                       >
//                         <div className="playlist-thumbnail">
//                           <img
//                             src={video.thumbnail_url || thumbnail}
//                             alt="Thumbnail"
//                           />
//                           {selectedVideo?.id === video.id && (
//                             <div className="playing-tag">Now Playing</div>
//                           )}
//                         </div>
//                         <div className="playlist-info">
//                           <div className="video-title-card">{video.title}</div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OptionsAcademy;
