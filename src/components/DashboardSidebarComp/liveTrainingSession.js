import React, { useState, useRef } from 'react';
import "../DashboardSidebarComp/styles/live-training-session.css";
import sessionImg from "../DashboardSidebarComp/images/live-trading-session-img.jpg";


function LiveTrainingSession() {
  const [isLocked, setIsLocked] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100); // ensure rendering before playing
  };

  return (
    <section className="live-trading-sessions pt-0">
      <div className="container">
        <div className="row">
          <div className="sec_heading">
            <h2 className="live-session-title">Live Trading Sessions</h2>
          </div>

          {/* Video Card */}
          <div className="col-lg-6">
            <div className={`session-card ${isLocked ? "locked" : ""}`}>
              <div className="video-wrapper">
                {!isPlaying ? (
                  <div className="thumbnail-container">
                    <img src={sessionImg} alt="Video thumbnail" className="session-img" />
                    <button className="play-button" onClick={handlePlay}>▶</button>
                  </div>
                ) : (
                  <video
                    ref={videoRef}
                    className="session-img"
                    controls
                    muted
                    loop
                    playsInline
                    poster={sessionImg}
                  >
                    <source src="https://pub-e58a5f6126d0464c9b810e772987ba18.r2.dev/course_videos/live-session-video1.mp4" type="video/mp4" />

                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="session-content">
                <h5 className="session-title">Daily Livestreams</h5>
                <p className="session-host">By IAN</p>
                <p className="session-time">9:30am - 10:30am EST • Mon - Fri</p>
              </div>
              {isLocked && <div className="lock-icon">🔒</div>}
            </div>
          </div>

          {/* Image Card */}
          <div className="col-lg-6">
            <div className={`session-card ${isLocked ? "locked" : ""}`}>
              <img src={sessionImg} alt="IAN image" className="session-img" />
              <div className="session-content">
                <h5 className="session-title">Daily Livestreams</h5>
                <p className="session-host">By IAN</p>
                <p className="session-time">9:30am - 10:30am EST • Mon - Fri</p>
              </div>
              {isLocked && <div className="lock-icon">🔒</div>}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LiveTrainingSession;