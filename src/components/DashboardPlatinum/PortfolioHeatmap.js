// import axios from "axios";
// import { useEffect, useState } from "react";

// import HeatmapDetails from "./portfolioDetails/HeatmapDetails";
// import PortfolioDetails from "./portfolioDetails/PortfolioDetail";
// function PortfolioComponent() {
//   const [portfolio, setPortfolio] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchPortfolio();
//   }, []);

//   // const fetchPortfolio = async () => {
//   //   try {
//   //     const token = localStorage.getItem("accessToken"); // Assuming you store JWT token here
//   //     const response = await axios.get(
//   //       "https://valourwealthdjango-production.up.railway.app/api/portfolio/",
//   //       {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`,
//   //         },
//   //       }
//   //     );
//   //     setPortfolio(response.data);
//   //     setLoading(false);
//   //   } catch (error) {
//   //     console.error("Error fetching portfolio:", error);
//   //     setLoading(false);
//   //   }
//   // };
//   const fetchPortfolio = async () => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       const response = await axios.get(
//         "https://valourwealthdjango-production.up.railway.app/api/portfolio/",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = response.data;

//       // Format to match UI
//       const assets = [
//         {
//           id: 1,
//           asset_type: "stocks",
//           percentage: data.asset_allocation.stocks,
//           value: data.asset_allocation.stock_value,
//         },
//         {
//           id: 2,
//           asset_type: "crypto",
//           percentage: data.asset_allocation.crypto,
//           value: data.asset_allocation.crypto_value,
//         },
//       ];

//       // const formatted = {
//       //   total_value: data.summary.total_portfolio_value,
//       //   total_gain_loss: data.summary.change_value,
//       //   total_gain_loss_percent: data.summary.percent_change,
//       //   assets: assets,
//       // };
//       const formatted = {
//         total_value: data.portfolio_value,
//         total_gain_loss: 0, // or derive it if available
//         total_gain_loss_percent: 0, // or derive it if available
//         assets: [],
//         balance: data.account.balance,
//         equity: data.account.equity,
//       };

//       setPortfolio(formatted);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching portfolio:", error);
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div>Loading portfolio...</div>;
//   }

//   if (!portfolio) {
//     return <div>No portfolio data available.</div>;
//   }

//   return (
//     <div className="portfolio-container">
//       <div className="portfolio-header">
//         <div className="portfolio-title">
//           <div className="trophy-icon-container">
//             <i className="bi bi-briefcase"></i>
//           </div>
//         </div>

//         <div>
//           <h2 className="portfolio-title">Portfolio</h2>
//           <p className="portfolio-subtitle">
//             Track and manage your investments with exclusive platinum tools
//           </p>
//         </div>
//       </div>

//       <div className="dashboard-container">
//         <div className="row">
//           {/* Portfolio Summary Section */}
//           <div className="col-lg-8 pe-lg-2">
//             <div className="card summary-card p-0">
//               <div className="card-body">
//                 <h5 className="card-title">Portfolio Summary</h5>
//                 <div className="total-value-section">
//                   <div>
//                     <div className="small">Total Portfolio Value</div>
//                     <div className="total-value">
//                       ${parseFloat(portfolio.total_value).toLocaleString()}
//                       <span className="value-change">
//                         <i className="bi bi-arrow-up"></i> +$
//                         {parseFloat(
//                           portfolio.total_gain_loss
//                         ).toLocaleString()}{" "}
//                         ({portfolio.total_gain_loss_percent}%)
//                       </span>
//                     </div>
//                   </div>
//                   {/* <div className="button-group">
//                     <button className="btn btn-light">
//                       <i className="bi bi-plus"></i> Add Funds
//                     </button>
//                     <button className="btn btn-dark">
//                       <i className="bi bi-bar-chart-line"></i> Analytics
//                     </button>
//                   </div> */}
//                 </div>

//                 <div className="asset-categories">
//                   {portfolio.assets.map((asset) => (
//                     <div
//                       key={asset.id}
//                       className={`asset-card ${asset.asset_type}`}
//                     >
//                       <div className="asset-header">
//                         <span>
//                           {asset.asset_type.charAt(0).toUpperCase() +
//                             asset.asset_type.slice(1)}
//                         </span>
//                         <span className="asset-percentage">
//                           {asset.percentage}%
//                         </span>
//                       </div>
//                       <div className="asset-value">
//                         ${parseFloat(asset.value).toLocaleString()}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="chart-container">
//                   {/* Chart will come later */}
//                   <div className="chart-line"></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Asset Allocation Section */}
//           <div className="col-lg-4 ps-lg-2">
//             <div className="card allocation-card p-0">
//               <div className="card-body">
//                 <h5 className="card-title">Asset Allocation</h5>

//                 <div className="pie-chart-container">
//                   {/* Pie chart will come later */}
//                   <div className="pie-chart">
//                     <div className="pie-chart-inner"></div>
//                   </div>
//                 </div>

//                 <div className="allocation-breakdown">
//                   {portfolio.assets.map((asset) => (
//                     <div key={asset.id} className="allocation-item">
//                       <div>
//                         {asset.asset_type.charAt(0).toUpperCase() +
//                           asset.asset_type.slice(1)}
//                       </div>
//                       <div>{asset.percentage}%</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Future: PortfolioDetails + HeatmapDetails can be uncommented */}
//       <PortfolioDetails />
//       <HeatmapDetails />
//     </div>
//   );
// }

// export default PortfolioComponent;

import axios from "axios";
import { useEffect, useState } from "react";

import HeatmapDetails from "./portfolioDetails/HeatmapDetails";
import PortfolioDetails from "./portfolioDetails/PortfolioDetail";

function PortfolioComponent() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        "https://valourwealthdjango-production.up.railway.app/api/mt5-snapshot/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      const formatted = {
        total_value: data.portfolio_value || 0,
        total_gain_loss: 0, // 🔄 You can compute this later if needed
        total_gain_loss_percent: 0,
        assets: (data.assets || []).map((asset, index) => ({
          id: index + 1,
          asset_type: asset.asset_type || "",
          percentage: asset.percentage || 0,
          value: asset.value || 0, // optional if backend returns it
        })),

        // assets: (data.assets || []).map((assetType) => ({
        //   id: assetType,
        //   asset_type: assetType,
        //   percentage: 0, // 🔄 you can calculate allocation later if needed
        // })),
        balance: data.account?.balance || 0,
        equity: data.account?.equity || 0,
        margin: data.account?.margin || 0,
        free_margin: data.account?.free_margin || 0,
        leverage: data.account?.leverage || 0,
        market_watch: data.market_watch || [],
        recent_trades: data.recent_trades || [],
      };

      // const formatted = {
      //   total_value: data.portfolio_value,
      //   total_gain_loss: 0,
      //   total_gain_loss_percent: 0,
      //   assets: [],
      //   balance: data.account?.balance || 0,
      //   equity: data.account?.equity || 0,
      //   margin: data.account?.margin || 0,
      //   free_margin: data.account?.free_margin || 0,
      //   leverage: data.account?.leverage || 0,
      //   market_watch: data.market_watch || [],
      //   recent_trades: data.recent_trades || [],
      // };

      setPortfolio(formatted);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading portfolio...</div>;
  if (!portfolio) return <div>No portfolio data available.</div>;

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <div className="portfolio-title">
          <div className="trophy-icon-container">
            <i className="bi bi-briefcase"></i>
          </div>
        </div>
        <div>
          <h2 className="portfolio-title">Portfolio</h2>
          <p className="portfolio-subtitle">
            Track and manage your investments with exclusive platinum tools
          </p>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="row">
          <div className="col-lg-8 pe-lg-2">
            <div className="card summary-card p-0">
              <div className="card-body">
                <h5 className="card-title">Portfolio Summary</h5>
                <div className="total-value-section">
                  <div>
                    <div className="small">Total Portfolio Value</div>
                    <div className="total-value">
                      ${parseFloat(portfolio.total_value).toLocaleString()}
                      <span className="value-change">
                        <i className="bi bi-arrow-up"></i> +$
                        {parseFloat(
                          portfolio.total_gain_loss
                        ).toLocaleString()}{" "}
                        ({portfolio.total_gain_loss_percent}%)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="card heatmap-card">
                      <h5>Account Summary</h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Balance: ${portfolio.balance.toLocaleString()}
                        </li>
                        <li className="list-group-item">
                          Equity: ${portfolio.equity.toLocaleString()}
                        </li>
                        <li className="list-group-item">
                          Margin: ${portfolio.margin.toLocaleString()}
                        </li>
                        <li className="list-group-item">
                          Free Margin: ${portfolio.free_margin.toLocaleString()}
                        </li>
                        <li className="list-group-item">
                          Leverage: 1:{portfolio.leverage}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card heatmap-card">
                      <h5>Recent Trades</h5>
                      <table className="table table-sm">
                        <thead>
                          <tr>
                            <th>Symbol</th>
                            <th>Type</th>
                            <th>Volume</th>
                            <th>Price</th>
                            <th>Profit</th>
                          </tr>
                        </thead>
                        <tbody>
                          {portfolio.recent_trades.map((trade, idx) => (
                            <tr key={idx}>
                              <td>{trade.symbol || "-"}</td>
                              <td>{trade.type}</td>
                              <td>{trade.volume}</td>
                              <td>{trade.price}</td>
                              <td>${trade.profit}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="card heatmap-card mt-4">
                  <h5>Market Watch</h5>
                  <table className="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Bid</th>
                        <th>Ask</th>
                        <th>Spread</th>
                      </tr>
                    </thead>
                    <tbody>
                      {portfolio.market_watch.map((item, index) => (
                        <tr key={index}>
                          <td>{item.symbol}</td>
                          <td>{item.bid}</td>
                          <td>{item.ask}</td>
                          <td>{item.spread}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 ps-lg-2">
            <div className="card allocation-card p-0">
              <div className="card-body">
                <h5 className="card-title">Asset Allocation</h5>
                <div className="pie-chart-container">
                  <div className="pie-chart">
                    <div className="pie-chart-inner"></div>
                  </div>
                </div>
                <div className="allocation-breakdown">
                  {portfolio.assets.map((asset) => (
                    <div key={asset.id} className="allocation-item">
                      <div>
                        {asset.asset_type.charAt(0).toUpperCase() +
                          asset.asset_type.slice(1)}
                      </div>
                      <div>{asset.percentage}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PortfolioDetails />
      <HeatmapDetails />
    </div>
  );
}

export default PortfolioComponent;
