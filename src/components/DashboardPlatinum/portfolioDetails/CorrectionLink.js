// // const correlationData = [
// //   { pair: "AAPL / MSFT", correlation: 0.85, level: "High" },
// // ];

// // const getBarColor = (level) => {
// //   switch (level) {
// //     case "High":
// //       return "#ff4d6d";
// //     case "Medium":
// //       return "#ffae42";
// //     case "Low":
// //       return "#2ecc71";
// //     default:
// //       return "#ccc";
// //   }
// // };

// // const CorrelationRisk = () => {
// //   return (
// //     <div className="correlation-risk">
// //       <h3 className="correlation-title">Portfolio Pulse</h3>
// //       <div className="correlation-table">
// //         <div className="correlation-header">
// //           <span>Asset Pair</span>
// //           <span>Correlation</span>
// //           <span>Risk Level</span>
// //           <span>Visualization</span>
// //         </div>
// //         {correlationData.map((item, index) => (
// //           <div className="correlation-row" key={index}>
// //             <span>{item.pair}</span>
// //             <span>{item.correlation.toFixed(2)}</span>
// //             <span className={`risk-pill ${item.level.toLowerCase()}`}>
// //               {item.level}
// //             </span>
// //             <div className="bar-container">
// //               <div
// //                 className="bar-fill"
// //                 style={{
// //                   width: `${item.correlation * 100}%`,
// //                   backgroundColor: getBarColor(item.level),
// //                 }}
// //               ></div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CorrelationRisk;

// const correlationData = [
//   { pair: "AAPL / MSFT", correlation: 0.85, level: "High" },
// ];

// const getBarColor = (level) => {
//   switch (level) {
//     case "High":
//       return "#ff4d6d";
//     case "Medium":
//       return "#ffae42";
//     case "Low":
//       return "#2ecc71";
//     default:
//       return "#ccc";
//   }
// };

// const dailyWrap =
//   "*Daily Wrap:* Portfolio up +5%; Market trends: EURUSD spread up (3e-05), GBPUSD spread down (0.0001); Positive sentiment on tech stocks, negative on energy and MSFT.\n\n*Key Drivers:*\n• [AAPL] - Positive sentiment due to tech earnings";

// const CorrelationRisk = () => {
//   return (
//     <div className="correlation-risk d-flex flex-wrap gap-4">
//       <div className="flex-grow-1 correlation-table-box">
//         <h3 className="correlation-title">Portfolio Pulse</h3>
//         <div className="correlation-table">
//           <div className="correlation-header">
//             <span>Asset Pair</span>
//             <span>Correlation</span>
//             <span>Risk Level</span>
//             <span>Visualization</span>
//           </div>
//           {correlationData.map((item, index) => (
//             <div className="correlation-row" key={index}>
//               <span>{item.pair}</span>
//               <span>{item.correlation.toFixed(2)}</span>
//               <span className={`risk-pill ${item.level.toLowerCase()}`}>
//                 {item.level}
//               </span>
//               <div className="bar-container">
//                 <div
//                   className="bar-fill"
//                   style={{
//                     width: `${item.correlation * 100}%`,
//                     backgroundColor: getBarColor(item.level),
//                   }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div
//         className="wrap-box bg-dark text-white p-3 rounded"
//         style={{ flex: 1, minWidth: "300px", maxWidth: "500px" }}
//       >
//         <h5 className="mb-2">AI Daily Wrap</h5>
//         <pre style={{ whiteSpace: "pre-wrap" }}>{dailyWrap}</pre>
//       </div>
//     </div>
//   );
// };

// export default CorrelationRisk;

import { useState } from "react";

const correlationData = [
  { pair: "AAPL / MSFT", correlation: 0.85, level: "High" },
];

const getBarColor = (level) => {
  switch (level) {
    case "High":
      return "#ff4d6d";
    case "Medium":
      return "#ffae42";
    case "Low":
      return "#2ecc71";
    default:
      return "#ccc";
  }
};

const CorrelationRisk = () => {
  const [dailyWrap, setDailyWrap] = useState("Loading AI summary...");

  // useEffect(() => {
  //   fetch(
  //     "https://working-coral-hopelessly.ngrok-free.app/portfolio-commentary",
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         summary: { change_value: 25.99, percent_change: 5.0 },
  //         asset_allocation: { stocks: 75, crypto: 15, cash: 10 },
  //         portfolio_history: [],
  //         market_watch: [
  //           { symbol: "EURUSD", ask: 1.13323, bid: 1.1332, spread: 0.00003 },
  //           { symbol: "GBPUSD", ask: 1.2845, bid: 1.2844, spread: 0.0001 },
  //         ],
  //         sentiment: {
  //           AAPL: 0.12,
  //           MSFT: -0.08,
  //           TSLA: 0.25,
  //           NVDA: 0.18,
  //         },
  //         headlines: [
  //           "Fed holds rates steady amid inflation concerns",
  //           "Tech earnings beat expectations across the board",
  //           "Energy sector rallies on supply concerns",
  //         ],
  //       }),
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDailyWrap(data.response || "No summary available.");
  //     })
  //     .catch((err) => {
  //       console.error("Failed to fetch Portfolio Pulse:", err);
  //       setDailyWrap("❌ Failed to load AI summary.");
  //     });
  // }, []);

  return (
    <div className="correlation-risk d-flex flex-wrap gap-4">
      <div className="flex-grow-1 correlation-table-box">
        <h3 className="correlation-title">Portfolio Pulse</h3>
        <div className="correlation-table">
          <div className="correlation-header">
            <span>Asset Pair</span>
            <span>Correlation</span>
            <span>Risk Level</span>
            <span>Visualization</span>
          </div>
          {correlationData.map((item, index) => (
            <div className="correlation-row" key={index}>
              <span>{item.pair}</span>
              <span>{item.correlation.toFixed(2)}</span>
              <span className={`risk-pill ${item.level.toLowerCase()}`}>
                {item.level}
              </span>
              <div className="bar-container">
                <div
                  className="bar-fill"
                  style={{
                    width: `${item.correlation * 100}%`,
                    backgroundColor: getBarColor(item.level),
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div
        className="wrap-box bg-dark text-white p-3 rounded"
        style={{ flex: 1, minWidth: "300px", maxWidth: "500px" }}
      >
        <h5 className="mb-2">AI Daily Wrap</h5>
        <pre style={{ whiteSpace: "pre-wrap" }}>{dailyWrap}</pre>
      </div> */}
    </div>
  );
};

export default CorrelationRisk;
