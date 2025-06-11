import {
  faChevronRight,
  faLongArrowAltDown,
  faLongArrowAltUp,
  faPlay,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";

const styles = {
  body: {
    backgroundColor: "#111111",
    color: "#ffffff",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  },
  mainCard: {
    backgroundColor: "#333333",
    borderRadius: "8px",
    overflow: "hidden",
  },
  videoPlaceholder: {
    position: "relative",
    height: "400px",
    background: "radial-gradient(circle, #444444 10%, #333333 70%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  playButton: {
    width: "50px",
    height: "50px",
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  playIcon: {
    color: "#333",
    fontSize: "20px",
    marginLeft: "3px",
  },
  avatar: {
    width: "36px",
    height: "36px",
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#333",
    fontWeight: "bold",
    fontSize: "14px",
  },
  timestamp: {
    color: "#999999",
    fontSize: "12px",
  },
  btnCustom: {
    backgroundColor: "transparent",
    border: "1px solid #444444",
    color: "white",
    fontSize: "13px",
    padding: "4px 12px",
    borderRadius: "4px",
  },
  summarySection: {
    marginTop: "20px",
  },
  summaryTitle: {
    fontWeight: 600,
    fontSize: "16px",
    marginBottom: "8px",
  },
  summaryText: {
    color: "#bbbbbb",
    fontSize: "14px",
    lineHeight: 1.4,
  },
  keyPoint: {
    display: "flex",
    alignItems: "baseline",
    marginBottom: "8px",
    color: "#bbbbbb",
    fontSize: "14px",
  },
  keyPointIcon: {
    color: "#999999",
    fontSize: "10px",
    marginRight: "10px",
  },
  tradeCard: {
    backgroundColor: "#222222",
    border: "1px solid #333333",
    borderRadius: "6px",
    padding: "15px",
    marginBottom: "12px",
  },
  tradeHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  tradeSymbol: {
    fontWeight: 600,
    fontSize: "15px",
  },
  tradeType: {
    padding: "2px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: 600,
  },
  tradeLong: {
    backgroundColor: "rgba(40, 167, 69, 0.2)",
    color: "#2ecc71",
  },
  tradeShort: {
    backgroundColor: "rgba(220, 53, 69, 0.2)",
    color: "#e74c3c",
  },
  tradeDetails: {
    fontSize: "13px",
  },
  tradeLabel: {
    color: "#999999",
    marginBottom: "2px",
  },
  targetValue: {
    color: "#2ecc71",
  },
  stopLossValue: {
    color: "#e74c3c",
  },
  timeframeValue: {
    color: "#dddddd",
  },
  viewAnalysisBtn: {
    backgroundColor: "transparent",
    border: "1px solid #444444",
    color: "white",
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    fontSize: "14px",
    marginTop: "10px",
  },
  previousSection: {
    marginTop: "30px",
  },
  previousTitle: {
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "15px",
  },
  previousCard: {
    backgroundColor: "#222222",
    border: "1px solid #333333",
    borderRadius: "6px",
    padding: "15px",
    marginBottom: "12px",
  },
  previousCardTitle: {
    fontSize: "14px",
    fontWeight: 600,
    marginBottom: "5px",
  },
  previousCardMeta: {
    color: "#999999",
    fontSize: "12px",
    marginBottom: "8px",
  },
  previousCardDesc: {
    color: "#999999",
    fontSize: "13px",
    marginBottom: "12px",
  },
  watchBtn: {
    backgroundColor: "transparent",
    border: "1px solid #444444",
    color: "white",
    width: "100%",
    padding: "6px",
    borderRadius: "4px",
    fontSize: "13px",
  },
  starIcon: {
    color: "#f1c40f",
    marginRight: "8px",
  },
  thumbnailContainer: {
    position: "relative",
    width: "100%",
    height: "400px",
    cursor: "pointer",
    overflow: "hidden",
    borderRadius: "8px",
  },
  thumbnailImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  },
  playButtonOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60px",
    height: "60px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  playButtonIcon: {
    color: "#333",
    fontSize: "24px",
    marginLeft: "4px",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "#000",
    border: "none",
    borderRadius: "4px",
    width: "30px",
    height: "30px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const PlatinumBriefing = () => {
  const [briefings, setBriefings] = useState([]);
  const [current, setCurrent] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const isLatest = current?.id === briefings[0]?.id;

  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}api/weekly-briefings/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setBriefings(res.data);
        setCurrent(res.data[0]);
      })
      .catch((err) => console.error("Error fetching briefings", err));
  }, [API_BASE_URL]);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  const handleBriefingChange = (briefing) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrent(briefing);
  };

  if (!current)
    return (
      <div className="loader">
        <div className="loader-inner">
          <div className="loader-line-wrap">
            <div className="loader-line"></div>
          </div>
          <div className="loader-line-wrap">
            <div className="loader-line"></div>
          </div>
          <div className="loader-line-wrap">
            <div className="loader-line"></div>
          </div>
          <div className="loader-line-wrap">
            <div className="loader-line"></div>
          </div>
          <div className="loader-line-wrap">
            <div className="loader-line"></div>
          </div>
        </div>
        <style>{`
          .loader {
            background: #000;
            background: radial-gradient(#222, #000);
            bottom: 0;
            left: 0;
            overflow: hidden;
            position: fixed;
            right: 0;
            top: 0;
            z-index: 99999;
          }

          .loader-inner {
            bottom: 0;
            height: 60px;
            left: 0;
            margin: auto;
            position: absolute;
            right: 0;
            top: 0;
            width: 100px;
          }

          .loader-line-wrap {
            animation: spin 2000ms cubic-bezier(.175, .885, .32, 1.275) infinite;
            box-sizing: border-box;
            height: 50px;
            left: 0;
            overflow: hidden;
            position: absolute;
            top: 0;
            transform-origin: 50% 100%;
            width: 100px;
          }

          .loader-line {
            border: 4px solid transparent;
            border-radius: 100%;
            box-sizing: border-box;
            height: 100px;
            left: 0;
            margin: 0 auto;
            position: absolute;
            right: 0;
            top: 0;
            width: 100px;
          }

          .loader-line-wrap:nth-child(1) { animation-delay: -50ms; }
          .loader-line-wrap:nth-child(2) { animation-delay: -100ms; }
          .loader-line-wrap:nth-child(3) { animation-delay: -150ms; }
          .loader-line-wrap:nth-child(4) { animation-delay: -200ms; }
          .loader-line-wrap:nth-child(5) { animation-delay: -250ms; }

          .loader-line-wrap:nth-child(1) .loader-line {
            border-color: hsl(0, 80%, 60%);
            height: 90px;
            width: 90px;
            top: 7px;
          }
          .loader-line-wrap:nth-child(2) .loader-line {
            border-color: hsl(60, 80%, 60%);
            height: 76px;
            width: 76px;
            top: 14px;
          }
          .loader-line-wrap:nth-child(3) .loader-line {
            border-color: hsl(120, 80%, 60%);
            height: 62px;
            width: 62px;
            top: 21px;
          }
          .loader-line-wrap:nth-child(4) .loader-line {
            border-color: hsl(180, 80%, 60%);
            height: 48px;
            width: 48px;
            top: 28px;
          }
          .loader-line-wrap:nth-child(5) .loader-line {
            border-color: hsl(240, 80%, 60%);
            height: 34px;
            width: 34px;
            top: 35px;
          }

          @keyframes spin {
            0%, 15% {
              transform: rotate(0);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );

  // Fix: Define otherBriefings properly
  const otherBriefings = briefings.filter((briefing, index) => index !== 0);

  return (
    <div className="container-fluid py-3" style={styles.body}>
      <h4 className="mb-4">This Week's Platinum Briefing</h4>
      <div className="row">
        <div className="col-md-8 pe-md-3">
          <div style={styles.mainCard} className="mb-4">
            <div style={styles.videoPlaceholder}>
              {!isPlaying ? (
                <div style={styles.thumbnailContainer} onClick={handlePlay}>
                  <img
                    src={current.thumbnail_public_url || "error"}
                    alt="Video thumbnail"
                    style={styles.thumbnailImage}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.style.background =
                        "radial-gradient(circle, #444444 10%, #333333 70%)";
                    }}
                  />
                  <div style={styles.playButtonOverlay}>
                    <FontAwesomeIcon
                      icon={faPlay}
                      style={styles.playButtonIcon}
                    />
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <video
                    ref={videoRef}
                    controls
                    width="100%"
                    height="100%"
                    controlsList="nodownload noremoteplayback"
                    style={{ borderRadius: "8px", backgroundColor: "#000" }}
                    onContextMenu={(e) => e.preventDefault()}
                    onLoadStart={() => console.log("Video loading started")}
                    onCanPlay={() => console.log("Video ready to play")}
                    onError={(e) => {
                      console.error("Video error:", e.target.error);
                      console.log("Video URL:", current.public_url);
                    }}
                    preload="metadata"
                    playsInline
                    poster={current.thumbnail_public_url}
                  >
                    <source src={current.public_url} type="video/mp4" />
                    <source src={current.public_url} type="video/webm" />
                    <source src={current.public_url} type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>

                  {!isLatest && (
                    <div className="d-flex justify-content-end">
                      <button
                        onClick={() => handleBriefingChange(briefings[0])}
                        className="btn btn-sm d-flex align-items-center"
                        style={{
                          backgroundColor: "#444",
                          color: "#fff",
                          border: "1px solid #666",
                          borderRadius: "4px",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="me-2"
                          style={{
                            transform: "rotate(176deg)",
                          }}
                        />
                        Back to Latest Briefing
                      </button>
                    </div>
                  )}

                  <button onClick={handleCloseVideo} style={styles.closeButton}>
                    ✕
                  </button>
                </div>
              )}
            </div>

            <div className="p-4">
              <h5 className="mb-2">{current.title}</h5>
              <div className="d-flex mb-4" style={styles.timestamp}>
                <div className="me-3">{current.published_date}</div>
                <div>{current.duration}</div>
              </div>
              <div className="d-flex align-items-center">
                <div style={styles.avatar} className="me-2">
                  {current.analyst_name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("") || "A"}
                </div>
                <div>
                  <div className="fw-bold">{current.analyst_name}</div>
                  <div style={styles.timestamp}>{current.analyst_title}</div>
                </div>
              </div>

              <div style={styles.summarySection}>
                <div style={styles.summaryTitle}>Summary</div>
                <p style={styles.summaryText}>{current.summary}</p>
              </div>

              <div style={styles.summarySection}>
                <div style={styles.summaryTitle}>Key Points</div>
                {current.key_points?.map((point, index) => (
                  <div key={index} style={styles.keyPoint}>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      style={styles.keyPointIcon}
                    />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-4">
            <h6 className="d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faStar} style={styles.starIcon} />
              Top Trade Ideas
            </h6>

            {current.trade_ideas?.map((trade, index) => (
              <div key={index} style={styles.tradeCard}>
                <div style={styles.tradeHeader}>
                  <div style={styles.tradeSymbol}>{trade.ticker}</div>
                  <div
                    style={{
                      ...styles.tradeType,
                      ...(trade.direction === "LONG"
                        ? styles.tradeLong
                        : styles.tradeShort),
                    }}
                  >
                    <FontAwesomeIcon
                      icon={
                        trade.direction === "LONG"
                          ? faLongArrowAltUp
                          : faLongArrowAltDown
                      }
                      className="me-1"
                    />
                    {trade.direction}
                  </div>
                </div>
                <div style={styles.tradeDetails} className="row">
                  <div className="col-6">
                    <div style={styles.tradeLabel}>Target</div>
                    <div style={styles.targetValue}>${trade.target_price}</div>
                  </div>
                  <div className="col-6">
                    <div style={styles.tradeLabel}>Stop Loss</div>
                    <div style={styles.stopLossValue}>${trade.stop_loss}</div>
                  </div>
                </div>
                <div style={styles.tradeDetails} className="mt-2">
                  <div style={styles.tradeLabel}>Timeframe</div>
                  <div style={styles.timeframeValue}>{trade.timeframe}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.previousSection}>
            <div style={styles.previousTitle}>Previous Briefings</div>

            {otherBriefings.map((b, index) => (
              <div key={index} style={styles.previousCard}>
                <div style={styles.previousCardTitle}>{b.title}</div>
                <div style={styles.previousCardMeta}>
                  {b.published_date} · {b.duration}
                </div>
                <div style={styles.previousCardDesc}>
                  {b.summary?.slice(0, 90)}...
                </div>
                <button
                  style={styles.watchBtn}
                  onClick={() => handleBriefingChange(b)}
                >
                  <FontAwesomeIcon icon={faPlay} className="me-1" /> Watch
                  Briefing
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Video Controls Styling */
        video {
          background-color: #000 !important;
        }

        video::-webkit-media-controls {
          display: flex !important;
        }

        video::-webkit-media-controls-panel {
          display: flex !important;
          background-color: rgba(0, 0, 0, 0.8) !important;
          border-radius: 0 0 8px 8px !important;
        }

        video::-webkit-media-controls-play-button {
          display: block !important;
          color: white !important;
        }

        video::-webkit-media-controls-timeline {
          display: block !important;
        }

        video::-webkit-media-controls-timeline::-webkit-slider-thumb {
          background-color: #007bff !important;
        }

        video::-webkit-media-controls-current-time-display,
        video::-webkit-media-controls-time-remaining-display {
          display: block !important;
          color: white !important;
          font-family: Arial, sans-serif !important;
        }

        video::-webkit-media-controls-mute-button {
          display: block !important;
          color: white !important;
        }

        video::-webkit-media-controls-volume-slider {
          display: block !important;
        }

        video::-webkit-media-controls-fullscreen-button {
          display: block !important;
          color: white !important;
        }

        video::-webkit-media-controls-overlay-play-button {
          display: none !important;
        }

        /* Hover effects */
        .thumbnail-container:hover .play-button-overlay {
          transform: translate(-50%, -50%) scale(1.1);
          background-color: rgba(255, 255, 255, 1);
        }

        .close-button:hover {
          background-color: rgba(255, 255, 255, 1) !important;
        }
      `}</style>
    </div>
  );
};

export default PlatinumBriefing;
