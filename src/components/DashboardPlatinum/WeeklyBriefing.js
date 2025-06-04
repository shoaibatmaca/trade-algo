// import "bootstrap/dist/css/bootstrap.min.css";
// // You'll need to install: npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
// import {
//   faChevronRight,
//   faDownload,
//   faFileAlt,
//   faLongArrowAltDown,
//   faLongArrowAltUp,
//   faPlay,
//   faStar,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// // Custom CSS
// const styles = {
//   body: {
//     backgroundColor: "#111111",
//     color: "#ffffff",
//     fontFamily:
//       '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
//   },
//   mainCard: {
//     backgroundColor: "#333333",
//     borderRadius: "8px",
//     overflow: "hidden",
//   },
//   videoPlaceholder: {
//     position: "relative",
//     height: "400px",
//     background: "radial-gradient(circle, #444444 10%, #333333 70%)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   playButton: {
//     width: "50px",
//     height: "50px",
//     backgroundColor: "white",
//     borderRadius: "50%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     cursor: "pointer",
//   },
//   playIcon: {
//     color: "#333",
//     fontSize: "20px",
//     marginLeft: "3px",
//   },
//   avatar: {
//     width: "36px",
//     height: "36px",
//     backgroundColor: "white",
//     borderRadius: "50%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     color: "#333",
//     fontWeight: "bold",
//     fontSize: "14px",
//   },
//   timestamp: {
//     color: "#999999",
//     fontSize: "12px",
//   },
//   btnCustom: {
//     backgroundColor: "transparent",
//     border: "1px solid #444444",
//     color: "white",
//     fontSize: "13px",
//     padding: "4px 12px",
//     borderRadius: "4px",
//   },
//   summarySection: {
//     marginTop: "20px",
//   },
//   summaryTitle: {
//     fontWeight: 600,
//     fontSize: "16px",
//     marginBottom: "8px",
//   },
//   summaryText: {
//     color: "#bbbbbb",
//     fontSize: "14px",
//     lineHeight: 1.4,
//   },
//   keyPoint: {
//     display: "flex",
//     alignItems: "baseline",
//     marginBottom: "8px",
//     color: "#bbbbbb",
//     fontSize: "14px",
//   },
//   keyPointIcon: {
//     color: "#999999",
//     fontSize: "10px",
//     marginRight: "10px",
//   },
//   tradeCard: {
//     backgroundColor: "#222222",
//     border: "1px solid #333333",
//     borderRadius: "6px",
//     padding: "15px",
//     marginBottom: "12px",
//   },
//   tradeHeader: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "12px",
//   },
//   tradeSymbol: {
//     fontWeight: 600,
//     fontSize: "15px",
//   },
//   tradeType: {
//     padding: "2px 8px",
//     borderRadius: "4px",
//     fontSize: "12px",
//     fontWeight: 600,
//   },
//   tradeLong: {
//     backgroundColor: "rgba(40, 167, 69, 0.2)",
//     color: "#2ecc71",
//   },
//   tradeShort: {
//     backgroundColor: "rgba(220, 53, 69, 0.2)",
//     color: "#e74c3c",
//   },
//   tradeDetails: {
//     fontSize: "13px",
//   },
//   tradeLabel: {
//     color: "#999999",
//     marginBottom: "2px",
//   },
//   targetValue: {
//     color: "#2ecc71",
//   },
//   stopLossValue: {
//     color: "#e74c3c",
//   },
//   timeframeValue: {
//     color: "#dddddd",
//   },
//   viewAnalysisBtn: {
//     backgroundColor: "transparent",
//     border: "1px solid #444444",
//     color: "white",
//     width: "100%",
//     padding: "8px",
//     borderRadius: "4px",
//     fontSize: "14px",
//     marginTop: "10px",
//   },
//   previousSection: {
//     marginTop: "30px",
//   },
//   previousTitle: {
//     fontSize: "16px",
//     fontWeight: 600,
//     marginBottom: "15px",
//   },
//   previousCard: {
//     backgroundColor: "#222222",
//     border: "1px solid #333333",
//     borderRadius: "6px",
//     padding: "15px",
//     marginBottom: "12px",
//   },
//   previousCardTitle: {
//     fontSize: "14px",
//     fontWeight: 600,
//     marginBottom: "5px",
//   },
//   previousCardMeta: {
//     color: "#999999",
//     fontSize: "12px",
//     marginBottom: "8px",
//   },
//   previousCardDesc: {
//     color: "#999999",
//     fontSize: "13px",
//     marginBottom: "12px",
//   },
//   watchBtn: {
//     backgroundColor: "transparent",
//     border: "1px solid #444444",
//     color: "white",
//     width: "100%",
//     padding: "6px",
//     borderRadius: "4px",
//     fontSize: "13px",
//   },
//   starIcon: {
//     color: "#f1c40f",
//     marginRight: "8px",
//   },
// };

// const MarketBriefing = () => {
//   // Sample data - you would fetch this from an API in a real app
//   const currentBriefing = {
//     title: "Market Outlook & Key Opportunities: Week of April 14, 2025",
//     date: "April 14, 2025",
//     duration: "28:23",
//     presenter: {
//       name: "Sarah Johnson",
//       title: "Chief Market Strategist",
//       initials: "SJ",
//     },
//     summary:
//       "This week's briefing covers the Fed's latest policy signals, earnings season expectations, and emerging opportunities in the technology and healthcare sectors. We also analyze recent market volatility and provide actionable trade ideas for platinum members.",
//     keyPoints: [
//       "Fed signals potential rate cuts in coming months",
//       "Q1 earnings season begins with major banks reporting",
//       "Technology sector showing strength despite valuation concerns",
//       "Healthcare presents defensive opportunities amid volatility",
//       "Emerging markets showing signs of recovery",
//     ],
//   };

//   const tradeIdeas = [
//     {
//       symbol: "AAPL",
//       type: "LONG",
//       target: "$195",
//       stopLoss: "$175",
//       timeframe: "2-4 weeks",
//     },
//     {
//       symbol: "XLV",
//       type: "LONG",
//       target: "$152",
//       stopLoss: "$142",
//       timeframe: "1-2 months",
//     },
//     {
//       symbol: "GLD",
//       type: "LONG",
//       target: "$215",
//       stopLoss: "$198",
//       timeframe: "1-3 months",
//     },
//     {
//       symbol: "EUR/USD",
//       type: "SHORT",
//       target: "1.0650",
//       stopLoss: "1.0950",
//       timeframe: "2-3 weeks",
//     },
//   ];

//   const previousBriefings = [
//     {
//       title: "Market Outlook & Key Opportunities: Week of April 7, 2025",
//       date: "April 7, 2025",
//       duration: "32:15",
//       description:
//         "Analysis of inflation data, central bank policies, and sector rotation opportunities.",
//     },
//     {
//       title: "Market Outlook & Key Opportunities: Week of March 31, 2025",
//       date: "March 31, 2025",
//       duration: "29:47",
//       description:
//         "Quarter-end review and outlook for Q2 2025, with focus on earnings expectations.",
//     },
//   ];

//   return (
//     <div className="container-fluid py-3" style={styles.body}>
//       <h4 className="mb-4">This Week's Platinum Briefing</h4>
//       <div className="row">
//         {/* Left Column - Briefing Info */}
//         <div className="col-md-8 pe-md-3">
//           <div style={styles.mainCard} className="mb-4">
//             {/* Video Placeholder */}
//             <div style={styles.videoPlaceholder}>
//               <div style={styles.playButton}>
//                 <FontAwesomeIcon icon={faPlay} style={styles.playIcon} />
//               </div>
//             </div>

//             <div className="p-4">
//               {/* Title */}
//               <h5 className="mb-2">{currentBriefing.title}</h5>
//               <div className="d-flex mb-4" style={styles.timestamp}>
//                 <div className="me-3">{currentBriefing.date}</div>
//                 <div>{currentBriefing.duration}</div>
//               </div>

//               {/* Presenter Info */}
//               <div className="d-flex align-items-center">
//                 <div style={styles.avatar} className="me-2">
//                   {currentBriefing.presenter.initials}
//                 </div>
//                 <div>
//                   <div className="fw-bold">
//                     {currentBriefing.presenter.name}
//                   </div>
//                   <div style={styles.timestamp}>
//                     {currentBriefing.presenter.title}
//                   </div>
//                 </div>
//                 <div className="ms-auto">
//                   <button style={styles.btnCustom} className="me-2">
//                     <FontAwesomeIcon icon={faFileAlt} className="me-1" /> Read
//                     Transcript
//                   </button>
//                   <button style={styles.btnCustom}>
//                     <FontAwesomeIcon icon={faDownload} className="me-1" />{" "}
//                     Download
//                   </button>
//                 </div>
//               </div>

//               {/* Summary */}
//               <div style={styles.summarySection}>
//                 <div style={styles.summaryTitle}>Summary</div>
//                 <p style={styles.summaryText}>{currentBriefing.summary}</p>
//               </div>

//               {/* Key Points */}
//               <div style={styles.summarySection}>
//                 <div style={styles.summaryTitle}>Key Points</div>
//                 {currentBriefing.keyPoints.map((point, index) => (
//                   <div key={index} style={styles.keyPoint}>
//                     <FontAwesomeIcon
//                       icon={faChevronRight}
//                       style={styles.keyPointIcon}
//                     />
//                     {point}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Trade Ideas & Previous Briefings */}
//         <div className="col-md-4">
//           {/* Top Trade Ideas */}
//           <div className="mb-4 trade-box">
//             <h6 className="d-flex align-items-center mb-3">
//               <FontAwesomeIcon icon={faStar} style={styles.starIcon} />
//               Top Trade Ideas
//             </h6>

//             {tradeIdeas.map((trade, index) => (
//               <div className="trade-cards" key={index} style={styles.tradeCard}>
//                 <div style={styles.tradeHeader}>
//                   <div style={styles.tradeSymbol}>{trade.symbol}</div>
//                   <div
//                     style={{
//                       ...styles.tradeType,
//                       ...(trade.type === "LONG"
//                         ? styles.tradeLong
//                         : styles.tradeShort),
//                     }}
//                   >
//                     <FontAwesomeIcon
//                       icon={
//                         trade.type === "LONG"
//                           ? faLongArrowAltUp
//                           : faLongArrowAltDown
//                       }
//                       className="me-1"
//                     />
//                     {trade.type}
//                   </div>
//                 </div>
//                 <div style={styles.tradeDetails} className="row">
//                   <div className="col-6">
//                     <div style={styles.tradeLabel}>Target</div>
//                     <div style={styles.targetValue}>{trade.target}</div>
//                   </div>
//                   <div className="col-6">
//                     <div style={styles.tradeLabel}>Stop Loss</div>
//                     <div style={styles.stopLossValue}>{trade.stopLoss}</div>
//                   </div>
//                 </div>
//                 <div style={styles.tradeDetails} className="mt-2">
//                   <div style={styles.tradeLabel}>Timeframe</div>
//                   <div style={styles.timeframeValue}>{trade.timeframe}</div>
//                 </div>
//               </div>
//             ))}

//             <button style={styles.viewAnalysisBtn}>
//               View Detailed Analysis
//             </button>
//           </div>

//           {/* Previous Briefings */}
//           <div style={styles.previousSection}>
//             <div style={styles.previousTitle}>Previous Briefings</div>

//             {previousBriefings.map((briefing, index) => (
//               <div key={index} style={styles.previousCard}>
//                 <div style={styles.previousCardTitle}>{briefing.title}</div>
//                 <div style={styles.previousCardMeta}>
//                   {briefing.date} · {briefing.duration}
//                 </div>
//                 <div style={styles.previousCardDesc}>
//                   {briefing.description}
//                 </div>
//                 <button style={styles.watchBtn}>
//                   <FontAwesomeIcon icon={faPlay} className="me-1" /> Watch
//                   Briefing
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarketBriefing;

// PlatinumBriefing.jsx

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
import { useEffect, useState } from "react";

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
};
const PlatinumBriefing = () => {
  const [briefings, setBriefings] = useState([]);
  const [current, setCurrent] = useState(null);

  const API_BASE_URL = process.env.REACT_APP_API_URL;

  // useEffect(() => {
  //   axios
  //     .get(`${API_BASE_URL}api/weekly-briefings/`, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     })
  //     .then((res) => {
  //       setBriefings(res.data);
  //       setCurrent(res.data[0]);
  //     })
  //     .catch((err) => console.error("Error fetching briefings", err));
  // }, []);
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
  }, []);

  if (!current)
    return <div className="text-white p-4">Loading briefing...</div>;

  const otherBriefings = briefings.slice(1);

  return (
    <div className="container-fluid py-3" style={styles.body}>
      <h4 className="mb-4">This Week's Platinum Briefing</h4>
      <div className="row">
        <div className="col-md-8 pe-md-3">
          <div style={styles.mainCard} className="mb-4">
            <div style={styles.videoPlaceholder}>
              {/* <video
                width="100%"
                height="100%"
                controls
                style={{
                  borderRadius: "8px",
                  backgroundColor: "#000",
                }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src={current.video_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              {current.video_url ? (
                <video
                  key={current.video_url}
                  controls
                  width="100%"
                  height="100%"
                >
                  <source
                    src={current.public_url || current.video_url}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <div className="text-white">No video available</div>
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
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
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
                {current.key_points.map((point, index) => (
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

            {current.trade_ideas.map((trade, index) => (
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
                  {b.summary.slice(0, 90)}...
                </div>
                <button style={styles.watchBtn} onClick={() => setCurrent(b)}>
                  <FontAwesomeIcon icon={faPlay} className="me-1" /> Watch
                  Briefing
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatinumBriefing;
