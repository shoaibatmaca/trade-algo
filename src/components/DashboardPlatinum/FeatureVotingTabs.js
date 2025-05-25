// import React, { useState } from 'react';

// function FeatureVoting() {
//   // State for active tab
//   const [activeTab, setActiveTab] = useState('active-voting');

//   // Sample data for features
//   const activeVotingFeatures = [
//     {
//       id: 1,
//       votingStatus: 'Voting Open',
//       category: 'Analytics',
//       title: 'Advanced Options Flow Dashboard',
//       description: 'Real-time options flow data with customizable filters, unusual activity alerts, and dark pool transaction tracking.',
//       votes: 142,
//       totalVotesNeeded: 200,
//       daysRemaining: 5,
//       comments: 28
//     },
//     {
//       id: 2,
//       votingStatus: 'Voting Open',
//       category: 'AI Tools',
//       title: 'AI-Powered Trade Journal Analysis',
//       description: 'Automatically analyze your trading journal to identify patterns, strengths, weaknesses, and actionable insights to improve performance.',
//       votes: 98,
//       totalVotesNeeded: 200,
//       daysRemaining: 12,
//       comments: 17
//     },
//     {
//       id: 3,
//       votingStatus: 'Approved',
//       category: 'Technical Analysis',
//       title: 'Custom Indicator Builder',
//       description: 'Visual tool to create, backtest, and share custom technical indicators without coding knowledge.',
//       votes: 156,
//       comments: 32
//     }
//   ];

//   const earlyAccessFeatures = [
//     {
//       id: 4,
//       status: 'Beta',
//       category: 'Analytics',
//       title: 'Sentiment Analysis Dashboard',
//       description: 'Real-time sentiment analysis from news, social media, and options flow with contrarian indicators.',
//       releaseDate: 'May 15, 2025',
//       feedbackItems: 32,
//       participants: 48,
//       maxParticipants: 50
//     },
//     {
//       id: 5,
//       status: 'Alpha',
//       category: 'Strategy',
//       title: 'Advanced Backtesting Engine',
//       description: 'Backtest trading strategies across multiple assets and timeframes with detailed performance metrics.',
//       releaseDate: 'July 2025',
//       feedbackItems: 18,
//       participants: 25,
//       maxParticipants: 30
//     }
//   ];

//   const pastFeatures = [
//     {
//       id: 6,
//       status: 'Released',
//       category: 'Portfolio',
//       title: 'Portfolio Correlation Heatmap',
//       description: 'Visual representation of asset correlations in your portfolio to identify diversification opportunities.',
//       releaseDate: 'April 5, 2025',
//       comments: 35
//     },
//     {
//       id: 7,
//       status: 'Released',
//       category: 'Risk Management',
//       title: 'Advanced Risk Calculator',
//       description: 'Calculate position sizes, risk-reward ratios, and portfolio exposure with advanced risk management tools.',
//       releaseDate: 'March 20, 2025',
//       comments: 29
//     },
//     {
//       id: 8,
//       status: 'Rejected',
//       category: 'Social',
//       title: 'Social Trading Integration',
//       description: 'Follow and copy trades from top-performing platinum members with customizable risk parameters.',
//       votes: 132,
//       comments: 41,
//       rejectionReason: 'Privacy and regulatory concerns'
//     }
//   ];

//   const feedbackContributions = [
//     {
//       id: 9,
//       title: 'Sentiment Analysis Dashboard',
//       status: 'Implemented',
//       description: 'Your suggestion to add contrarian indicators to the sentiment dashboard has been implemented in the latest beta release.',
//       date: 'April 5, 2025'
//     },
//     {
//       id: 10,
//       title: 'Portfolio Heatmap',
//       status: 'Under Review',
//       description: 'Your suggestion to add sector-based filtering to the portfolio heatmap is currently under review by our development team.',
//       date: 'April 2, 2025'
//     }
//   ];

//   // Calculate progress percentage
//   const calculateProgress = (current, total) => {
//     return (current / total) * 100;
//   };

//   // Handle tab switching
//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="feature-voting-container">
//       {/* Navigation Tabs */}
//       <div className="tabs-container">
//   <div className="nav-tabs">
//     <button
//       className={`tab-button ${activeTab === 'active-voting' ? 'active' : ''}`}
//       onClick={() => handleTabChange('active-voting')}
//     >
//       Active Voting
//     </button>
//     <button
//       className={`tab-button ${activeTab === 'early-access' ? 'active' : ''}`}
//       onClick={() => handleTabChange('early-access')}
//     >
//       Early Access
//     </button>
//     <button
//       className={`tab-button ${activeTab === 'past-features' ? 'active' : ''}`}
//       onClick={() => handleTabChange('past-features')}
//     >
//       Past Features
//     </button>
//   </div>
// </div>

//       {/* Active Voting Tab Content */}
//       {activeTab === 'active-voting' && (
//         <div className="tab-content-voting">
//           {activeVotingFeatures.map((feature) => (
//             <div key={feature.id} className="feature-card">
//               <div className="feature-card-content">
//                 <div className="vote-count-container">
//                   <div className="vote-icon">
//                     <i className="bi bi-chevron-up"></i>
//                   </div>
//                   <div className="vote-count">{feature.votes}</div>
//                   <div className="vote-label">votes</div>
//                 </div>
//                 <div className="feature-details">
//                   <div className="feature-status-container">
//                     <span className={`feature-status ${feature.votingStatus.toLowerCase().replace(' ', '-')}`}>
//                       {feature.votingStatus}
//                     </span>
//                     <span className="feature-category">{feature.category}</span>
//                   </div>
//                   <h2 className="feature-title">{feature.title}</h2>
//                   <p className="feature-description">{feature.description}</p>

//                   {feature.votingStatus === 'Voting Open' && (
//                     <div className="voting-progress-container">
//                       <div className="voting-stats">
//                         <span>{feature.votes} of {feature.totalVotesNeeded} votes needed</span>
//                         <span className="days-remaining">{feature.daysRemaining} days remaining</span>
//                       </div>
//                       <div className="progress">
//                         <div
//                           className="progress-bar"
//                           role="progressbar"
//                           style={{ width: `${calculateProgress(feature.votes, feature.totalVotesNeeded)}%` }}
//                           aria-valuenow={feature.votes}
//                           aria-valuemin="0"
//                           aria-valuemax={feature.totalVotesNeeded}
//                         ></div>
//                       </div>
//                     </div>
//                   )}

//                   <div className="feature-actions">
//                     <button className="btn btn-outline-light">View Discussion</button>
//                     {feature.votingStatus === 'Voting Open' && (
//                       <button className="btn btn-vote">
//                         <i className="bi bi-chevron-up"></i> Vote for This Feature
//                       </button>
//                     )}
//                   </div>
//                 </div>
//                 <div className="comments-count">
//                   <i className="bi bi-chat"></i> {feature.comments}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Early Access Tab Content */}
//       {activeTab === 'early-access' && (
//         <div className="tab-content-voting">
//           <div className="early-access-header">
//             <h2>Early Access Program</h2>
//             <p>As a platinum member, you have exclusive access to upcoming features before they're released to the general public. Join our early access program to test new features, provide feedback, and help shape the future of our platform.</p>
//           </div>

//           <div className="early-access-features">
//             {earlyAccessFeatures.map((feature) => (
//               <div key={feature.id} className="early-access-card">
//                 <div className="ea-card-header">
//                   <span className={`status-badge ${feature.status.toLowerCase()}`}>{feature.status}</span>
//                   <span className="category-badge">{feature.category}</span>
//                 </div>
//                 <h3 className="ea-feature-title">{feature.title}</h3>
//                 <p className="ea-feature-description">{feature.description}</p>

//                 <div className="ea-feature-meta">
//                   <div className="release-date">
//                     <i className="bi bi-calendar"></i> Release: {feature.releaseDate}
//                   </div>
//                   <div className="feedback-count">
//                     <i className="bi bi-chat"></i> {feature.feedbackItems} feedback items
//                   </div>
//                 </div>

//                 <div className="participants-container">
//                   <div className="participants-label">Participants</div>
//                   <div className="participants-count">
//                     {feature.participants}/{feature.maxParticipants}
//                   </div>
//                 </div>

//                 <div className="progress">
//                   <div
//                     className="progress-bar"
//                     role="progressbar"
//                     style={{ width: `${calculateProgress(feature.participants, feature.maxParticipants)}%` }}
//                     aria-valuenow={feature.participants}
//                     aria-valuemin="0"
//                     aria-valuemax={feature.maxParticipants}
//                   ></div>
//                 </div>

//                 <div className="ea-feature-actions">
//                   <button className={`btn ${feature.status === 'Beta' ? 'btn-outline-light' : 'btn-primary'}`}>
//                     {feature.status === 'Beta' ? 'Access Feature' : 'Join Early Access'}
//                   </button>
//                   {feature.status === 'Beta' && (
//                     <button className="btn btn-dark">Submit Feedback</button>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="feedback-impact-section">
//             <h2>Your Feedback Impact</h2>
//             <div className="contributions-container">
//               <h3>Recent Contributions</h3>
//               {feedbackContributions.map((contribution) => (
//                 <div key={contribution.id} className="contribution-item">
//                   <div className="avatar-placeholder"></div>
//                   <div className="contribution-details">
//                     <div className="contribution-header">
//                       <h4>{contribution.title}</h4>
//                       <span className={`contribution-status ${contribution.status.toLowerCase().replace(' ', '-')}`}>
//                         {contribution.status}
//                       </span>
//                     </div>
//                     <p className="contribution-description">{contribution.description}</p>
//                     <div className="contribution-date">
//                       <i className="bi bi-clock"></i> {contribution.date}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Past Features Tab Content */}
//       {activeTab === 'past-features' && (
//         <div className="tab-content-voting">
//           {pastFeatures.map((feature) => (
//             <div key={feature.id} className="feature-card">
//               <div className="feature-card-content">
//                 <div className="vote-count-container">
//                   <div className={`status-icon ${feature.status.toLowerCase()}`}>
//                     {feature.status === 'Released' && <i className="bi bi-check-circle"></i>}
//                     {feature.status === 'Rejected' && <i className="bi bi-exclamation-triangle"></i>}
//                   </div>
//                   {feature.votes && (
//                     <>
//                       <div className="vote-count">{feature.votes}</div>
//                       <div className="vote-label">votes</div>
//                     </>
//                   )}
//                 </div>
//                 <div className="feature-details">
//                   <div className="feature-status-container">
//                     <span className={`feature-status ${feature.status.toLowerCase()}`}>
//                       {feature.status}
//                     </span>
//                     <span className="feature-category">{feature.category}</span>
//                   </div>
//                   <h2 className="feature-title">{feature.title}</h2>
//                   <p className="feature-description">{feature.description}</p>

//                   {feature.releaseDate && (
//                     <div className="release-date">
//                       <i className="bi bi-calendar"></i> Released on {feature.releaseDate}
//                     </div>
//                   )}

//                   {feature.rejectionReason && (
//                     <div className="rejection-reason">
//                       <h4>Rejection Reason</h4>
//                       <p>{feature.rejectionReason}</p>
//                     </div>
//                   )}

//                   <div className="feature-actions">
//                     {feature.status === 'Rejected' && (
//                       <button className="btn btn-outline-light">View Discussion</button>
//                     )}
//                     {feature.status === 'Released' && (
//                       <>
//                         <button className="btn btn-outline-light">Try Feature</button>
//                         <button className="btn btn-dark">View Documentation</button>
//                       </>
//                     )}
//                   </div>
//                 </div>
//                 <div className="comments-count">
//                   <i className="bi bi-chat"></i> {feature.comments}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default FeatureVoting;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function FeatureVotingTabs() {
//   const [activeTab, setActiveTab] = useState("active-voting");
//   const [activeVotingFeatures, setActiveVotingFeatures] = useState([]);
//   const [pastFeatures, setPastFeatures] = useState([]);
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
//                     <div className="vote-icon">
//                       <i className="bi bi-chevron-up"></i>
//                     </div>
//                     <div className="vote-count">{feature.votes_count || 0}</div>
//                     <div className="vote-label">votes</div>
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
//                       <span className="feature-category">
//                         {feature.category}
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
//                           {/* Placeholder for daysRemaining if you add it in model */}
//                         </div>
//                         <div className="progress">
//                           <div
//                             className="progress-bar"
//                             role="progressbar"
//                             style={{
//                               width: `${calculateProgress(
//                                 feature.votes_count || 0,
//                                 feature.votes_needed
//                               )}%`,
//                             }}
//                             aria-valuenow={feature.votes_count || 0}
//                             aria-valuemin="0"
//                             aria-valuemax={feature.votes_needed}
//                           ></div>
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

//                     {/* Placeholder for release date / rejection reason if you add */}
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

function FeatureVotingTabs() {
  const [activeTab, setActiveTab] = useState("active-voting");
  const [activeVotingFeatures, setActiveVotingFeatures] = useState([]);
  const [pastFeatures, setPastFeatures] = useState([]);
  const [hasVotedMap, setHasVotedMap] = useState({});
  const accessToken = localStorage.getItem("accessToken");

  const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL + "/";
  const FEATURE_API_URL = `${API_BASE_URL}api/features/`;

  const fetchFeatures = async () => {
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
                              // backgroundColor: "#fff",
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
