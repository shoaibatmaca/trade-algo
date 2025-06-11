// import { useEffect, useState } from "react";

// const StockDashboard = () => {
//   const API_KEY = "04RGF1U9PAJ49VYI";
//   const BASE_URL = "https://www.alphavantage.co/query";

//   const [tickers, setTickers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState("1 Hour");

//   const tickerSymbols = [
//     "AAPL",
//     "MSFT",
//     "GOOGL",
//     "AMZN",
//     "TSLA",
//     "META",
//     "NVDA",
//     "SPY",
//     "QQQ",
//     "NFLX",
//   ];

//   const fetchStockData = async (symbol) => {
//     try {
//       const response = await fetch(
//         `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
//       );
//       const data = await response.json();

//       if (data["Global Quote"]) {
//         const quote = data["Global Quote"];
//         return {
//           symbol: quote["01. symbol"],
//           price: parseFloat(quote["05. price"]).toFixed(2),
//           change: parseFloat(quote["09. change"]).toFixed(2),
//           changePercent: parseFloat(
//             quote["10. change percent"].replace("%", "")
//           ).toFixed(2),
//         };
//       }
//       return null;
//     } catch (error) {
//       console.error(`Error fetching data for ${symbol}:, error`);
//       return null;
//     }
//   };

//   const getCompanyName = (symbol) => {
//     const names = {
//       AAPL: "Apple Inc. Common Stock",
//       MSFT: "Microsoft Corp",
//       GOOGL: "Alphabet Inc. Class A",
//       AMZN: "Amazon.com Inc.",
//       TSLA: "Tesla Inc. Common Stock",
//       META: "Meta Platforms Inc.",
//       NVDA: "NVIDIA Corporation",
//       SPY: "SPDR S&P 500 ETF Trust",
//       QQQ: "Invesco QQQ Trust Series 1",
//       NFLX: "Netflix Inc. Common Stock",
//     };
//     return names[symbol] || symbol;
//   };

//   useEffect(() => {
//     const fetchAllTickers = async () => {
//       setLoading(true);
//       const results = [];
//       for (let i = 0; i < tickerSymbols.length; i++) {
//         const stock = await fetchStockData(tickerSymbols[i]);
//         if (stock) results.push(stock);
//         if (i < tickerSymbols.length - 1) {
//           await new Promise((resolve) => setTimeout(resolve, 500));
//         }
//       }
//       setTickers(results);
//       setLoading(false);
//     };
//     fetchAllTickers();
//   }, []);

//   const formatPrice = (price) => `$${price}`;
//   const formatPercent = (percent) => {
//     const value = parseFloat(percent);
//     const sign = value >= 0 ? "+" : "";
//     return `${sign}${percent}%`;
//   };

//   const refreshData = () => {
//     setLoading(true);
//     setTickers([]);
//     const fetchAllTickers = async () => {
//       const results = [];
//       for (let i = 0; i < tickerSymbols.length; i++) {
//         const stock = await fetchStockData(tickerSymbols[i]);
//         if (stock) results.push(stock);
//         if (i < tickerSymbols.length - 1) {
//           await new Promise((resolve) => setTimeout(resolve, 500));
//         }
//       }
//       setTickers(results);
//       setLoading(false);
//     };
//     fetchAllTickers();
//   };

//   return (
//     <>
//       <style>{`
//         body {
//           font-family: 'Inter', sans-serif;
//           margin: 0;
//           padding: 0;
//           overflow-x: hidden;
//         }

//         .main-container {
//           min-height: 100vh;
//           padding: 2rem;
//           position: relative;
//         }

//         .ticker-container {
//           position: relative;
//           max-width: 800px;
//           margin: 0 auto;
//         }

//         .ticker-card {
//           background: rgba(255, 255, 255, 0.05);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 24px;
//           box-shadow: 0 32px 64px rgba(0, 0, 0, 0.4),
//                       0 16px 32px rgba(0, 0, 0, 0.3),
//                       inset 0 1px 0 rgba(255, 255, 255, 0.1);
//           overflow: hidden;
//           position: relative;
//         }

//         .ticker-header {
//           padding: 2rem 2rem 1rem 2rem;
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
//           border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .ticker-title {
//           font-weight: 800;
//           font-size: 2rem;
//           background: linear-gradient(135deg, #ffffff, #e0e0e0);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           margin: 0;
//         }

//         .ticker-list {
//           max-height: 600px;
//           overflow-y: auto;
//           padding: 0;
//           margin: 0;
//         }

//         .ticker-item {
//           padding: 1.5rem 2rem;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.05);
//           position: relative;
//         }

//         .ticker-item::before {
//           content: '';
//           position: absolute;
//           left: 0;
//           top: 0;
//           height: 100%;
//           width: 4px;
//           background: transparent;
//         }

//         .ticker-item.positive::before {
//           background: linear-gradient(180deg, #10b981, #059669);
//         }

//         .ticker-item.negative::before {
//           background: linear-gradient(180deg, #ef4444, #dc2626);
//         }

//         .ticker-symbol {
//           font-weight: 700;
//           font-size: 1.3rem;
//           background: linear-gradient(135deg, #ffffff, #e0e0e0);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           margin-bottom: 4px;
//         }

//         .ticker-company {
//           color: #9ca3af;
//           font-size: 0.85rem;
//           font-weight: 400;
//         }

//         .ticker-price {
//           font-weight: 700;
//           font-size: 1.4rem;
//           color: #ffffff;
//         }

//         .ticker-change {
//           font-weight: 600;
//           font-size: 0.95rem;
//           padding: 4px 12px;
//           border-radius: 8px;
//           display: inline-block;
//         }

//         .ticker-change.positive {
//           color: #10b981;
//           background: rgba(16, 185, 129, 0.1);
//         }

//         .ticker-change.negative {
//           color: #ef4444;
//           background: rgba(239, 68, 68, 0.1);
//         }

//         .loading-container {
//           padding: 3rem;
//           text-align: center;
//         }

//         .loading-text {
//           color: #9ca3af;
//           font-size: 1.1rem;
//           font-weight: 500;
//         }

//         /* Forcefully remove all animations or transforms */
//         .ticker-container, .ticker-card, .ticker-card * {
//           animation: none !important;
//           transform: none !important;
//           transition: none !important;
//         }
//       `}</style>

//       <div className="main-containers">
//         <div className="ticker-container">
//           <div className="ticker-card">
//             <div className="ticker-header">
//               <div className="d-flex align-items-center justify-content-between">
//                 <h1 className="ticker-title">Popular Tickers</h1>
//               </div>
//             </div>

//             {loading ? (
//               <div className="loading-container">
//                 <div className="loading-text">Loading market data...</div>
//               </div>
//             ) : (
//               <div className="ticker-list">
//                 {tickers.map((ticker) => {
//                   const isPositive = parseFloat(ticker.changePercent) >= 0;
//                   return (
//                     <div
//                       key={ticker.symbol}
//                       className={`ticker-item ${
//                         isPositive ? "positive" : "negative"
//                       }`}
//                     >
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div>
//                           <div className="ticker-symbol">{ticker.symbol}</div>
//                           <div className="ticker-company">
//                             {getCompanyName(ticker.symbol)}
//                           </div>
//                         </div>
//                         <div className="text-end">
//                           <div className="ticker-price">
//                             {formatPrice(ticker.price)}
//                           </div>
//                           <div
//                             className={
//                               ticker -
//                               `change ${isPositive ? "positive" : "negative"}`
//                             }
//                           >
//                             {formatPercent(ticker.changePercent)}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StockDashboard;

import { useEffect, useState } from "react";

const StockDashboard = () => {
  const API_KEY = "04RGF1U9PAJ49VYI";
  const BASE_URL = "https://www.alphavantage.co/query";

  const [tickers, setTickers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("1 Hour");
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [optionsData, setOptionsData] = useState([]);
  const [expandedSymbol, setExpandedSymbol] = useState(null);

  const tickerSymbols = [
    "AAPL",
    "MSFT",
    "GOOGL",
    "AMZN",
    "TSLA",
    "META",
    "NVDA",
    "SPY",
    "QQQ",
    "NFLX",
  ];

  const fetchStockData = async (symbol) => {
    try {
      const response = await fetch(
        `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data["Global Quote"]) {
        const quote = data["Global Quote"];
        return {
          symbol: quote["01. symbol"],
          price: parseFloat(quote["05. price"]).toFixed(2),
          change: parseFloat(quote["09. change"]).toFixed(2),
          changePercent: parseFloat(
            quote["10. change percent"].replace("%", "")
          ).toFixed(2),
        };
      }
      return null;
    } catch (error) {
      console.error(`Error fetching data for ${symbol}:, error`);
      return null;
    }
  };

  const fetchOptionsData = async (symbol) => {
    if (expandedSymbol === symbol) {
      setExpandedSymbol(null);
      setOptionsData([]); // Clear on collapse
      return;
    }

    try {
      const response = await fetch(
        `${BASE_URL}?function=REALTIME_OPTIONS&symbol=${symbol}&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data?.data?.length > 0) {
        setOptionsData(data.data);
      } else {
        setOptionsData([]); // Ensure table doesn't show
      }

      setExpandedSymbol(symbol);
    } catch (err) {
      console.error("Error fetching options data:", err);
      setOptionsData([]);
      setExpandedSymbol(symbol);
    }
  };

  const thStyle = {
    padding: "10px 12px",
    whiteSpace: "nowrap",
    borderBottom: "1px solid #444",
    fontWeight: "600",
    textAlign: "center",
  };

  const tdStyle = {
    padding: "8px 10px",
    whiteSpace: "nowrap",
    textAlign: "center",
    color: "#ccc",
  };

  const getCompanyName = (symbol) => {
    const names = {
      AAPL: "Apple Inc. Common Stock",
      MSFT: "Microsoft Corp",
      GOOGL: "Alphabet Inc. Class A",
      AMZN: "Amazon.com Inc.",
      TSLA: "Tesla Inc. Common Stock",
      META: "Meta Platforms Inc.",
      NVDA: "NVIDIA Corporation",
      SPY: "SPDR S&P 500 ETF Trust",
      QQQ: "Invesco QQQ Trust Series 1",
      NFLX: "Netflix Inc. Common Stock",
    };
    return names[symbol] || symbol;
  };

  useEffect(() => {
    const fetchAllTickers = async () => {
      setLoading(true);
      const results = [];
      for (let i = 0; i < tickerSymbols.length; i++) {
        const stock = await fetchStockData(tickerSymbols[i]);
        if (stock) results.push(stock);
        if (i < tickerSymbols.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
      setTickers(results);
      setLoading(false);
    };
    fetchAllTickers();
  }, []);

  const formatPrice = (price) => `$${price}`;
  const formatPercent = (percent) => {
    const value = parseFloat(percent);
    const sign = value >= 0 ? "+" : "";
    return `${sign}${percent}%`;
  };

  const refreshData = () => {
    setLoading(true);
    setTickers([]);
    const fetchAllTickers = async () => {
      const results = [];
      for (let i = 0; i < tickerSymbols.length; i++) {
        const stock = await fetchStockData(tickerSymbols[i]);
        if (stock) results.push(stock);
        if (i < tickerSymbols.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
      setTickers(results);
      setLoading(false);
    };
    fetchAllTickers();
  };

  return (
    <>
      <style>{`
        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .main-container {
          min-height: 100vh;
          padding: 2rem;
          position: relative;
        }

        .ticker-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .ticker-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          box-shadow: 0 32px 64px rgba(0, 0, 0, 0.4),
                      0 16px 32px rgba(0, 0, 0, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1);
          overflow: hidden;
          position: relative;
        }

        .ticker-header {
          padding: 2rem 2rem 1rem 2rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .ticker-title {
          font-weight: 800;
          font-size: 2rem;
          background: linear-gradient(135deg, #ffffff, #e0e0e0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .ticker-list {
          max-height: 600px;
          overflow-y: auto;
          padding: 0;
          margin: 0;
        }

        .ticker-item {
          padding: 1.5rem 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }

        .ticker-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 4px;
          background: transparent;
        }

        .ticker-item.positive::before {
          background: linear-gradient(180deg, #10b981, #059669);
        }

        .ticker-item.negative::before {
          background: linear-gradient(180deg, #ef4444, #dc2626);
        }

        .ticker-symbol {
          font-weight: 700;
          font-size: 1.3rem;
          background: linear-gradient(135deg, #ffffff, #e0e0e0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }

        .ticker-company {
          color: #9ca3af;
          font-size: 0.85rem;
          font-weight: 400;
        }

        .ticker-price {
          font-weight: 700;
          font-size: 1.4rem;
          color: #ffffff;
        }

        .ticker-change {
          font-weight: 600;
          font-size: 0.95rem;
          padding: 4px 12px;
          border-radius: 8px;
          display: inline-block;
        }

        .ticker-change.positive {
          color: #10b981;
          background: rgba(16, 185, 129, 0.1);
        }

        .ticker-change.negative {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }

        .loading-container {
          padding: 3rem;
          text-align: center;
        }

        .loading-text {
          color: #9ca3af;
          font-size: 1.1rem;
          font-weight: 500;
        }

        /* Forcefully remove all animations or transforms */
        .ticker-container, .ticker-card, .ticker-card * {
          animation: none !important;
          transform: none !important;
          transition: none !important;
        }
      `}</style>

      <div className="main-containers">
        <div className="ticker-container">
          <div className="ticker-card">
            <div className="ticker-header">
              <div className="d-flex align-items-center justify-content-between">
                <h1 className="ticker-title">Popular Tickers</h1>
              </div>
            </div>

            {loading ? (
              <div className="loading-container">
                <div className="loading-text">Loading market data...</div>
              </div>
            ) : (
              <div className="ticker-list">
                {tickers.map((ticker) => {
                  const isPositive = parseFloat(ticker.changePercent) >= 0;
                  const isExpanded = expandedSymbol === ticker.symbol;

                  return (
                    <div
                      key={ticker.symbol}
                      className={`ticker-item ${
                        isPositive ? "positive" : "negative"
                      }`}
                      onClick={() => fetchOptionsData(ticker.symbol)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="ticker-symbol">{ticker.symbol}</div>
                          <div className="ticker-company">
                            {getCompanyName(ticker.symbol)}
                          </div>
                        </div>
                        <div className="text-end">
                          <div className="ticker-price">
                            {formatPrice(ticker.price)}
                          </div>
                          <div
                            className={`ticker-change ${
                              isPositive ? "positive" : "negative"
                            }`}
                          >
                            {formatPercent(ticker.changePercent)}
                          </div>
                        </div>
                      </div>

                      {isExpanded &&
                        expandedSymbol === ticker.symbol &&
                        optionsData.length > 0 && (
                          <div style={{ marginTop: "1rem", overflowX: "auto" }}>
                            <table
                              className="topsearchticker"
                              style={{
                                width: "1200px",
                                minWidth: "1000px",
                                fontSize: "0.85rem",
                                color: "#ccc",
                                borderCollapse: "collapse",
                                backgroundColor: "rgba(255,255,255,0.02)",
                                border: "1px solid #333",
                                borderRadius: "8px",
                              }}
                            >
                              <thead>
                                <tr
                                  style={{
                                    borderBottom: "1px solid #444",
                                    backgroundColor: "#1e1e1e",
                                    color: "#fff",
                                  }}
                                >
                                  <th style={thStyle}>Contract ID</th>
                                  <th style={thStyle}>Type</th>
                                  <th style={thStyle}>Strike</th>
                                  <th style={thStyle}>Last</th>
                                  <th style={thStyle}>Mark</th>
                                  <th style={thStyle}>Bid</th>
                                  <th style={thStyle}>Bid Size</th>
                                  <th style={thStyle}>Ask</th>
                                  <th style={thStyle}>Ask Size</th>
                                  <th style={thStyle}>Volume</th>
                                  <th style={thStyle}>Open Interest</th>
                                  <th style={thStyle}>Expiration</th>
                                  <th style={thStyle}>Quote Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                {optionsData.map((opt) => (
                                  <tr
                                    key={opt.contractID}
                                    style={{
                                      borderBottom: "1px solid #2a2a2a",
                                    }}
                                  >
                                    <td style={tdStyle}>{opt.contractID}</td>
                                    <td style={tdStyle}>{opt.type}</td>
                                    <td style={tdStyle}>{opt.strike}</td>
                                    <td style={tdStyle}>{opt.last}</td>
                                    <td style={tdStyle}>{opt.mark}</td>
                                    <td style={tdStyle}>{opt.bid}</td>
                                    <td style={tdStyle}>{opt.bid_size}</td>
                                    <td style={tdStyle}>{opt.ask}</td>
                                    <td style={tdStyle}>{opt.ask_size}</td>
                                    <td style={tdStyle}>{opt.volume}</td>
                                    <td style={tdStyle}>{opt.open_interest}</td>
                                    <td style={tdStyle}>{opt.expiration}</td>
                                    <td style={tdStyle}>{opt.date}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StockDashboard;
