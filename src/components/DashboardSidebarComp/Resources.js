// import React from "react";
// import "../DashboardSidebarComp/styles/resources.css";
// import authorImg from "../DashboardSidebarComp/images/thubnail_stream.png"

// const Resources = ({ darkMode }) => {
//   return (
//     <div className={`container mt-4 resources-section blur ${darkMode ? "dark-mode" : "light-mode"}`}>
//       <div className="video-container">
//         <h4 className="video-title">Platform Walkthrough</h4>
//         <iframe
//           width="100%"
//           height="400"
//           src="https://www.youtube.com/embed/VIDEO_ID"
//           title="Platform Walkthrough"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       </div>

//       {/* Dark mode class added here */}
//       <div className={`resources-details mt-4 ${darkMode ? "dark-mode" : "light-mode"}`}>
//         <div className="author-info d-flex align-items-center">
//           <img src={authorImg} alt="Author" className="author-img me-2" />
//           <div>
//             <h6 className="author-name m-0">Dane Gilsek <span className="verified-badge">✔</span></h6>
//             <p className="author-role m-0">ValourWealth Analyst</p>
//           </div>
//         </div>

//         <h5 className="session-title mt-3">Platform Walkthrough Sessions</h5>
//         <p className="session-description">
//           Join us for a platform walkthrough livestream where we'll be taking you on a tour of our latest update.
//           Dane will guide you through all the features, functionalities, and show you how to get the most out of
//           the platform. Don't miss out on this exciting chance to learn and explore!
//         </p>

//         <div className={`live-schedule p-3 mt-3 ${darkMode ? "dark-mode" : "light-mode"}`}>
//           <h6>LIVE Schedule</h6>
//           <p>Every Monday to Friday</p>
//           <p>Time: 7:00pm - 8:00pm EST</p>
//           <p className="replay-text">Replays are available at any time.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Resources;

import authorImg from "../DashboardSidebarComp/images/thubnail_stream.png";
import videoThumbnail from "../DashboardSidebarComp/images/walkthrough-thumnail.png";
import "../DashboardSidebarComp/styles/resources.css";

const Resources = ({ darkMode }) => {
  const handlePlay = () => {
    const video = document.getElementById("platform-video");
    const overlay = document.querySelector(".video-thumbnail-overlay");
    overlay.style.display = "none";
    video.style.display = "block";
    video.play();
  };

  return (
    <div
      className={`container mt-4 resources-section ${
        darkMode ? "" : "light-mode"
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="video-container video-resource mt-0">
              <h4 className="video-title mb-3">Platform Walkthrough</h4>

              {/* Video player with controls and no download */}
              <div
                className={`video-wrapper ${
                  darkMode ? "dark-mode" : "light-mode"
                }`}
              >
                {/* Custom thumbnail with play button overlay */}
                <div
                  className="video-thumbnail-overlay"
                  onClick={() => handlePlay()}
                >
                  <img
                    src={videoThumbnail}
                    alt="Thumbnail"
                    className="video-thumbnail"
                  />
                  <button
                    style={{
                      borderRadius: "50%",
                      height: "50px",
                      width: "50px",
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                    className="play-button-resources"
                    aria-label="Play"
                  >
                    ▶
                  </button>
                
                </div>

                <video
                  id="platform-video"
                  width="100%"
                  height="auto"
                  controls
                  style={{ display: "none" }}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <source
                    src="https://pub-e58a5f6126d0464c9b810e772987ba18.r2.dev/course_videos/platform%20walkthrough%20.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark mode class added here */}
      <div className={`resources-details mt-4 ${darkMode ? "" : "light-mode"}`}>
        <div className="author-info d-flex align-items-center">
          <img src={authorImg} alt="Author" className="author-img me-2" />
          <div>
            <h6 className="author-name m-0">
              Jack G <span className="verified-badge">✔</span>
            </h6>
            <p className="author-role m-0">ValourWealth Analyst</p>
          </div>
        </div>

        <h5 className="session-title mt-3 ">Platform Walkthrough Sessions</h5>
        <p className="session-description">
          Join us for a platform walkthrough livestream where we'll be taking
          you on a tour of our latest update. Jack will guide you through all
          the features, functionalities, and show you how to get the most out of
          the platform. Don't miss out on this exciting chance to learn and
          explore!
        </p>

        <div
          className={`live-schedule p-3 mt-3 ${
            darkMode ? "dark-mode" : "light-mode"
          }`}
        >
          <h6>LIVE Schedule</h6>
          <p>Every Monday to Friday</p>
          <p>Time: 7:00pm - 8:00pm EST</p>
          <p className="replay-text">Replays are available at any time.</p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
