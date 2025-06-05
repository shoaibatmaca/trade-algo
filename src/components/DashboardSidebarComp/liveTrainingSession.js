import axios from "axios";
import { useEffect, useRef, useState } from "react";

import "../DashboardSidebarComp/styles/live-training-session.css";

import LiveSessionChat from "./LiveSessionChat";

function LiveTrainingSession() {
  const [isLocked, setIsLocked] = useState(true);
  const [pastWebinars, setPastWebinars] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const videoRefs = useRef([]);
  const accessToken = localStorage.getItem("accessToken");

  const API_URL = `${process.env.REACT_APP_API_URL}api/webinars/`;

  useEffect(() => {
    const fetchPastWebinars = async () => {
      try {
        const res = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const past = res.data
          .filter((w) => w.status === "Outdated")
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 2);
        setPastWebinars(past);
      } catch (err) {
        console.error("Failed to fetch webinars:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPastWebinars();
  }, []);

  const handlePlay = (index) => {
    setPlayingIndex(index);
    setTimeout(() => {
      videoRefs.current[index]?.play();
    }, 100);
  };

  return (
    <section className="live-trading-sessions pt-0">
      <div className="container">
        <div className="row">
          <div className="sec_heading">
            <h2 className="live-session-title">Past Live Streams</h2>
          </div>

          {loading ? (
            <div className="row">
              {[...Array(2)].map((_, index) => (
                <div className="col-lg-6 mb-4 p-2" key={index}>
                  <div className="session-card shimmer-card">
                    <div className="video-wrapper mb-3">
                      <div className="shimmer-block shimmer-media"></div>
                    </div>
                    <div className="session-content">
                      <div className=" mb-2" style={{ width: "80%" }}></div>
                      <div className=" mb-2" style={{ width: "60%" }}></div>
                      <div
                        className="shimmer-block shimmer-subtitle"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            pastWebinars.map((webinar, index) => (
              <div className="col-lg-6 mb-4 p-2" key={webinar.id}>
                <div className={`session-card ${isLocked ? "locked" : ""}`}>
                  <div className="video-wrapper">
                    {playingIndex !== index ? (
                      <div className="thumbnail-container">
                        <img
                          src={webinar.thumbnail_public_url}
                          alt="Video thumbnail"
                          className="session-img"
                        />
                        <button
                          className="play-button-session"
                          onClick={() => handlePlay(index)}
                        >
                          ▶
                        </button>
                      </div>
                    ) : (
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        className="session-img"
                        // controls
                        // muted
                        // loop
                        // playsInline
                        poster={webinar.thumbnail_public_url}
                      >
                        <source src={webinar.recording_link} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                  <div className="session-content">
                    <h5 className="session-title">{webinar.title}</h5>
                    <p className="session-host">By {webinar.presenter}</p>
                    <p className="session-time">{webinar.date}</p>
                  </div>
                  {isLocked && <div className="lock-icon">🔒</div>}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <LiveSessionChat />
    </section>
  );
}

export default LiveTrainingSession;

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import "../DashboardSidebarComp/styles/live-training-session.css";
// import sessionImg from "../DashboardSidebarComp/images/live-trading-session-img.jpg";
// import LiveSessionChat from "./LiveSessionChat";

// function LiveTrainingSession() {
//   const [isLocked, setIsLocked] = useState(true);
//   const [pastWebinars, setPastWebinars] = useState([]);
//   const [playingIndex, setPlayingIndex] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const videoRefs = useRef([]);
//   const accessToken = localStorage.getItem("accessToken");

//   const API_URL = `${process.env.REACT_APP_API_URL}api/webinars/`;

//   useEffect(() => {
//     const fetchPastWebinars = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get(API_URL, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         const past = res.data
//           .filter((w) => w.status === "Outdated")
//           .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
//           .slice(0, 2); // ✅ Sirf 2 latest Past Webinars
//         setPastWebinars(past);
//       } catch (err) {
//         console.error("Failed to fetch webinars:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPastWebinars();
//   }, []);

// const handlePlay = (index) => {
//   setPlayingIndex(index);
//   setTimeout(() => {
//     videoRefs.current[index]?.play();
//   }, 100); // video ko delay se play karwana
// };

//   return (
//     <section className="live-trading-sessions pt-0">
//       <div className="container">
//         <div className="row">
//           <div className="sec_heading">
//             <h2 className="live-session-title">Past Live Streams</h2>
//           </div>

//           {loading ? (
//             // Shimmer Effect - Exactly 2 items as expected
//             <>
//               {[...Array(2)].map((_, index) => (
//                 <div className="col-lg-6 mb-0 p-0 ps-2" key={index}>
//                   <div className={session-card ${isLocked ? "locked" : ""}}>
//                     <div className="video-wrapper">
//                       <div className="thumbnail-container">
//                         {/* Video Thumbnail Shimmer */}
//                         <div className="shimmer-block session-img" style={{ borderRadius: "8px" }}></div>
//                         {/* Play Button Shimmer */}
//                         <div className="shimmer-block play-button-session" style={{ borderRadius: "50%", width: "60px", height: "60px" }}></div>
//                       </div>
//                     </div>

//                     <div className="session-content">
//                       {/* Session Title Shimmer */}
//                       <div className="shimmer-block mb-2" style={{ height: "20px", width: "80%", borderRadius: "4px" }}></div>
//                       {/* Session Host Shimmer */}
//                       <div className="shimmer-block mb-2" style={{ height: "16px", width: "60%", borderRadius: "4px" }}></div>
//                       {/* Session Time Shimmer */}
//                       <div className="shimmer-block" style={{ height: "16px", width: "50%", borderRadius: "4px" }}></div>
//                     </div>

//                     {isLocked && <div className="lock-icon">🔒</div>}
//                   </div>
//                 </div>
//               ))}
//             </>
//           ) : (
//             // Actual Content
//             pastWebinars.map((webinar, index) => (
//               <div className="col-lg-6 mb-0 p-0 ps-2" key={webinar.id}>
//                 <div className={`session-card ${isLocked ? "locked" : ""}`}>
//                   <div className="video-wrapper">
//                     {playingIndex !== index ? (
//                       <div className="thumbnail-container">
//                         <img
//                           src={sessionImg}
//                           alt="Video thumbnail"
//                           className="session-img"
//                         />
//                         <button
//                           className="play-button-session"
//                           onClick={() => handlePlay(index)}
//                         >
//                           ▶
//                         </button>
//                       </div>
//                     ) : (
//                       <video
//                         ref={(el) => (videoRefs.current[index] = el)}
//                         className="session-img"
//                         controls
//                         muted
//                         loop
//                         playsInline
//                         poster={sessionImg}
//                       >
//                         <source src={webinar.recording_link} type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     )}
//                   </div>

//                   <div className="session-content">
//                     <h5 className="session-title">{webinar.title}</h5>
//                     <p className="session-host">By {webinar.presenter}</p>
//                     <p className="session-time">{webinar.date}</p>
//                   </div>

//                   {isLocked && <div className="lock-icon">🔒</div>}
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       <LiveSessionChat />
//     </section>
//   );
// }

// export default LiveTrainingSession;
