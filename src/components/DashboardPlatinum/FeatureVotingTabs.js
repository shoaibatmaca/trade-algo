// import axios from "axios";
// import { useEffect, useState } from "react";

// function FeatureVotingTabs() {
//   const [activeTab, setActiveTab] = useState("active-voting");
//   const [activeVotingFeatures, setActiveVotingFeatures] = useState([]);
//   const [pastFeatures, setPastFeatures] = useState([]);
//   const [hasVotedMap, setHasVotedMap] = useState({});
//   const accessToken = localStorage.getItem("accessToken");

//   const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
//     ? process.env.REACT_APP_API_URL
//     : process.env.REACT_APP_API_URL + "/";
//   const FEATURE_API_URL = `${API_BASE_URL}api/features/`;

//   const fetchFeatures = async () => {
//     try {
//       const res = await axios.get(FEATURE_API_URL, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       const features = res.data;

//       const active = features.filter(
//         (feature) => feature.status === "Voting Open"
//       );
//       const past = features.filter((feature) => feature.status === "Closed");

//       setActiveVotingFeatures(active);
//       setPastFeatures(past);
//     } catch (error) {
//       console.error(
//         "Error fetching features:",
//         error.response?.data || error.message
//       );
//     }
//   };

//   useEffect(() => {
//     fetchFeatures();
//   }, []);

//   const calculateProgress = (current, total) => {
//     return (current / total) * 100;
//   };

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleVote = async (featureId) => {
//     if (hasVotedMap[featureId]) return;

//     try {
//       await axios.post(
//         `${FEATURE_API_URL}${featureId}/vote/`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       setActiveVotingFeatures((prev) =>
//         prev.map((feature) =>
//           feature.id === featureId
//             ? { ...feature, votes_count: feature.votes_count + 1 }
//             : feature
//         )
//       );
//       setHasVotedMap((prev) => ({ ...prev, [featureId]: true }));
//     } catch (error) {
//       if (error.response?.status === 400) {
//         alert("You already voted for this feature.");
//         setHasVotedMap((prev) => ({ ...prev, [featureId]: true }));
//       } else {
//         console.error("Vote failed:", error);
//         alert("Failed to vote. Please try again.");
//       }
//     }
//   };

//   return (
//     <div>
//       {/* Tabs */}
//       <div className="tabs-container">
//         <div className="nav-tabs">
//           <button
//             className={`tab-button ${
//               activeTab === "active-voting" ? "active" : ""
//             }`}
//             onClick={() => handleTabChange("active-voting")}
//           >
//             Active Voting
//           </button>

//           <button
//             className={`tab-button ${
//               activeTab === "past-features" ? "active" : ""
//             }`}
//             onClick={() => handleTabChange("past-features")}
//           >
//             Past Features
//           </button>
//         </div>
//       </div>

//       {/* Active Voting */}
//       {activeTab === "active-voting" && (
//         <div className="tab-content-voting">
//           {activeVotingFeatures.length > 0 ? (
//             activeVotingFeatures.map((feature) => (
//               <div key={feature.id} className="feature-card">
//                 <div className="feature-card-content">
//                   <div className="vote-count-container">
//                     <div className="vote-count">{feature.votes_count || 0}</div>
//                     <div className="vote-label">
//                       {feature.votes_count === 1 ? "vote" : "votes"}
//                     </div>
//                   </div>

//                   <div className="feature-details">
//                     <div className="feature-status-container">
//                       <span
//                         className={`feature-status ${feature.status
//                           .toLowerCase()
//                           .replace(" ", "-")}`}
//                       >
//                         {feature.status}
//                       </span>
//                     </div>
//                     <h2 className="feature-title">{feature.title}</h2>
//                     <p className="feature-description">{feature.description}</p>

//                     {feature.status === "Voting Open" && (
//                       <div className="voting-progress-container">
//                         <div className="voting-stats">
//                           <span>
//                             {feature.votes_count || 0} of {feature.votes_needed}{" "}
//                             votes needed
//                           </span>
//                         </div>
//                         {/* {(() => {
//                           const progressPercent = calculateProgress(
//                             feature.votes_count || 0,
//                             feature.votes_needed
//                           );
//                           const visibleProgress =
//                             progressPercent > 0 && progressPercent < 5
//                               ? 5
//                               : progressPercent;

//                           return (
//                             <div className="progress">
//                               <div
//                                 className="progress-bar"
//                                 role="progressbar"
//                                 style={{
//                                   width: `${visibleProgress}%`,
//                                   backgroundColor: "#fff",
//                                 }}
//                                 aria-valuenow={feature.votes_count || 0}
//                                 aria-valuemin="0"
//                                 aria-valuemax={feature.votes_needed}
//                               ></div>
//                             </div>
//                           );
//                         })()} */}

//                         <div className="vote-btn-container mt-5">
//                           <button
//                             className="btn btn-sm btn-outline-light"
//                             onClick={() => handleVote(feature.id)}
//                             disabled={hasVotedMap[feature.id]}
//                           >
//                             {hasVotedMap[feature.id] ? "Voted" : "Add Vote"}
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No active voting features found.</p>
//           )}
//         </div>
//       )}

//       {/* Past Features */}
//       {activeTab === "past-features" && (
//         <div className="tab-content-voting">
//           {pastFeatures.length > 0 ? (
//             pastFeatures.map((feature) => (
//               <div key={feature.id} className="feature-card">
//                 <div className="feature-card-content">
//                   <div className="feature-details">
//                     <div className="feature-status-container">
//                       <span
//                         className={`feature-status ${feature.status
//                           .toLowerCase()
//                           .replace(" ", "-")}`}
//                       >
//                         {feature.status}
//                       </span>
//                       <span className="feature-category">
//                         {feature.category}
//                       </span>
//                     </div>
//                     <h2 className="feature-title">{feature.title}</h2>
//                     <p className="feature-description">{feature.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No past features found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default FeatureVotingTabs;

import axios from "axios";
import { useEffect, useState } from "react";

// Spinner Component for showing the loading animation
const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-box">
        <div className="circle-border">
          <div className="circle-core"></div>
        </div>
      </div>
    </div>
  );
};

function FeatureVotingTabs() {
  const [activeTab, setActiveTab] = useState("active-voting");
  const [activeVotingFeatures, setActiveVotingFeatures] = useState([]);
  const [pastFeatures, setPastFeatures] = useState([]);
  const [hasVotedMap, setHasVotedMap] = useState({});
  const [loading, setLoading] = useState(false); // Track loading state
  const accessToken = localStorage.getItem("accessToken");

  const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL + "/";
  const FEATURE_API_URL = `${API_BASE_URL}api/features/`;

  const fetchFeatures = async () => {
    setLoading(true); // Start loading
    try {
      const res = await axios.get(FEATURE_API_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const features = res.data;

      const active = features.filter(
        (feature) => feature.status === "Voting Open"
      );
      const past = features.filter((feature) => feature.status === "Closed");

      setActiveVotingFeatures(active);
      setPastFeatures(past);
    } catch (error) {
      console.error(
        "Error fetching features:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchFeatures();
  }, []);

  const calculateProgress = (current, total) => {
    return (current / total) * 100;
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleVote = async (featureId) => {
    if (hasVotedMap[featureId]) return;

    try {
      await axios.post(
        `${FEATURE_API_URL}${featureId}/vote/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setActiveVotingFeatures((prev) =>
        prev.map((feature) =>
          feature.id === featureId
            ? { ...feature, votes_count: feature.votes_count + 1 }
            : feature
        )
      );
      setHasVotedMap((prev) => ({ ...prev, [featureId]: true }));
    } catch (error) {
      if (error.response?.status === 400) {
        alert("You already voted for this feature.");
        setHasVotedMap((prev) => ({ ...prev, [featureId]: true }));
      } else {
        console.error("Vote failed:", error);
        alert("Failed to vote. Please try again.");
      }
    }
  };

  return (
    <div>
      {/* Tabs */}
      <div className="tabs-container">
        <div className="nav-tabs">
          <button
            className={`tab-button ${
              activeTab === "active-voting" ? "active" : ""
            }`}
            onClick={() => handleTabChange("active-voting")}
          >
            Active Voting
          </button>

          <button
            className={`tab-button ${
              activeTab === "past-features" ? "active" : ""
            }`}
            onClick={() => handleTabChange("past-features")}
          >
            Past Features
          </button>
        </div>
      </div>

      {/* Spinner */}
      {loading && <Spinner />}

      {/* Active Voting */}
      {activeTab === "active-voting" && (
        <div className="tab-content-voting">
          {activeVotingFeatures.length > 0 ? (
            activeVotingFeatures.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-card-content">
                  <div className="vote-count-container">
                    <div className="vote-count">{feature.votes_count || 0}</div>
                    <div className="vote-label">
                      {feature.votes_count === 1 ? "vote" : "votes"}
                    </div>
                  </div>

                  <div className="feature-details">
                    <div className="feature-status-container">
                      <span
                        className={`feature-status ${feature.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {feature.status}
                      </span>
                    </div>
                    <h2 className="feature-title">{feature.title}</h2>
                    <p className="feature-description">{feature.description}</p>

                    {feature.status === "Voting Open" && (
                      <div className="voting-progress-container">
                        <div className="voting-stats">
                          <span>
                            {feature.votes_count || 0} of {feature.votes_needed}{" "}
                            votes needed
                          </span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${calculateProgress(
                                feature.votes_count || 0,
                                feature.votes_needed
                              )}%`,
                            }}
                            aria-valuenow={feature.votes_count || 0}
                            aria-valuemin="0"
                            aria-valuemax={feature.votes_needed}
                          ></div>
                        </div>

                        <div className="vote-btn-container mt-5">
                          <button
                            className="btn btn-sm btn-outline-light"
                            onClick={() => handleVote(feature.id)}
                            disabled={hasVotedMap[feature.id]}
                          >
                            {hasVotedMap[feature.id] ? "Voted" : "Add Vote"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No active voting features found.</p>
          )}
        </div>
      )}

      {/* Past Features */}
      {activeTab === "past-features" && (
        <div className="tab-content-voting">
          {pastFeatures.length > 0 ? (
            pastFeatures.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-card-content">
                  <div className="feature-details">
                    <div className="feature-status-container">
                      <span
                        className={`feature-status ${feature.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {feature.status}
                      </span>
                      <span className="feature-category">
                        {feature.category}
                      </span>
                    </div>
                    <h2 className="feature-title">{feature.title}</h2>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No past features found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default FeatureVotingTabs;
