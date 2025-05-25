// import React, { useState } from "react";
// const API_KEY = "04RGF1U9PAJ49VYI";

// const StockTicker = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [stockData, setStockData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchStock = async (symbol) => {
//     if (!symbol) return;

//     setIsLoading(true);
//     setError("");

//     try {
//       const res = await fetch(
//         `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
//       );
//       const data = await res.json();

//       if (
//         data["Global Quote"] &&
//         Object.keys(data["Global Quote"]).length > 0
//       ) {
//         const quote = data["Global Quote"];

//         setStockData({
//           symbol: quote["01. symbol"],
//           price: parseFloat(quote["05. price"]).toFixed(2),
//           change: parseFloat(quote["09. change"]).toFixed(2),
//           changePercent: quote["10. change percent"].replace("%", ""),
//           open: parseFloat(quote["02. open"]).toFixed(4),
//           high: parseFloat(quote["03. high"]).toFixed(4),
//           low: parseFloat(quote["04. low"]).toFixed(4),
//           volume: quote["06. volume"],
//           prevClose: parseFloat(quote["08. previous close"]).toFixed(4),
//           companyName: getCompanyName(quote["01. symbol"]),
//         });
//       } else {
//         setError("Stock not found");
//         setStockData(null);
//       }
//     } catch (err) {
//       setError("Failed to fetch stock data");
//       setStockData(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const getCompanyName = (symbol) => {
//     const companies = {
//       AAPL: "Apple Inc.",
//       MSFT: "Microsoft Corp.",
//       GOOGL: "Alphabet Inc.",
//       AMZN: "Amazon.com Inc.",
//       META: "Meta Platforms Inc.",
//       TSLA: "Tesla Inc.",
//       NVDA: "NVIDIA Corp.",
//       JPM: "JPMorgan Chase & Co.",
//     };
//     return companies[symbol] || `${symbol} Stock`;
//   };

//   const handleSearch = () => {
//     if (searchQuery.trim()) {
//       fetchStock(searchQuery.trim().toUpperCase());
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const handleBack = () => {
//     setStockData(null);
//     setSearchQuery("");
//   };

//   return (
//     <div className="stock-ticker p-0">
//       {!stockData ? (
//         <div className="search-only-container">
//           <div className="search-container">
//             <input
//               type="text"
//               className="search-bar"
//               placeholder="Search ticker (e.g., AMZN, AAPL)"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyDown={handleKeyDown}
//             />
//             <button className="search-button" onClick={handleSearch}>
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <line x1="21" y1="21" x2="16.65" y2="16.65" />
//               </svg>
//             </button>
//           </div>
//           {isLoading && <div className="loading">Loading...</div>}
//           {error && <div className="error">{error}</div>}
//         </div>
//       ) : (
//         <>
//           <div className="search-container">
//             <input
//               type="text"
//               className="search-bar"
//               placeholder="Search ticker (e.g., AMZN, AAPL)"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyDown={handleKeyDown}
//             />
//             <button className="search-button" onClick={handleSearch}>
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <line x1="21" y1="21" x2="16.65" y2="16.65" />
//               </svg>
//             </button>
//           </div>

//           {isLoading && <div className="loading">Loading...</div>}
//           {error && <div className="error">{error}</div>}

//           <div className="stock-details">
//             <div className="back-link" onClick={handleBack}>
//               {/* Back to watchlist */}
//             </div>

//             <div className="stock-header">
//               <div className="column headers">
//                 <div>Symbol</div>
//                 <div>Trend</div>
//                 <div>Price</div>
//               </div>

//               <div className="column data">
//                 <div className="symbol-container">
//                   <div className="close-button" onClick={handleBack}>
//                     ×
//                   </div>
//                   <div className="symbol">{stockData.symbol}</div>
//                   <div className="company-name">{stockData.companyName}</div>
//                 </div>

//                 <div className="trend">
//                   <svg
//                     viewBox="0 0 100 30"
//                     className={
//                       parseFloat(stockData.change) >= 0
//                         ? "trend-up"
//                         : "trend-down"
//                     }
//                   >
//                     <path
//                       d={
//                         parseFloat(stockData.change) >= 0
//                           ? "M0,20 Q25,15 50,10 T100,5"
//                           : "M0,5 Q25,10 50,15 T100,20"
//                       }
//                     />
//                   </svg>
//                 </div>

//                 <div className="price-container">
//                   <div className="price">${stockData.price}</div>
//                   <div
//                     className={`change ${
//                       parseFloat(stockData.change) >= 0
//                         ? "positive"
//                         : "negative"
//                     }`}
//                   >
//                     {parseFloat(stockData.change) >= 0 ? "+" : ""}
//                     {stockData.changePercent}%
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="stock-details-rows">
//               <div className="detail-row">
//                 <div className="detail-label">Open:</div>
//                 <div className="detail-value">${stockData.open}</div>
//               </div>
//               <div className="detail-row">
//                 <div className="detail-label">High:</div>
//                 <div className="detail-value">${stockData.high}</div>
//               </div>
//               <div className="detail-row">
//                 <div className="detail-label">Low:</div>
//                 <div className="detail-value">${stockData.low}</div>
//               </div>
//               <div className="detail-row">
//                 <div className="detail-label">Volume:</div>
//                 <div className="detail-value">
//                   {stockData.volume !== "NaN" ? stockData.volume : "NaN"}
//                 </div>
//               </div>
//               <div className="detail-row">
//                 <div className="detail-label">Prev Close:</div>
//                 <div className="detail-value">${stockData.prevClose}</div>
//               </div>
//             </div>

//             {/* <div className="historical-data-link">
//               <a href="#view-historical">View Historical Data</a>
//             </div> */}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default StockTicker;

// import React, { useState } from "react";
// const API_KEY = "04RGF1U9PAJ49VYI";

// const StockTicker = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [stockData, setStockData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchStock = async (symbol) => {
//     if (!symbol) return;

//     setIsLoading(true);
//     setError("");

//     try {
//       const res = await fetch(
//         https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}
//       );
//       const data = await res.json();

//       if (
//         data["Global Quote"] &&
//         Object.keys(data["Global Quote"]).length > 0
//       ) {
//         const quote = data["Global Quote"];

//         setStockData({
//           symbol: quote["01. symbol"],
//           price: parseFloat(quote["05. price"]).toFixed(2),
//           change: parseFloat(quote["09. change"]).toFixed(2),
//           changePercent: quote["10. change percent"].replace("%", ""),
//           open: parseFloat(quote["02. open"]).toFixed(4),
//           high: parseFloat(quote["03. high"]).toFixed(4),
//           low: parseFloat(quote["04. low"]).toFixed(4),
//           volume: quote["06. volume"],
//           prevClose: parseFloat(quote["08. previous close"]).toFixed(4),
//           companyName: getCompanyName(quote["01. symbol"]),
//         });
//       } else {
//         setError("Stock not found");
//         setStockData(null);
//       }
//     } catch (err) {
//       setError("Failed to fetch stock data");
//       setStockData(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const getCompanyName = (symbol) => {
//     const companies = {
//       AAPL: "Apple Inc.",
//       MSFT: "Microsoft Corp.",
//       GOOGL: "Alphabet Inc.",
//       AMZN: "Amazon.com Inc.",
//       META: "Meta Platforms Inc.",
//       TSLA: "Tesla Inc.",
//       NVDA: "NVIDIA Corp.",
//       JPM: "JPMorgan Chase & Co.",
//     };
//     return companies[symbol] || ${symbol} Stock;
//   };

//   const handleSearch = () => {
//     if (searchQuery.trim()) {
//       fetchStock(searchQuery.trim().toUpperCase());
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const handleBack = () => {
//     setStockData(null);
//     setSearchQuery("");
//   };

//   return (
//     <div className="stock-ticker p-0">
//       {!stockData ? (
//         <div className="search-only-container">
//           <div className="search-container">
//             <input
//               type="text"
//               className="search-bar"
//               placeholder="Search ticker (e.g., AMZN, AAPL)"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyDown={handleKeyDown}
//             />
//             <button className="search-button" onClick={handleSearch}>
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <line x1="21" y1="21" x2="16.65" y2="16.65" />
//               </svg>
//             </button>
//           </div>
//           {isLoading && <div className="loading">Loading...</div>}
//           {error && <div className="error">{error}</div>}
//         </div>
//       ) : (
//         <>
//           <div className="search-container">
//             <input
//               type="text"
//               className="search-bar"
//               placeholder="Search ticker (e.g., AMZN, AAPL)"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyDown={handleKeyDown}
//             />
//             <button className="search-button" onClick={handleSearch}>
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <line x1="21" y1="21" x2="16.65" y2="16.65" />
//               </svg>
//             </button>
//           </div>

//           {isLoading && <div className="loading">Loading...</div>}
//           {error && <div className="error">{error}</div>}

//           <div className="stock-details">
//             <div className="back-link" onClick={handleBack}>
//               {/* Back to watchlist */}
//             </div>

//             <div className="stock-header">
//               <div className="column headers">
//                 <div>Symbol</div>
//                 <div>Trend</div>
//                 <div>Price</div>
//               </div>

//               <div className="column data">
//                 <div className="symbol-container">
//                   <div className="close-button" onClick={handleBack}>
//                     ×
//                   </div>
//                   <div className="symbol">{stockData.symbol}</div>
//                   <div className="company-name">{stockData.companyName}</div>
//                 </div>

//                 <div className="trend">
//                   <svg
//                     viewBox="0 0 100 30"
//                     className={
//                       parseFloat(stockData.change) >= 0
//                         ? "trend-up"
//                         : "trend-down"
//                     }
//                   >
//                     <path
//                       d={
//                         parseFloat(stockData.change) >= 0
//                           ? "M0,20 Q25,15 50,10 T100,5"
//                           : "M0,5 Q25,10 50,15 T100,20"
//                       }
//                     />
//                   </svg>
//                 </div>

//                 <div className="price-container">
//                   <div className="price">${stockData.price}</div>
//                   <div
//                     className={`change ${
//                       parseFloat(stockData.change) >= 0
//                         ? "positive"
//                         : "negative"
//                     }`}
//                   >
//                     {parseFloat(stockData.change) >= 0 ? "+" : ""}
//                     {stockData.changePercent}%
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="stock-details-rows">
//               <div className="detail-row">
//                 <div className="detail-label">Open:</div>
//                 <div className="detail-value">${stockData.open}</div>
//               </div>
//               <div className="detail-row">
//                 <div className="detail-label">High:</div>
//                 <div className="detail-value">${stockData.high}</div>
//               </div>
//               <div className="detail-row">
//                 <div className="detail-label">Low:</div>
//                 <div className="detail-value">${stockData.low}</div>
//               </div>
//               <div className="detail-row">
//                 <div className="detail-label">Volume:</div>
//                 <div className="detail-value">
//                   {stockData.volume !== "NaN" ? stockData.volume : "NaN"}
//                 </div>
//               </div>
//               <div className="detail-row">
//                 <div className="detail-label">Prev Close:</div>
//                 <div className="detail-value">${stockData.prevClose}</div>
//               </div>
//             </div>

//             {/* <div className="historical-data-link">
//               <a href="#view-historical">View Historical Data</a>
//             </div> */}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default StockTicker;

import { useState } from "react";

const API_KEY = "04RGF1U9PAJ49VYI";

const StockTicker = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [stockData, setStockData] = useState(null);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchStock = async (symbol) => {
    if (!symbol) return;

    setIsLoading(true);
    setError("");
    setNewsArticles([]);

    try {
      const res = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
      );
      const data = await res.json();

      if (
        data["Global Quote"] &&
        Object.keys(data["Global Quote"]).length > 0
      ) {
        const quote = data["Global Quote"];

        setStockData({
          symbol: quote["01. symbol"],
          price: parseFloat(quote["05. price"]).toFixed(2),
          change: parseFloat(quote["09. change"]).toFixed(2),
          changePercent: quote["10. change percent"].replace("%", ""),
          open: parseFloat(quote["02. open"]).toFixed(4),
          high: parseFloat(quote["03. high"]).toFixed(4),
          low: parseFloat(quote["04. low"]).toFixed(4),
          volume: quote["06. volume"],
          prevClose: parseFloat(quote["08. previous close"]).toFixed(4),
          companyName: getCompanyName(quote["01. symbol"]),
        });

        fetchNews(symbol);
      } else {
        setError("Stock not found");
        setStockData(null);
      }
    } catch (err) {
      setError("Failed to fetch stock data");
      setStockData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchNews = async (symbol) => {
    try {
      const res = await fetch(
        `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${symbol}&apikey=${API_KEY}`
      );
      const data = await res.json();
      const feed = data.feed || [];
      setNewsArticles(feed.slice(0, 5));
    } catch (err) {
      console.error("Failed to fetch news", err);
    }
  };

  const getCompanyName = (symbol) => {
    const companies = {
      AAPL: "Apple Inc.",
      MSFT: "Microsoft Corp.",
      GOOGL: "Alphabet Inc.",
      AMZN: "Amazon.com Inc.",
      META: "Meta Platforms Inc.",
      TSLA: "Tesla Inc.",
      NVDA: "NVIDIA Corp.",
      JPM: "JPMorgan Chase & Co.",
    };
    return companies[symbol] || "${symbol} Stock";
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      fetchStock(searchQuery.trim().toUpperCase());
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleBack = () => {
    setStockData(null);
    setSearchQuery("");
    setNewsArticles([]);
  };

  return (
    <div className="stock-ticker p-0">
      {!stockData ? (
        <div className="search-only-container">
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search ticker (e.g., AMZN, AAPL)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="search-button" onClick={handleSearch}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
          {isLoading && <div className="loading">Loading...</div>}
          {error && <div className="error">{error}</div>}
        </div>
      ) : (
        <>
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search ticker (e.g., AMZN, AAPL)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="search-button" onClick={handleSearch}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>

          {isLoading && <div className="loading">Loading...</div>}
          {error && <div className="error">{error}</div>}

          <div className="stock-details">
            <div className="back-link" onClick={handleBack}></div>

            <div className="stock-header">
              <div className="column headers">
                <div>Symbol</div>
                <div>Trend</div>
                <div>Price</div>
              </div>

              <div className="column data">
                <div className="symbol-container">
                  <div className="close-button" onClick={handleBack}>
                    ×
                  </div>
                  <div className="symbol">{stockData.symbol}</div>
                  <div className="company-name">{stockData.companyName}</div>
                </div>

                <div className="trend">
                  <svg
                    viewBox="0 0 100 30"
                    className={
                      parseFloat(stockData.change) >= 0
                        ? "trend-up"
                        : "trend-down"
                    }
                  >
                    <path
                      d={
                        parseFloat(stockData.change) >= 0
                          ? "M0,20 Q25,15 50,10 T100,5"
                          : "M0,5 Q25,10 50,15 T100,20"
                      }
                    />
                  </svg>
                </div>

                <div className="price-container">
                  <div className="price">${stockData.price}</div>
                  <div
                    className={`change ${
                      parseFloat(stockData.change) >= 0
                        ? "positive"
                        : "negative"
                    }`}
                  >
                    {parseFloat(stockData.change) >= 0 ? "+" : ""}
                    {stockData.changePercent}%
                  </div>
                </div>
              </div>
            </div>

            <div className="stock-details-rows">
              <div className="detail-row">
                <div className="detail-label">Open:</div>
                <div className="detail-value">${stockData.open}</div>
              </div>
              <div className="detail-row">
                <div className="detail-label">High:</div>
                <div className="detail-value">${stockData.high}</div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Low:</div>
                <div className="detail-value">${stockData.low}</div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Volume:</div>
                <div className="detail-value">
                  {stockData.volume !== "NaN" ? stockData.volume : "NaN"}
                </div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Prev Close:</div>
                <div className="detail-value">${stockData.prevClose}</div>
              </div>
            </div>

            {newsArticles.length > 0 && (
              <div className="news-section-ticker">
                <h4 className="news-title">
                  Latest News on {stockData.symbol}
                </h4>
                {newsArticles.map((article, index) => (
                  <div key={index} className="news-article">
                    <div className="news-headline">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {article.title}
                      </a>
                    </div>
                    <div className="news-meta">
                      <span>
                        {new Date(article.time_published).toLocaleString()}
                      </span>
                      <span className="news-source"> | {article.source}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default StockTicker;
