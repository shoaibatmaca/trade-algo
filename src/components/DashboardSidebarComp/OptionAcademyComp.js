// // import axios from "axios";
// // import { useEffect, useRef, useState } from "react";
// // import thumbnail from "../DashboardSidebarComp/images/video_card-overlay.png";
// // import "../DashboardSidebarComp/styles/OptionAcademyComp.css";

// // const OptionsAcademy = () => {
// //   const [activeTab, setActiveTab] = useState("options-academy");
// //   const [courses, setCourses] = useState([]);
// //   const [selectedCourseId, setSelectedCourseId] = useState(null);
// //   const [videos, setVideos] = useState([]);
// //   const [selectedVideo, setSelectedVideo] = useState(null);
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const dropdownRef = useRef(null);

// //   const accessToken = localStorage.getItem("accessToken");
// //   const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
// //     ? process.env.REACT_APP_API_URL
// //     : process.env.REACT_APP_API_URL + "/";

// //   const getCategory = () => {
// //     if (activeTab === "options-academy") return "Stock";
// //     if (activeTab === "livestream") return "Forex";
// //     if (activeTab === "support") return "Crypto";
// //     return "Stock";
// //   };

// //   const fetchCourses = async (category) => {
// //     try {
// //       const res = await axios.get(
// //         `${API_BASE_URL}api/beginnerhub/courses/${category}/`,
// //         {
// //           headers: { Authorization: `Bearer ${accessToken}` },
// //         }
// //       );
// //       setCourses(res.data);
// //       if (res.data.length > 0) {
// //         const firstCourse = res.data[0];
// //         setSelectedCourseId(firstCourse.id);
// //         fetchVideos(firstCourse.id);
// //       } else {
// //         setVideos([]);
// //         setSelectedVideo(null);
// //       }
// //     } catch (err) {
// //       console.error("Error fetching courses:", err);
// //     }
// //   };

// //   const fetchVideos = async (courseId) => {
// //     try {
// //       const res = await axios.get(
// //         `${API_BASE_URL}api/beginnerhub/courses/${courseId}/videos/`,
// //         {
// //           headers: { Authorization: `Bearer ${accessToken}` },
// //         }
// //       );
// //       setVideos(res.data);
// //       if (res.data.length > 0) setSelectedVideo(res.data[0]);
// //     } catch (err) {
// //       console.error("Error fetching videos:", err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchCourses(getCategory());
// //   }, [activeTab]);

// //   const handleTabChange = (tabId) => {
// //     setActiveTab(tabId);
// //   };

// //   const toggleDropdown = () => {
// //     setIsDropdownOpen(!isDropdownOpen);
// //   };

// //   const handleCourseClick = (courseId) => {
// //     setSelectedCourseId(courseId);
// //     fetchVideos(courseId);
// //   };

// //   return (
// //     <div className="options-academy-container">
// //       <div className="nav-container">
// //         <ul className="nav nav-tabs">
// //           <li className="nav-item">
// //             <button
// //               className={`nav-link ${
// //                 activeTab === "options-academy" ? "active" : ""
// //               }`}
// //               onClick={() => handleTabChange("options-academy")}
// //             >
// //               Stock
// //             </button>
// //           </li>
// //           <li className="nav-item">
// //             <button
// //               className={`nav-link ${
// //                 activeTab === "livestream" ? "active" : ""
// //               }`}
// //               onClick={() => handleTabChange("livestream")}
// //             >
// //               Forex
// //             </button>
// //           </li>
// //           <li className="nav-item">
// //             <button
// //               className={`nav-link ${activeTab === "support" ? "active" : ""}`}
// //               onClick={() => handleTabChange("support")}
// //             >
// //               Crypto
// //             </button>
// //           </li>
// //         </ul>
// //         <div className="tab-indicator"></div>
// //       </div>

// //       <div className="tab-content-academy">
// //         <div className="options-academy-content">
// //           <div className="row">
// //             <div className="col-md-7">
// //               <div className="video-container-options">
// //                 <div className="video-wrapper-options">
// //                   <div className="ratio ratio-16x9">
// //                     {selectedVideo ? (
// //                       <video controls className="w-100 h-100">
// //                         <source
// //                           src={selectedVideo.video_url}
// //                           type="video/mp4"
// //                         />
// //                       </video>
// //                     ) : (
// //                       <p className="text-white">No video selected</p>
// //                     )}
// //                   </div>
// //                   {selectedVideo && (
// //                     <div className="fundamentals-tag">
// //                       {selectedVideo.title}
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //               {selectedVideo && (
// //                 <div className="tutorial-details">
// //                   <h4 className="tutorial-heading">Tutorial Description</h4>
// //                   <p className="tutorial-desc">{selectedVideo.description}</p>
// //                 </div>
// //               )}
// //             </div>

// //             <div className="col-md-5">
// //               <div className="playlist-section">
// //                 <div className="playlist-header">
// //                   <h4>Current Playlist</h4>
// //                   <div className="custom-dropdown" ref={dropdownRef}>
// //                     <button
// //                       className="btn btn-outline-primary dropdown-toggle"
// //                       type="button"
// //                       onClick={toggleDropdown}
// //                     >
// //                       {getCategory()}
// //                     </button>
// //                   </div>
// //                 </div>

// //                 <div className="playlist-items">
// //                   {courses.map((course) => (
// //                     <div
// //                       key={course.id}
// //                       className={`playlist-item ${
// //                         course.id === selectedCourseId ? "now-playing" : ""
// //                       }`}
// //                       onClick={() => handleCourseClick(course.id)}
// //                     >
// //                       <div className="playlist-thumbnail">
// //                         <img src={thumbnail} alt="Thumbnail" />
// //                         <div className="course-tag">
// //                           {course.category} Course
// //                         </div>
// //                         <div className="academy-tag">Options Academy</div>
// //                         {course.id === selectedCourseId && (
// //                           <div className="playing-tag">Now Playing</div>
// //                         )}
// //                       </div>
// //                       <div className="playlist-info">
// //                         <div className="video-title-card">{course.title}</div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {videos.length > 0 && (
// //                   <>
// //                     <h4 className="mt-4">Videos</h4>
// //                     <div className="playlist-items">
// //                       {videos.map((video) => (
// //                         <div
// //                           key={video.id}
// //                           className={`playlist-item ${
// //                             selectedVideo?.id === video.id ? "now-playing" : ""
// //                           }`}
// //                           onClick={() => setSelectedVideo(video)}
// //                         >
// //                           <div className="playlist-thumbnail">
// //                             <img
// //                               src={video.thumbnail_url || thumbnail}
// //                               alt="Thumbnail"
// //                             />
// //                             {selectedVideo?.id === video.id && (
// //                               <div className="playing-tag">Now Playing</div>
// //                             )}
// //                           </div>
// //                           <div className="playlist-info">
// //                             <div className="video-title-card">
// //                               {video.title}
// //                             </div>
// //                           </div>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default OptionsAcademy;

// // OptionsAcademy.jsx (dropdown now lists multiple courses per tab)
// import axios from "axios";
// import { useEffect, useRef, useState } from "react";
// import thumbnail from "../DashboardSidebarComp/images/video_card-overlay.png";
// import "../DashboardSidebarComp/styles/OptionAcademyComp.css";

// const OptionsAcademy = () => {
//   const [activeTab, setActiveTab] = useState("options-academy");
//   const [courses, setCourses] = useState([]);
//   const [selectedCourseId, setSelectedCourseId] = useState(null);
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const accessToken = localStorage.getItem("accessToken");
//   const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
//     ? process.env.REACT_APP_API_URL
//     : process.env.REACT_APP_API_URL + "/";

//   const getCategory = () => {
//     if (activeTab === "options-academy") return "Stock";
//     if (activeTab === "livestream") return "Forex";
//     if (activeTab === "support") return "Crypto";
//     return "Stock";
//   };

//   const fetchCourses = async (category) => {
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
//         fetchVideos(res.data[0].id);
//       } else {
//         setVideos([]);
//         setSelectedVideo(null);
//       }
//     } catch (err) {
//       console.error("Error fetching courses:", err);
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

//   const handleTabChange = (tabId) => {
//     setActiveTab(tabId);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

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
//                 activeTab === "options-academy" ? "active" : ""
//               }`}
//               onClick={() => handleTabChange("options-academy")}
//             >
//               Stock
//             </button>
//           </li>
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
//         </ul>
//         <div className="tab-indicator"></div>
//       </div>

//       <div className="tab-content-academy">
//         <div className="options-academy-content">
//           <div className="row">
//             <div className="col-md-7">
//               <div className="video-container-options">
//                 <div className="video-wrapper-options">
//                   <div className="ratio ratio-16x9">
//                     {selectedVideo ? (
//                       <video controls className="w-100 h-100">
//                         <source
//                           src={selectedVideo.video_url}
//                           type="video/mp4"
//                         />
//                       </video>
//                     ) : (
//                       <p className="text-white">No video selected</p>
//                     )}
//                   </div>
//                   {selectedVideo && (
//                     <div className="fundamentals-tag">
//                       {selectedVideo.title}
//                     </div>
//                   )}
//                 </div>
//               </div>
//               {selectedVideo && (
//                 <div className="tutorial-details">
//                   <h4 className="tutorial-heading">Tutorial Description</h4>
//                   <p className="tutorial-desc">{selectedVideo.description}</p>
//                 </div>
//               )}
//             </div>

//             <div className="col-md-5">
//               <div className="playlist-section">
//                 <div className="playlist-header">
//                   <h4>Current Playlist</h4>
//                   <div className="custom-dropdown" ref={dropdownRef}>
//                     <button
//                       className="btn btn-outline-primary dropdown-toggle"
//                       type="button"
//                       onClick={toggleDropdown}
//                     >
//                       {selectedCourse ? selectedCourse.title : getCategory()}
//                     </button>
//                     {isDropdownOpen && (
//                       <ul className="custom-dropdown-menu">
//                         {courses.map((course) => (
//                           <li key={course.id}>
//                             <button
//                               className="custom-dropdown-item"
//                               onClick={() => handleCourseSelect(course)}
//                             >
//                               {course.title}
//                             </button>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 </div>

//                 {videos.length > 0 && (
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
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OptionsAcademy;

// OptionsAcademy.jsx (tab order changed to: Forex, Crypto, then Stock)
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import thumbnail from "../DashboardSidebarComp/images/video_card-overlay.png";
import "../DashboardSidebarComp/styles/OptionAcademyComp.css";

const OptionsAcademy = () => {
  const [activeTab, setActiveTab] = useState("livestream"); // default to Forex
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const accessToken = localStorage.getItem("accessToken");
  const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL + "/";

  const getCategory = () => {
    if (activeTab === "livestream") return "Forex";
    if (activeTab === "support") return "Crypto";
    if (activeTab === "options-academy") return "Stock";
    return "Forex";
  };

  const fetchCourses = async (category) => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}api/beginnerhub/courses/${category}/`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setCourses(res.data);
      if (res.data.length > 0) {
        setSelectedCourseId(res.data[0].id);
        fetchVideos(res.data[0].id);
      } else {
        setVideos([]);
        setSelectedVideo(null);
      }
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  const fetchVideos = async (courseId) => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}api/beginnerhub/courses/${courseId}/videos/`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setVideos(res.data);
      if (res.data.length > 0) setSelectedVideo(res.data[0]);
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
  };

  useEffect(() => {
    fetchCourses(getCategory());
  }, [activeTab]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourseId(course.id);
    fetchVideos(course.id);
    setIsDropdownOpen(false);
  };

  const selectedCourse = courses.find((c) => c.id === selectedCourseId);

  return (
    <div className="options-academy-container">
      <div className="nav-container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "livestream" ? "active" : ""
              }`}
              onClick={() => handleTabChange("livestream")}
            >
              Forex
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "support" ? "active" : ""}`}
              onClick={() => handleTabChange("support")}
            >
              Crypto
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "options-academy" ? "active" : ""
              }`}
              onClick={() => handleTabChange("options-academy")}
            >
              Stock
            </button>
          </li>
        </ul>
        <div className="tab-indicator"></div>
      </div>

      <div className="tab-content-academy">
        <div className="options-academy-content">
          <div className="row">
            <div className="col-md-7">
              <div className="video-container-options">
                <div className="video-wrapper-options">
                  <div className="ratio ratio-16x9">
                    {selectedVideo ? (
                      <video controls className="w-100 h-100">
                        <source
                          src={selectedVideo.video_url}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <p className="text-white">No video selected</p>
                    )}
                  </div>
                  {selectedVideo && (
                    <div className="fundamentals-tag">
                      {selectedVideo.title}
                    </div>
                  )}
                </div>
              </div>
              {selectedVideo && (
                <div className="tutorial-details">
                  <h4 className="tutorial-heading">Tutorial Description</h4>
                  <p className="tutorial-desc">{selectedVideo.description}</p>
                </div>
              )}
            </div>

            <div className="col-md-5">
              <div className="playlist-section">
                <div className="playlist-header">
                  <h4>Current Playlist</h4>
                  <div className="custom-dropdown" ref={dropdownRef}>
                    <button
                      className="btn btn-outline-primary dropdown-toggle"
                      type="button"
                      onClick={toggleDropdown}
                    >
                      {selectedCourse ? selectedCourse.title : getCategory()}
                    </button>
                    {isDropdownOpen && (
                      <ul className="custom-dropdown-menu">
                        {courses.map((course) => (
                          <li key={course.id}>
                            <button
                              className="custom-dropdown-item"
                              onClick={() => handleCourseSelect(course)}
                            >
                              {course.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {videos.length > 0 && (
                  // <div className="playlist-items">
                  //   {videos.map((video) => (
                  //     <div
                  //       key={video.id}
                  //       className={`playlist-item ${
                  //         selectedVideo?.id === video.id ? "now-playing" : ""
                  //       }`}
                  //       onClick={() => setSelectedVideo(video)}
                  //     >
                  //       <div className="playlist-thumbnail">
                  //         <img
                  //           src={video.thumbnail_url || thumbnail}
                  //           alt="Thumbnail"
                  //         />
                  //         {selectedVideo?.id === video.id && (
                  //           <div className="playing-tag">Now Playing</div>
                  //         )}
                  //       </div>
                  //       <div className="playlist-info">
                  //         <div className="video-title-card">{video.title}</div>
                  //       </div>
                  //     </div>
                  //   ))}
                  // </div>

                  <div className="playlist-items">
                    {videos.length === 0
                      ? [...Array(3)].map((_, i) => (
                          <div key={i} className="playlist-item shimmer">
                            <div className="thumbnail-skeleton"></div>
                            <div className="info-skeleton">
                              <div className="line short"></div>
                              <div className="line long"></div>
                            </div>
                          </div>
                        ))
                      : videos.map((video) => (
                          <div
                            key={video.id}
                            className={`playlist-item ${
                              selectedVideo?.id === video.id
                                ? "now-playing"
                                : ""
                            }`}
                            onClick={() => setSelectedVideo(video)}
                          >
                            <div className="playlist-thumbnail">
                              <img
                                src={video.thumbnail_url || thumbnail}
                                alt="Thumbnail"
                              />
                              {selectedVideo?.id === video.id && (
                                <div className="playing-tag">Now Playing</div>
                              )}
                            </div>
                            <div className="playlist-info">
                              <div className="video-title-card">
                                {video.title}
                              </div>
                            </div>
                          </div>
                        ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsAcademy;
