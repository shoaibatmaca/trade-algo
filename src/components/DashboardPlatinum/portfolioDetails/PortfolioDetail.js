// import React, { useState } from 'react';

// function PortfolioDetailsBootstrap() {
//   const [activeTab, setActiveTab] = useState('open-positions');

//   const openPositionsData = [
//     {
//       id: 1,
//       asset: 'AAPL',
//       type: 'Stock',
//       quantity: 50,
//       entryPrice: 175.50,
//       currentPrice: 182.75,
//       value: 9137.50,
//       pl: 362.50,
//       plPercentage: 4.13
//     },
//     {
//       id: 2,
//       asset: 'BTC',
//       type: 'Crypto',
//       quantity: 0.75,
//       entryPrice: 58450.00,
//       currentPrice: 63245.00,
//       value: 47433.75,
//       pl: 3596.25,
//       plPercentage: 8.20
//     },
//     {
//       id: 3,
//       asset: 'EUR/USD',
//       type: 'Forex',
//       quantity: 100000,
//       entryPrice: 1.0750,
//       currentPrice: 1.0850,
//       value: 108500.00,
//       pl: 1000.00,
//       plPercentage: 0.93
//     },
//     {
//       id: 4,
//       asset: 'GOLD',
//       type: 'Commodity',
//       quantity: 10,
//       entryPrice: 2280.50,
//       currentPrice: 2345.50,
//       value: 23455.00,
//       pl: 650.00,
//       plPercentage: 2.85
//     },
//     {
//       id: 5,
//       asset: 'TSLA',
//       type: 'Stock',
//       quantity: 25,
//       entryPrice: 195.75,
//       currentPrice: 187.50,
//       value: 4687.50,
//       pl: -206.25,
//       plPercentage: -4.21
//     }
//   ];

//   const recentTransactionsData = [
//     {
//       id: 1,
//       date: '2025-04-16',
//       asset: 'AAPL',
//       type: 'Buy',
//       quantity: 10,
//       price: 182.75,
//       total: 1827.50,
//       status: 'Completed'
//     },
//     {
//       id: 2,
//       date: '2025-04-15',
//       asset: 'BTC',
//       type: 'Sell',
//       quantity: 0.25,
//       price: 63245.00,
//       total: 15811.25,
//       status: 'Completed'
//     },
//     {
//       id: 3,
//       date: '2025-04-14',
//       asset: 'GOLD',
//       type: 'Buy',
//       quantity: 5,
//       price: 2345.50,
//       total: 11727.50,
//       status: 'Completed'
//     },
//     {
//       id: 4,
//       date: '2025-04-13',
//       asset: 'TSLA',
//       type: 'Buy',
//       quantity: 15,
//       price: 187.50,
//       total: 2812.50,
//       status: 'Completed'
//     },
//     {
//       id: 5,
//       date: '2025-04-10',
//       asset: 'EUR/USD',
//       type: 'Sell',
//       quantity: 25000,
//       price: 1.0850,
//       total: 27125.00,
//       status: 'Completed'
//     }
//   ];

//   return (
//     <div className="container-fluid portfolio-details-container">
//       <div className="row">
//         <div className="col-12">
//           <h2 className="details-title">Portfolio Details</h2>

//           <div className="tabs-container mb-4">
//         <div className="nav-tabs">
//             <button
//             className={`tab-button ${activeTab === 'open-positions' ? 'active' : ''}`}
//             onClick={() => setActiveTab('open-positions')}
//             >
//             Open Positions
//             </button>
//             <button
//             className={`tab-button ${activeTab === 'recent-transactions' ? 'active' : ''}`}
//             onClick={() => setActiveTab('recent-transactions')}
//             >
//             Recent Transactions
//             </button>
//         </div>
//         </div>

//           {activeTab === 'open-positions' && (
//             <div className="table-responsive">
//               <table className="table table-dark custom-table">
//                 <thead>
//                   <tr>
//                     <th scope="col">Asset</th>
//                     <th scope="col">Type</th>
//                     <th scope="col">Quantity</th>
//                     <th scope="col">Entry Price</th>
//                     <th scope="col">Current Price</th>
//                     <th scope="col">Value</th>
//                     <th scope="col">P&L</th>
//                     <th scope="col" className="text-center">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {openPositionsData.map((position) => (
//                     <tr key={position.id}>
//                       <td className="asset-cell">{position.asset}</td>
//                       <td>{position.type}</td>
//                       <td>{position.quantity}</td>
//                       <td>${position.entryPrice.toFixed(2)}</td>
//                       <td>${position.currentPrice.toFixed(2)}</td>
//                       <td>${position.value.toFixed(2)}</td>
//                       <td className={position.pl >= 0 ? 'positive-pl' : 'negative-pl'}>
//                         <span className="arrow">{position.pl >= 0 ? '↗' : '↘'}</span>
//                         {position.pl >= 0 ? '+' : ''}${Math.abs(position.pl).toFixed(2)}
//                         ({position.pl >= 0 ? '+' : ''}
//                         {position.plPercentage.toFixed(2)}%)
//                       </td>
//                       <td className="text-center">
//                         <button className="btn action-btn">...</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}

//           {activeTab === 'recent-transactions' && (
//             <div className="table-responsive">
//               <table className="table table-dark custom-table">
//                 <thead>
//                   <tr>
//                     <th scope="col">Date</th>
//                     <th scope="col">Asset</th>
//                     <th scope="col">Type</th>
//                     <th scope="col">Quantity</th>
//                     <th scope="col">Price</th>
//                     <th scope="col">Total</th>
//                     <th scope="col">Status</th>
//                     <th scope="col" className="text-center">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {recentTransactionsData.map((transaction) => (
//                     <tr key={transaction.id}>
//                       <td>{transaction.date}</td>
//                       <td className="asset-cell">{transaction.asset}</td>
//                       <td className={transaction.type === 'Buy' ? 'buy-type' : 'sell-type'}>
//                         {transaction.type}
//                       </td>
//                       <td>{transaction.quantity}</td>
//                       <td>${transaction.price.toFixed(2)}</td>
//                       <td>${transaction.total.toFixed(2)}</td>
//                       <td className="status-cell">{transaction.status}</td>
//                       <td className="text-center">
//                         <button className="btn action-btn">...</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PortfolioDetailsBootstrap;

// import axios from "axios";
// import { useEffect, useState } from "react";

// function PortfolioDetailsBootstrap() {
//   const [activeTab, setActiveTab] = useState("open-positions");
//   const [openPositionsData, setOpenPositionsData] = useState([]);
//   const [recentTransactionsData, setRecentTransactionsData] = useState([]);

//   useEffect(() => {
//     const fetchPortfolioDetails = async () => {
//       try {
//         const token = localStorage.getItem("accessToken");
//         const response = await axios.get(
//           "https://valourwealthdjango-production.up.railway.app/api/portfolio/",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         const data = response.data;

//         // Extract positions and trades
//         const formattedPositions = (data.open_positions || []).map(
//           (pos, index) => ({
//             id: index + 1,
//             asset: pos.symbol || "-",
//             type: pos.type || "-",
//             quantity: pos.quantity,
//             entryPrice: pos.entry_price,
//             currentPrice: pos.current_price,
//             value: pos.value,
//             pl: pos.pnl,
//             plPercentage: pos.pnl_percent,
//           })
//         );

//         const formattedTransactions = (data.recent_trades || []).map(
//           (trade, index) => ({
//             id: index + 1,
//             date: new Date().toISOString().split("T")[0], // Static date placeholder
//             asset: trade.symbol || "-",
//             type: trade.type === 0 ? "Buy" : "Sell",
//             quantity: trade.volume,
//             price: trade.price,
//             total: trade.volume * trade.price,
//             status: "Completed",
//           })
//         );

//         setOpenPositionsData(formattedPositions);
//         setRecentTransactionsData(formattedTransactions);
//       } catch (error) {
//         console.error("Error fetching portfolio details:", error);
//       }
//     };

//     fetchPortfolioDetails();
//   }, []);

//   return (
//     <div className="container-fluid portfolio-details-container">
//       <div className="row">
//         <div className="col-12">
//           <h2 className="details-title">Portfolio Details</h2>

//           <div className="tabs-container mb-4">
//             <div className="nav-tabs">
//               <button
//                 className={`tab-button ${
//                   activeTab === "open-positions" ? "active" : ""
//                 }`}
//                 onClick={() => setActiveTab("open-positions")}
//               >
//                 Open Positions
//               </button>
//               <button
//                 className={`tab-button ${
//                   activeTab === "recent-transactions" ? "active" : ""
//                 }`}
//                 onClick={() => setActiveTab("recent-transactions")}
//               >
//                 Recent Transactions
//               </button>
//             </div>
//           </div>

//           {activeTab === "open-positions" && (
//             <div className="table-responsive">
//               <table className="table table-dark custom-table">
//                 <thead>
//                   <tr>
//                     <th scope="col">Asset</th>
//                     <th scope="col">Type</th>
//                     <th scope="col">Quantity</th>
//                     <th scope="col">Entry Price</th>
//                     <th scope="col">Current Price</th>
//                     <th scope="col">Value</th>
//                     <th scope="col">P&L</th>
//                     <th scope="col" className="text-center">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {openPositionsData.map((position) => (
//                     <tr key={position.id}>
//                       <td className="asset-cell">{position.asset}</td>
//                       <td>{position.type}</td>
//                       <td>{position.quantity}</td>
//                       <td>${position.entryPrice.toFixed(2)}</td>
//                       <td>${position.currentPrice.toFixed(2)}</td>
//                       <td>${position.value.toFixed(2)}</td>
//                       <td
//                         className={
//                           position.pl >= 0 ? "positive-pl" : "negative-pl"
//                         }
//                       >
//                         <span className="arrow">
//                           {position.pl >= 0 ? "↗" : "↘"}
//                         </span>
//                         {position.pl >= 0 ? "+" : "-"}$
//                         {Math.abs(position.pl).toFixed(2)}(
//                         {position.pl >= 0 ? "+" : "-"}
//                         {Math.abs(position.plPercentage).toFixed(2)}%)
//                       </td>
//                       <td className="text-center">
//                         <button className="btn action-btn">...</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}

//           {activeTab === "recent-transactions" && (
//             <div className="table-responsive">
//               <table className="table table-dark custom-table">
//                 <thead>
//                   <tr>
//                     <th scope="col">Date</th>
//                     <th scope="col">Asset</th>
//                     <th scope="col">Type</th>
//                     <th scope="col">Quantity</th>
//                     <th scope="col">Price</th>
//                     <th scope="col">Total</th>
//                     <th scope="col">Status</th>
//                     <th scope="col" className="text-center">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {recentTransactionsData.map((transaction) => (
//                     <tr key={transaction.id}>
//                       <td>{transaction.date}</td>
//                       <td className="asset-cell">{transaction.asset}</td>
//                       <td
//                         className={
//                           transaction.type === "Buy" ? "buy-type" : "sell-type"
//                         }
//                       >
//                         {transaction.type}
//                       </td>
//                       <td>{transaction.quantity}</td>
//                       <td>${transaction.price.toFixed(2)}</td>
//                       <td>${transaction.total.toFixed(2)}</td>
//                       <td className="status-cell">{transaction.status}</td>
//                       <td className="text-center">
//                         <button className="btn action-btn">...</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PortfolioDetailsBootstrap;

import axios from "axios";
import { useEffect, useState } from "react";

function PortfolioDetailsBootstrap() {
  const [activeTab, setActiveTab] = useState("open-positions");
  const [snapshotData, setSnapshotData] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const res = await axios.get(
          "https://valourwealthdjango-production.up.railway.app/api/mt5-snapshot/",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSnapshotData(res.data);
      } catch (err) {
        console.error("Failed to load snapshot:", err);
      }
    };
    fetchPortfolio();
  }, []);

  if (!snapshotData) return null;

  const {
    account = {},
    portfolio_value = 0,
    open_positions = [],
    recent_trades = [],
    market_watch = [],
  } = snapshotData;

  const assetAllocation = {
    stocks: 0,
    crypto: 0,
  };

  open_positions.forEach((pos) => {
    if (pos.type === "stock") assetAllocation.stocks += pos.value || 0;
    if (pos.type === "crypto") assetAllocation.crypto += pos.value || 0;
  });

  const total = assetAllocation.stocks + assetAllocation.crypto || 1;
  assetAllocation.stocks = ((assetAllocation.stocks / total) * 100).toFixed(1);
  assetAllocation.crypto = ((assetAllocation.crypto / total) * 100).toFixed(1);

  return (
    <div className="container-fluid p-2">
      <h3 className="text-white">Portfolio Summary</h3>
      <p className="text-muted">
        Total Portfolio Value: ${portfolio_value.toFixed(2)}
      </p>

      {/* Account Summary */}
      <div className="card bg-dark text-white mb-3">
        <div className="card-header">Account Summary</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark text-white">
            Balance: ${account.balance || 0}
          </li>
          <li className="list-group-item bg-dark text-white">
            Equity: ${account.equity || 0}
          </li>
          <li className="list-group-item bg-dark text-white">
            Margin: ${account.margin || 0}
          </li>
          <li className="list-group-item bg-dark text-white">
            Free Margin: ${account.free_margin || 0}
          </li>
          <li className="list-group-item bg-dark text-white">
            Leverage: 1:{account.leverage || 0}
          </li>
        </ul>
      </div>

      {/* Asset Allocation */}
      <div className="card bg-dark text-white mb-3">
        <div className="card-header">Asset Allocation</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark text-white">
            Stocks: {assetAllocation.stocks}%
          </li>
          <li className="list-group-item bg-dark text-white">
            Crypto: {assetAllocation.crypto}%
          </li>
        </ul>
      </div>

      {/* Market Watch */}
      <div className="card bg-dark text-white mb-4">
        <div className="card-header">Market Watch</div>
        <table className="table table-sm text-white m-0">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Bid</th>
              <th>Ask</th>
              <th>Spread</th>
            </tr>
          </thead>
          <tbody>
            {market_watch.map((item, i) => (
              <tr key={i}>
                <td>{item.symbol}</td>
                <td>{item.bid}</td>
                <td>{item.ask}</td>
                <td>{item.spread}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabs */}
      <div className="nav-tabs mb-3">
        <button
          className={`tab-button ${
            activeTab === "open-positions" ? "active" : ""
          }`}
          onClick={() => setActiveTab("open-positions")}
        >
          Open Positions
        </button>
        <button
          className={`tab-button ${
            activeTab === "recent-transactions" ? "active" : ""
          }`}
          onClick={() => setActiveTab("recent-transactions")}
        >
          Recent Transactions
        </button>
      </div>

      {/* Open Positions */}
      {activeTab === "open-positions" && (
        <div className="table-responsive">
          <table className="table table-dark table-sm">
            <thead>
              <tr>
                <th>Asset</th>
                <th>Type</th>
                <th>Qty</th>
                <th>Entry</th>
                <th>Current</th>
                <th>Value</th>
                <th>P&L</th>
              </tr>
            </thead>
            <tbody>
              {open_positions.map((pos, i) => (
                <tr key={i}>
                  <td>{pos.symbol}</td>
                  <td>{pos.type}</td>
                  <td>{pos.quantity}</td>
                  <td>${pos.entry_price.toFixed(2)}</td>
                  <td>${pos.current_price.toFixed(2)}</td>
                  <td>${pos.value.toFixed(2)}</td>
                  <td className={pos.pnl >= 0 ? "text-success" : "text-danger"}>
                    {pos.pnl >= 0 ? "+" : "-"}${Math.abs(pos.pnl).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Recent Trades */}
      {activeTab === "recent-transactions" && (
        <div className="table-responsive">
          <table className="table table-dark table-sm">
            <thead>
              <tr>
                <th>Asset</th>
                <th>Type</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Profit</th>
              </tr>
            </thead>
            <tbody>
              {recent_trades.map((tx, i) => (
                <tr key={i}>
                  <td>{tx.symbol}</td>
                  <td>{tx.type === 0 ? "Buy" : "Sell"}</td>
                  <td>{tx.volume}</td>
                  <td>${tx.price.toFixed(2)}</td>
                  <td>${tx.profit.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PortfolioDetailsBootstrap;
