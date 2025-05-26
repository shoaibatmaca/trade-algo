// import sessionImg from "../../assets/images/intermidate.png";

// const TradingPlatform = () => {
//   return (
//     <div className="container-fluid p-0">
//       <div className="row g-0">
//         <div class="sec_heading">
//           <h2 class="live-session-title">Upcoming Live Streams</h2>
//         </div>
//         {/* Left Side - Video Player */}
//         <div class="col-lg-12">
//           <div className="webinar-card webinar-car-img">
//             <img
//               alt="Advanced Forex Trading Strategies"
//               className="webinar-image obj_fit mb-3"
//               src={sessionImg}
//             />
//             <div className="webinar-header">
//               <h4 className="webinar-title">
//                 Advanced Forex Trading Strategies
//               </h4>
//               <span className="status-badge">Upcoming</span>
//             </div>
//             <p className="webinar-description">
//               Learn advanced forex trading strategies from our expert analyst.
//               This session will cover technical analysis, risk management, and
//               market psychology.
//             </p>
//             <div className="presenter-info">
//               <i className="bi bi-person-video3 presenter-icon"></i>
//               <span className="presenter-name">Presented by Senior Member</span>
//             </div>
//             <div className="webinar-details">
//               <div className="detail-row">
//                 <div className="detail-item">
//                   <i className="bi bi-calendar"></i>
//                   <span>2025-05-06</span>
//                 </div>
//                 <div className="detail-item">
//                   <i className="bi bi-clock"></i>
//                   <span>10:00:00</span>
//                 </div>
//               </div>
//               <div className="detail-row">
//                 <div className="detail-item">
//                   <i className="bi bi-people"></i>
//                   <span>4 registered</span>
//                 </div>
//               </div>
//             </div>
//             <div className="webinar-footer">
//               <div className="tags">
//                 <span className="duration-tag">60 mins</span>
//                 <span className="level-tag">Beginner</span>
//               </div>
//               <div className="registers-btn">
//                 <button className="register-button" disabled>
//                   Registered
//                 </button>
//                 <button
//                   className="register-button unregister-btn ms-2"
//                   disabled
//                 >
//                   Unregistered
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TradingPlatform;

import axios from "axios";
import { useEffect, useState } from "react";

const TradingPlatform = () => {
  const [webinars, setWebinars] = useState([]);
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
        setWebinars(upcoming);
      } catch (err) {
        console.error("Failed to fetch webinars:", err);
      }
    };
    fetchWebinars();
  }, []);

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="sec_heading">
          <h2 className="live-session-title">Upcoming Live Streams</h2>
        </div>

        <div className="col-lg-12">
          {webinars.length > 0 ? (
            webinars.map((webinar) => (
              <div key={webinar.id} className="webinar-card webinar-car-img">
                {webinar.thumbnail_public_url && (
                  <img
                    alt={webinar.title}
                    className="webinar-image obj_fit mb-3"
                    src={webinar.thumbnail_public_url}
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
                    <button className="register-button" disabled>
                      {webinar.already_registered ? "Registered" : "Register"}
                    </button>
                    <button
                      className="register-button unregister-btn ms-2"
                      disabled
                    >
                      Unregistered
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No upcoming webinars.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TradingPlatform;
