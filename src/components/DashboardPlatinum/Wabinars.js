// // import React, { useState } from 'react';

// // const ExclusiveWebinars = () => {
// //   const [activeTab, setActiveTab] = useState('Upcoming Webinars');

// //   const webinars = [
// //     {
// //       id: 1,
// //       title: 'Advanced Forex Trading Strategies',
// //       description: 'Learn advanced forex trading strategies from our expert analyst. This session will cover technical analysis, risk management, and market psychology.',
// //       presenter: 'Sarah Johnson',
// //       date: 'Apr 15, 2025',
// //       time: '10:00 AM EST',
// //       registeredCount: 42,
// //       duration: '90 minutes',
// //       level: 'Advanced',
// //       status: 'upcoming'
// //     },
// //     {
// //       id: 2,
// //       title: 'Crypto Market Analysis & Predictions',
// //       description: 'Get insights into the cryptocurrency market with detailed analysis and predictions for major coins and emerging tokens.',
// //       presenter: 'Michael Chen',
// //       date: 'Apr 18, 2025',
// //       time: '02:00 PM EST',
// //       registeredCount: 56,
// //       duration: '60 minutes',
// //       level: 'Intermediate',
// //       status: 'upcoming'
// //     },
// //     {
// //       id: 3,
// //       title: 'Technical Analysis Masterclass',
// //       description: 'Master the art of technical analysis with this comprehensive session covering chart patterns, indicators, and trading setups.',
// //       presenter: 'David Kim',
// //       date: 'Apr 22, 2025',
// //       time: '11:00 AM EST',
// //       registeredCount: 38,
// //       duration: '120 minutes',
// //       level: 'Advanced',
// //       status: 'upcoming'
// //     },
// //     {
// //       id: 4,
// //       title: 'Risk Management for Traders',
// //       description: 'Learn essential risk management techniques to protect your capital and maximize your trading performance.',
// //       presenter: 'Aisha Patel',
// //       date: 'Apr 25, 2025',
// //       time: '03:00 PM EST',
// //       registeredCount: 29,
// //       duration: '60 minutes',
// //       level: 'Beginner',
// //       status: 'upcoming'
// //     }
// //   ];

// //   const pastRecordings = [
// //     {
// //       id: 101,
// //       title: 'Mastering Candlestick Patterns',
// //       description: 'Deep dive into interpreting candlestick patterns to predict price movements more effectively.',
// //       presenter: 'Rachel Adams',
// //       date: 'Mar 10, 2025',
// //       time: '11:00 AM EST',
// //       registeredCount: 65,
// //       duration: '75 minutes',
// //       level: 'Intermediate',
// //       status: 'recorded'
// //     },
// //     {
// //       id: 102,
// //       title: 'Options Trading 101',
// //       description: 'A beginner-friendly guide to understanding options trading and building strong foundations.',
// //       presenter: 'Chris Lee',
// //       date: 'Feb 28, 2025',
// //       time: '01:00 PM EST',
// //       registeredCount: 84,
// //       duration: '90 minutes',
// //       level: 'Beginner',
// //       status: 'recorded'
// //     },
// //     {
// //       id: 103,
// //       title: 'Market Psychology & Discipline',
// //       description: 'Explore the psychological side of trading and how to stay disciplined under pressure.',
// //       presenter: 'Nina Brooks',
// //       date: 'Feb 12, 2025',
// //       time: '03:00 PM EST',
// //       registeredCount: 72,
// //       duration: '60 minutes',
// //       level: 'Advanced',
// //       status: 'recorded'
// //     }
// //   ];

// //   const handleTabChange = (tab) => {
// //     setActiveTab(tab);
// //   };

// //   return (
// //     <div className="webinars-container">
// //       <div className="webinars-header">
// //         <div className="video-icon-container">
// //           <i className="bi bi-camera-video"></i>
// //         </div>
// //         <div>
// //           <h2 className="webinars-title">Exclusive Webinars</h2>
// //           <p className="webinars-subtitle">Premium live sessions and recordings only for platinum members</p>
// //         </div>
// //       </div>

// //       <div className="webinars-card">
// //         <div className="webinars-card-header">
// //           <h3 className="mb-0">Exclusive Webinars</h3>
// //         </div>

// //         <div className="tabs-container">
// //           <div className="tab-buttons">
// //             <button
// //               className={`tab-button ${activeTab === 'Upcoming Webinars' ? 'active' : ''}`}
// //               onClick={() => handleTabChange('Upcoming Webinars')}
// //             >
// //               Upcoming Webinars
// //             </button>
// //             <button
// //               className={`tab-button ${activeTab === 'Past Recordings' ? 'active' : ''}`}
// //               onClick={() => handleTabChange('Past Recordings')}
// //             >
// //               Past Recordings
// //             </button>
// //           </div>
// //         </div>

// //         <div className="webinars-grid">
// //           {activeTab === 'Upcoming Webinars' &&
// //             webinars.map((webinar) => (
// //               <div key={webinar.id} className="webinar-card">
// //                 <div className="webinar-header">
// //                   <h4 className="webinar-title">{webinar.title}</h4>
// //                   <span className="status-badge">{webinar.status}</span>
// //                 </div>
// //                 <p className="webinar-description">{webinar.description}</p>

// //                 <div className="presenter-info">
// //                   <i className="bi bi-person-video3 presenter-icon"></i>
// //                   <span className="presenter-name">Presented by {webinar.presenter}</span>
// //                 </div>

// //                 <div className="webinar-details">
// //                   <div className="detail-row">
// //                     <div className="detail-item">
// //                       <i className="bi bi-calendar"></i>
// //                       <span>{webinar.date}</span>
// //                     </div>
// //                     <div className="detail-item">
// //                       <i className="bi bi-clock"></i>
// //                       <span>{webinar.time}</span>
// //                     </div>
// //                   </div>
// //                   <div className="detail-row">
// //                     <div className="detail-item">
// //                       <i className="bi bi-people"></i>
// //                       <span>{webinar.registeredCount} registered</span>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="webinar-footer">
// //                   <div className="tags">
// //                     <span className="duration-tag">{webinar.duration}</span>
// //                     <span className="level-tag">{webinar.level}</span>
// //                   </div>
// //                   <button className="register-button">Register Now</button>
// //                 </div>
// //               </div>
// //             ))
// //           }

// //           {activeTab === 'Past Recordings' &&
// //             pastRecordings.map((recording) => (
// //               <div key={recording.id} className="webinar-card">
// //                 <div className="webinar-header">
// //                   <h4 className="webinar-title">{recording.title}</h4>
// //                   <span className="status-badge">{recording.status}</span>
// //                 </div>
// //                 <p className="webinar-description">{recording.description}</p>

// //                 <div className="presenter-info">
// //                   <i className="bi bi-person-video3 presenter-icon"></i>
// //                   <span className="presenter-name">Presented by {recording.presenter}</span>
// //                 </div>

// //                 <div className="webinar-details">
// //                   <div className="detail-row">
// //                     <div className="detail-item">
// //                       <i className="bi bi-calendar"></i>
// //                       <span>{recording.date}</span>
// //                     </div>
// //                     <div className="detail-item">
// //                       <i className="bi bi-clock"></i>
// //                       <span>{recording.time}</span>
// //                     </div>
// //                   </div>
// //                   <div className="detail-row">
// //                     <div className="detail-item">
// //                       <i className="bi bi-people"></i>
// //                       <span>{recording.registeredCount} attended</span>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="webinar-footer">
// //                   <div className="tags">
// //                     <span className="duration-tag">{recording.duration}</span>
// //                     <span className="level-tag">{recording.level}</span>
// //                   </div>
// //                   <button className="register-button">Watch Recording</button>
// //                 </div>
// //               </div>
// //             ))
// //           }
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ExclusiveWebinars;

// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // const ExclusiveWebinars = () => {
// //   const [activeTab, setActiveTab] = useState("Upcoming Webinars");
// //   const [webinars, setWebinars] = useState([]);
// //   const [recordings, setRecordings] = useState([]);
// //   const accessToken = localStorage.getItem("accessToken");
// //   const API_URL = `${process.env.REACT_APP_API_URL}api/webinars/`;

// //   useEffect(() => {
// //     const fetchWebinars = async () => {
// //       try {
// //         const res = await axios.get(API_URL, {
// //           headers: {
// //             Authorization: `Bearer ${accessToken}`,
// //           },
// //         });
// //         const upcoming = res.data.filter((w) => w.status === "Upcoming");
// //         const recorded = res.data.filter((w) => w.status === "Outdated");
// //         setWebinars(upcoming);
// //         setRecordings(recorded);
// //       } catch (err) {
// //         console.error("Failed to fetch webinars:", err);
// //       }
// //     };
// //     fetchWebinars();
// //   }, []);

// //   // const handleRegister = async (id) => {
// //   //   try {
// //   //     await axios.patch(
// //   //       `${API_URL}${id}/`,
// //   //       {},
// //   //       {
// //   //         headers: {
// //   //           Authorization: `Bearer ${accessToken}`,
// //   //         },
// //   //       }
// //   //     );
// //   //     const updated = webinars.map((w) =>
// //   //       w.id === id ? { ...w, registered_count: w.registered_count + 1 } : w
// //   //     );
// //   //     setWebinars(updated);
// //   //   } catch (err) {
// //   //     console.error("Failed to register:", err);
// //   //   }
// //   // };

// //   const handleRegister = async (id) => {
// //     try {
// //       const res = await axios.post(
// //         `${API_URL}${id}/register/`,
// //         {},
// //         {
// //           headers: {
// //             Authorization: `Bearer ${accessToken}`,
// //           },
// //         }
// //       );

// //       if (res.data.success) {
// //         const updated = webinars.map((w) =>
// //           w.id === id
// //             ? {
// //                 ...w,
// //                 registered_count: res.data.registered_count,
// //                 already_registered: true, // mark as registered
// //               }
// //             : w
// //         );
// //         setWebinars(updated);
// //       } else {
// //         alert(res.data.message); // fallback
// //       }
// //     } catch (err) {
// //       console.error("Failed to register:", err);
// //     }
// //   };

// //   const handleTabChange = (tab) => setActiveTab(tab);

// //   return (
// //     <div className="webinars-container">
// //       <div className="webinars-header">
// //         <div className="video-icon-container">
// //           <i className="bi bi-camera-video"></i>
// //         </div>
// //         <div>
// //           <h2 className="webinars-title">Exclusive Webinars</h2>
// //           <p className="webinars-subtitle">
// //             Premium live sessions and recordings only for platinum members
// //           </p>
// //         </div>
// //       </div>

// //       <div className="webinars-card">
// //         <div className="webinars-card-header">
// //           <h3 className="mb-0">Exclusive Webinars</h3>
// //         </div>

// //         <div className="tabs-container">
// //           <div className="tab-buttons">
// //             <button
// //               className={`tab-button ${
// //                 activeTab === "Upcoming Webinars" ? "active" : ""
// //               }`}
// //               onClick={() => handleTabChange("Upcoming Webinars")}
// //             >
// //               Upcoming Webinars
// //             </button>
// //             <button
// //               className={`tab-button ${
// //                 activeTab === "Past Recordings" &&
// //                 recordings.map((rec) => (
// //                   <div key={rec.id} className="webinar-card">
// //                     <div className="webinar-header">
// //                       <h4 className="webinar-title">{rec.title}</h4>
// //                       <span className="status-badge">{rec.status}</span>
// //                     </div>
// //                     <p className="webinar-description">{rec.description}</p>

// //                     <div className="presenter-info">
// //                       <i className="bi bi-person-video3 presenter-icon"></i>
// //                       <span className="presenter-name">
// //                         Presented by {rec.presenter}
// //                       </span>
// //                     </div>

// //                     <div className="webinar-details">
// //                       <div className="detail-row">
// //                         <div className="detail-item">
// //                           <i className="bi bi-calendar"></i>
// //                           <span>{rec.date}</span>
// //                         </div>
// //                         <div className="detail-item">
// //                           <i className="bi bi-clock"></i>
// //                           <span>{rec.time}</span>
// //                         </div>
// //                       </div>
// //                       <div className="detail-row">
// //                         <div className="detail-item">
// //                           <i className="bi bi-people"></i>
// //                           <span>{rec.registered_count} attended</span>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <div className="webinar-footer">
// //                       <div className="tags">
// //                         <span className="duration-tag">{rec.duration}</span>
// //                         <span className="level-tag">{rec.level}</span>
// //                       </div>
// //                       <button
// //                         className="register-button"
// //                         onClick={() => {
// //                           if (rec.recording_link) {
// //                             window.open(rec.recording_link, "_blank");
// //                           } else {
// //                             alert("Recording link not available");
// //                           }
// //                         }}
// //                       >
// //                         Watch Recording
// //                       </button>
// //                     </div>
// //                   </div>
// //                 ))
// //               }
// //               `}
// //               onClick={() => handleTabChange("Past Recordings")}
// //             >
// //               Past Recordings
// //             </button>
// //           </div>
// //         </div>

// //         <div className="webinars-grid">
// //           {activeTab === "Upcoming Webinars" &&
// //             webinars.map((webinar) => (
// //               <div key={webinar.id} className="webinar-card">
// //                 <div className="webinar-header">
// //                   <h4 className="webinar-title">{webinar.title}</h4>
// //                   <span className="status-badge">{webinar.status}</span>
// //                 </div>
// //                 <p className="webinar-description">{webinar.description}</p>

// //                 <div className="presenter-info">
// //                   <i className="bi bi-person-video3 presenter-icon"></i>
// //                   <span className="presenter-name">
// //                     Presented by {webinar.presenter}
// //                   </span>
// //                 </div>

// //                 <div className="webinar-details">
// //                   <div className="detail-row">
// //                     <div className="detail-item">
// //                       <i className="bi bi-calendar"></i>
// //                       <span>{webinar.date}</span>
// //                     </div>
// //                     <div className="detail-item">
// //                       <i className="bi bi-clock"></i>
// //                       <span>{webinar.time}</span>
// //                     </div>
// //                   </div>
// //                   <div className="detail-row">
// //                     <div className="detail-item">
// //                       <i className="bi bi-people"></i>
// //                       <span>{webinar.registered_count} registered</span>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="webinar-footer">
// //                   <div className="tags">
// //                     <span className="duration-tag">{webinar.duration}</span>
// //                     <span className="level-tag">{webinar.level}</span>
// //                   </div>
// //                   <button
// //                     className="register-button"
// //                     disabled={webinar.already_registered}
// //                     onClick={() => handleRegister(webinar.id)}
// //                   >
// //                     {webinar.already_registered ? "Registered" : "Register Now"}
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}

// //           {activeTab === "Past Recordings" &&
// //             recordings.map((rec) => (
// //               <div key={rec.id} className="webinar-card">
// //                 <div className="webinar-header">
// //                   <h4 className="webinar-title">{rec.title}</h4>
// //                   <span className="status-badge">{rec.status}</span>
// //                 </div>
// //                 <p className="webinar-description">{rec.description}</p>

// //                 <div className="presenter-info">
// //                   <i className="bi bi-person-video3 presenter-icon"></i>
// //                   <span className="presenter-name">
// //                     Presented by {rec.presenter}
// //                   </span>
// //                 </div>

// //                 <div className="webinar-details">
// //                   <div className="detail-row">
// //                     <div className="detail-item">
// //                       <i className="bi bi-calendar"></i>
// //                       <span>{rec.date}</span>
// //                     </div>
// //                     <div className="detail-item">
// //                       <i className="bi bi-clock"></i>
// //                       <span>{rec.time}</span>
// //                     </div>
// //                   </div>
// //                   <div className="detail-row">
// //                     <div className="detail-item">
// //                       <i className="bi bi-people"></i>
// //                       <span>{rec.registered_count} attended</span>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="webinar-footer">
// //                   <div className="tags">
// //                     <span className="duration-tag">{rec.duration}</span>
// //                     <span className="level-tag">{rec.level}</span>
// //                   </div>
// //                   <a
// //                     href={rec.recording_link}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="register-button"
// //                   >
// //                     Watch Recording
// //                   </a>
// //                 </div>
// //               </div>
// //             ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ExclusiveWebinars;

// import axios from "axios";
// import { useEffect, useState } from "react";

// const ExclusiveWebinars = () => {
//   const [activeTab, setActiveTab] = useState("Upcoming Webinars");
//   const [webinars, setWebinars] = useState([]);
//   const [recordings, setRecordings] = useState([]);
//   const accessToken = localStorage.getItem("accessToken");
//   const API_URL = `${process.env.REACT_APP_API_URL}api/webinars/`;

//   useEffect(() => {
//     const fetchWebinars = async () => {
//       try {
//         const res = await axios.get(API_URL, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         const upcoming = res.data.filter((w) => w.status === "Upcoming");
//         const recorded = res.data.filter((w) => w.status === "Outdated");
//         setWebinars(upcoming);
//         setRecordings(recorded);
//       } catch (err) {
//         console.error("Failed to fetch webinars:", err);
//       }
//     };
//     fetchWebinars();
//   }, []);

//   const handleRegister = async (id) => {
//     try {
//       const res = await axios.post(
//         `${API_URL}${id}/register/`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (res.data.success) {
//         const updated = webinars.map((w) =>
//           w.id === id
//             ? {
//                 ...w,
//                 registered_count: res.data.registered_count,
//                 already_registered: true,
//               }
//             : w
//         );
//         setWebinars(updated);
//       } else {
//         alert(res.data.message);
//       }
//     } catch (err) {
//       console.error("Failed to register:", err);
//     }
//   };

//   const handleTabChange = (tab) => setActiveTab(tab);

//   return (
//     <div className="webinars-container">
//       <div className="webinars-header">
//         <div className="video-icon-container">
//           <i className="bi bi-camera-video"></i>
//         </div>
//         <div>
//           <h2 className="webinars-title">Exclusive Webinars</h2>
//           <p className="webinars-subtitle">
//             Premium live sessions and recordings only for platinum members
//           </p>
//         </div>
//       </div>

//       <div className="webinars-card">
//         <div className="webinars-card-header">
//           <h3 className="mb-0">Exclusive Webinars</h3>
//         </div>

//         <div className="tabs-container">
//           <div className="tab-buttons">
//             <button
//               className={`tab-button ${
//                 activeTab === "Upcoming Webinars" ? "active" : ""
//               }`}
//               onClick={() => handleTabChange("Upcoming Webinars")}
//             >
//               Upcoming Webinars
//             </button>
//             <button
//               className={`tab-button ${
//                 activeTab === "Past Recordings" ? "active" : ""
//               }`}
//               onClick={() => handleTabChange("Past Recordings")}
//             >
//               Past Recordings
//             </button>
//           </div>
//         </div>

//         <div className="webinars-grid">
//           {activeTab === "Upcoming Webinars" &&
//             webinars.map((webinar) => (
//               <div key={webinar.id} className="webinar-card">
//                 {webinar.thumbnail_public_url && (
//                   <img
//                     src={webinar.thumbnail_public_url}
//                     alt={webinar.title}
//                     className="webinar-image obj_fit mb-3"
//                   />
//                 )}
//                 <div className="webinar-header">
//                   <h4 className="webinar-title">{webinar.title}</h4>
//                   <span className="status-badge">{webinar.status}</span>
//                 </div>
//                 <p className="webinar-description">{webinar.description}</p>

//                 <div className="presenter-info">
//                   <i className="bi bi-person-video3 presenter-icon"></i>
//                   <span className="presenter-name">
//                     Presented by {webinar.presenter}
//                   </span>
//                 </div>

//                 <div className="webinar-details">
//                   <div className="detail-row">
//                     <div className="detail-item">
//                       <i className="bi bi-calendar"></i>
//                       <span>{webinar.date}</span>
//                     </div>
//                     <div className="detail-item">
//                       <i className="bi bi-clock"></i>
//                       <span>{webinar.time}</span>
//                     </div>
//                   </div>
//                   <div className="detail-row">
//                     <div className="detail-item">
//                       <i className="bi bi-people"></i>
//                       <span>{webinar.registered_count} registered</span>
//                     </div>

//                   </div>
//                 </div>

//                 <div className="webinar-footer">
//                   <div className="tags">
//                     <span className="duration-tag">{webinar.duration}</span>
//                     <span className="level-tag">{webinar.level}</span>
//                   </div>
//                   <button
//                     className="register-button"
//                     disabled={webinar.already_registered}
//                     onClick={() => handleRegister(webinar.id)}
//                   >
//                     {webinar.already_registered ? "Registered" : "Register Now"}
//                   </button>
//                 </div>
//               </div>
//             ))}

//           {activeTab === "Past Recordings" &&
//             recordings.map((rec) => (
//               <div key={rec.id} className="webinar-card">
//                 {rec.thumbnail_public_url && (
//                   <img
//                     src={rec.thumbnail_public_url}
//                     alt={rec.title}
//                     className="webinar-image obj_fit mb-3"
//                   />
//                 )}
//                 <div className="webinar-header">
//                   <h4 className="webinar-title">{rec.title}</h4>
//                   <span className="status-badge">{rec.status}</span>
//                 </div>
//                 <p className="webinar-description">{rec.description}</p>

//                 <div className="presenter-info">
//                   <i className="bi bi-person-video3 presenter-icon"></i>
//                   <span className="presenter-name">
//                     Presented by {rec.presenter}
//                   </span>
//                 </div>

//                 <div className="webinar-details">
//                   <div className="detail-row">
//                     <div className="detail-item">
//                       <i className="bi bi-calendar"></i>
//                       <span>{rec.date}</span>
//                     </div>
//                     <div className="detail-item">
//                       <i className="bi bi-clock"></i>
//                       <span>{rec.time}</span>
//                     </div>
//                   </div>
//                   <div className="detail-row">
//                     <div className="detail-item">
//                       <i className="bi bi-people"></i>
//                       <span>{rec.registered_count} attended</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="webinar-footer">
//                   <div className="tags">
//                     <span className="duration-tag">{rec.duration}</span>
//                     <span className="level-tag">{rec.level}</span>
//                   </div>
//                   <a
//                     href={rec.recording_link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="register-button"
//                   >
//                     Watch Recording
//                   </a>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExclusiveWebinars;

import axios from "axios";
import { useEffect, useState } from "react";

const ExclusiveWebinars = () => {
  const [activeTab, setActiveTab] = useState("Upcoming Webinars");
  const [webinars, setWebinars] = useState([]);
  const [recordings, setRecordings] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const API_URL = `${process.env.REACT_APP_API_URL}api/webinars/`;

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const res = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const upcoming = res.data.filter((w) => w.status === "Upcoming");
        const recorded = res.data.filter((w) => w.status === "Outdated");
        setWebinars(upcoming);
        setRecordings(recorded);
      } catch (err) {
        console.error("Failed to fetch webinars:", err);
      }
    };
    fetchWebinars();
  }, []);

  const handleRegister = async (id) => {
    try {
      const res = await axios.post(
        `${API_URL}${id}/register/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.data.success) {
        const updated = webinars.map((w) =>
          w.id === id
            ? {
                ...w,
                registered_count: res.data.registered_count,
                already_registered: true,
              }
            : w
        );
        setWebinars(updated);
      }
    } catch (err) {
      console.error("Failed to register:", err);
    }
  };

  const handleUnregister = async (id) => {
    try {
      const res = await axios.post(
        `${API_URL}${id}/unregister/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.data.success) {
        const updated = webinars.map((w) =>
          w.id === id
            ? {
                ...w,
                registered_count: res.data.registered_count,
                already_registered: false,
              }
            : w
        );
        setWebinars(updated);
      }
    } catch (err) {
      console.error("Failed to unregister:", err);
    }
  };

  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <div className="webinars-container">
      <div className="webinars-header">
        <div className="video-icon-container">
          <i className="bi bi-camera-video"></i>
        </div>
        <div>
          <h2 className="webinars-title">Exclusive Webinars</h2>
          <p className="webinars-subtitle">
            Premium live sessions and recordings only for platinum members
          </p>
        </div>
      </div>

      <div className="webinars-card">
        <div className="webinars-card-header">
          <h3 className="mb-0">Exclusive Webinars</h3>
        </div>

        <div className="tabs-container">
          <div className="tab-buttons">
            <button
              className={`tab-button ${
                activeTab === "Upcoming Webinars" ? "active" : ""
              }`}
              onClick={() => handleTabChange("Upcoming Webinars")}
            >
              Upcoming Webinars
            </button>
            <button
              className={`tab-button ${
                activeTab === "Past Recordings" ? "active" : ""
              }`}
              onClick={() => handleTabChange("Past Recordings")}
            >
              Past Recordings
            </button>
          </div>
        </div>

        <div className="webinars-grid">
          {activeTab === "Upcoming Webinars" &&
            webinars.map((webinar) => (
              <div key={webinar.id} className="webinar-card">
                {webinar.thumbnail_public_url && (
                  <img
                    src={webinar.thumbnail_public_url}
                    alt={webinar.title}
                    className="webinar-image obj_fit mb-3"
                  />
                )}
                <div className="webinar-header">
                  <h4 className="webinar-title">{webinar.title}</h4>
                  <span className="status-badge">{webinar.status}</span>
                </div>
                <p className="webinar-description">{webinar.description}</p>

                <div className="presenter-info">
                  <i className="bi bi-person-video3 presenter-icon"></i>
                  <span className="presenter-name">
                    Presented by {webinar.presenter}
                  </span>
                </div>

                <div className="webinar-details">
                  <div className="detail-row">
                    <div className="detail-item">
                      <i className="bi bi-calendar"></i>
                      <span>{webinar.date}</span>
                    </div>
                    <div className="detail-item">
                      <i className="bi bi-clock"></i>
                      <span>{webinar.time}</span>
                    </div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-item">
                      <i className="bi bi-people"></i>
                      <span>{webinar.registered_count} registered</span>
                    </div>
                  </div>
                </div>

                <div className="webinar-footer">
                  <div className="tags">
                    <span className="duration-tag">{webinar.duration}</span>
                    <span className="level-tag">{webinar.level}</span>
                  </div>
                  <div className="registers-btn">
                    {webinar.already_registered ? (
                      <button
                        className="register-button unregister-btn ms-2"
                        onClick={() => handleUnregister(webinar.id)}
                      >
                        Unregister
                      </button>
                    ) : (
                      <button
                        className="register-button"
                        onClick={() => handleRegister(webinar.id)}
                      >
                        Register Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

          {activeTab === "Past Recordings" &&
            recordings.map((rec) => (
              <div key={rec.id} className="webinar-card">
                {rec.thumbnail_public_url && (
                  <img
                    src={rec.thumbnail_public_url}
                    alt={rec.title}
                    className="webinar-image obj_fit mb-3"
                  />
                )}
                <div className="webinar-header">
                  <h4 className="webinar-title">{rec.title}</h4>
                  <span className="status-badge">{rec.status}</span>
                </div>
                <p className="webinar-description">{rec.description}</p>

                <div className="presenter-info">
                  <i className="bi bi-person-video3 presenter-icon"></i>
                  <span className="presenter-name">
                    Presented by {rec.presenter}
                  </span>
                </div>

                <div className="webinar-details">
                  <div className="detail-row">
                    <div className="detail-item">
                      <i className="bi bi-calendar"></i>
                      <span>{rec.date}</span>
                    </div>
                    <div className="detail-item">
                      <i className="bi bi-clock"></i>
                      <span>{rec.time}</span>
                    </div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-item">
                      <i className="bi bi-people"></i>
                      <span>{rec.registered_count} attended</span>
                    </div>
                  </div>
                </div>

                <div className="webinar-footer">
                  <div className="tags">
                    <span className="duration-tag">{rec.duration}</span>
                    <span className="level-tag">{rec.level}</span>
                  </div>
                  <a
                    href={rec.recording_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="register-button"
                  >
                    Watch Recording
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveWebinars;
