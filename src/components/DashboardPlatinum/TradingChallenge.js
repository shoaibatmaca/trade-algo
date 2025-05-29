import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const TradingChallenges = () => {
  const [activeTab, setActiveTab] = useState("Active Challenges");
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [leaderboards, setLeaderboards] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [performanceData, setPerformanceData] = useState(null);
  const [joinedChallenges, setJoinedChallenges] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchChallenges();
  }, []);

  const fetchChallenges = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        "https://valourwealthdjango-production.up.railway.app/api/challenges/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setChallenges(response.data);
      const joined = response.data.filter((c) => c.is_joined).map((c) => c.id);
      setJoinedChallenges(joined);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching challenges:", error);
      setLoading(false);
    }
  };

  const fetchLeaderboard = async (challengeId) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        `https://valourwealthdjango-production.up.railway.app/api/challenges/${challengeId}/leaderboard/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLeaderboards((prev) => ({
        ...prev,
        [challengeId]: response.data.slice(0, 3),
      }));
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };

  const joinChallenge = async (challengeId) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.post(
        `https://valourwealthdjango-production.up.railway.app/api/challenges/${challengeId}/join/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Successfully joined the challenge!");
      setJoinedChallenges((prev) => [...prev, challengeId]);

      navigate(`/challenges/${challengeId}`, { state: { joined: true } });
    } catch (error) {
      const errorMessage = error?.response?.data?.detail;

      if (errorMessage === "You already joined.") {
        // ✅ Gracefully handle duplicate join
        setJoinedChallenges((prev) => [...prev, challengeId]);
        navigate(`/challenges/${challengeId}`, { state: { joined: true } });
      } else {
        console.error("Error joining challenge:", error);
        alert("Failed to join challenge.");
      }
    }
  };

  const viewYourPerformance = async (challengeId) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        `https://valourwealthdjango-production.up.railway.app/api/challenges/${challengeId}/my-performance/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPerformanceData(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching performance:", error);
    }
  };

  const getFilteredChallenges = () => {
    const today = moment();
    if (activeTab === "Active Challenges") {
      return challenges.filter(
        (challenge) =>
          moment(challenge.start_date).isSameOrBefore(today) &&
          moment(challenge.end_date).isSameOrAfter(today)
      );
    } else if (activeTab === "Past Challenges") {
      return challenges.filter((challenge) =>
        moment(challenge.end_date).isBefore(today)
      );
    }
    return [];
  };

  if (loading) {
    return <div>Loading challenges...</div>;
  }

  return (
    <div className="trading-challenges-container">
      <div className="challenges-header">
        <div className="trophy-icon-container">
          <i className="bi bi-trophy"></i>
        </div>
        <div>
          <h2 className="challenges-title">Private Trading Challenges</h2>
          <p className="challenges-subtitle">
            Compete with fellow platinum members in exclusive trading
            competitions
          </p>
        </div>
      </div>

      <div className="tabs-container">
        <div className="nav-tabs">
          <button
            className={`tab-button ${
              activeTab === "Active Challenges" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Active Challenges")}
          >
            Active Challenges
          </button>
          <button
            className={`tab-button ${
              activeTab === "Past Challenges" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Past Challenges")}
          >
            Past Challenges
          </button>
        </div>
      </div>

      <div className="challenges-list">
        {getFilteredChallenges().map((challenge) => (
          <div
            key={challenge.id}
            className="challenge-card"
            onMouseEnter={() => {
              if (!leaderboards[challenge.id]) {
                fetchLeaderboard(challenge.id);
              }
            }}
          >
            <div className="challenge-main">
              <div className="challenge-header">
                <div className="challenge-icon">
                  <i className="bi bi-trophy"></i>
                </div>
                <div className="challenge-title-section">
                  <h3 className="challenge-title">{challenge.title}</h3>
                  <p className="challenge-description">
                    {challenge.description}
                  </p>
                </div>
              </div>

              <div className="challenge-details">
                <div className="detail-item">
                  <i className="bi bi-calendar-event"></i>
                  <div className="detail-content">
                    <div className="detail-label">Start Date</div>
                    <div className="detail-value">
                      {moment(challenge.start_date).format("MMMM D, YYYY")}
                    </div>
                  </div>
                </div>

                <div className="detail-item">
                  <i className="bi bi-calendar-event"></i>
                  <div className="detail-content">
                    <div className="detail-label">End Date</div>
                    <div className="detail-value">
                      {moment(challenge.end_date).format("MMMM D, YYYY")}
                    </div>
                  </div>
                </div>

                <div className="detail-item">
                  <i className="bi bi-people"></i>
                  <div className="detail-content">
                    <div className="detail-label">Participants</div>
                    <div className="detail-value">
                      {challenge.participants_count} members
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="challenge-actions">
              <Link to={`/challenges/${challenge.id}`}>
                <button className="action-button joined">
                  View Challenge Details
                </button>
              </Link>

              {joinedChallenges.includes(challenge.id) ? (
                <button className="action-button joined" disabled>
                  Joined
                </button>
              ) : (
                <button
                  className="action-button"
                  onClick={() => joinChallenge(challenge.id)}
                >
                  Join Challenge
                </button>
              )}
            </div> */}

            <div className="challenge-actions">
              <Link
                to={`/challenges/${challenge.id}`}
                state={
                  joinedChallenges.includes(challenge.id)
                    ? { joined: true }
                    : {}
                }
              >
                <button className="action-button joined">
                  View Challenge Details
                </button>
              </Link>

              {joinedChallenges.includes(challenge.id) ? (
                <button className="action-button joined" disabled>
                  Joined
                </button>
              ) : moment(challenge.end_date).isBefore(moment()) ? (
                <button className="action-button closed" disabled>
                  Closed / Outdated
                </button>
              ) : (
                <button
                  className="action-button"
                  onClick={() => joinChallenge(challenge.id)}
                >
                  Join Challenge
                </button>
              )}
            </div>

            {/* Current Leaderboard */}
            {leaderboards[challenge.id] &&
              leaderboards[challenge.id].length > 0 && (
                <div className="challenge-leaderboard">
                  <div className="leaderboard-header">
                    <h4 className="leaderboard-title">Current Leaderboard</h4>
                    <div className="info-icon">
                      <i className="bi bi-info-circle"></i>
                    </div>
                  </div>

                  <div className="leaderboard-entries">
                    {leaderboards[challenge.id].map((entry, index) => (
                      <div key={index} className="leaderboard-entry">
                        <div className="entry-rank">
                          {entry.leaderboard_position || index + 1}
                        </div>

                        <div className="entry-avatar">
                          {entry.user_profile?.profile_photo_url ? (
                            <img
                              src={entry.user_profile.profile_photo_url}
                              alt="Profile"
                              style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          ) : (
                            <div
                              style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                backgroundColor: "#6c757d",
                              }}
                            ></div>
                          )}
                        </div>

                        <div className="entry-name">
                          {entry.user_profile?.username || "Unknown User"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        ))}
      </div>

      {/* Modal for performance */}
      {isModalOpen && performanceData && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Your Performance Details</h3>
            <p>
              <strong>Username:</strong> {performanceData.username}
            </p>
            <p>
              <strong>Starting Value:</strong> ${performanceData.starting_value}
            </p>
            <p>
              <strong>Current Value:</strong> ${performanceData.current_value}
            </p>
            <p>
              <strong>Performance:</strong>{" "}
              {parseFloat(performanceData.performance).toFixed(2)}%
            </p>

            <button
              className="btn btn-secondary"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradingChallenges;
