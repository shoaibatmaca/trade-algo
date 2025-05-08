import axios from "axios";
import React, { useEffect, useState } from "react";

const TradeJournal = () => {
  const [showJournalForm, setShowJournalForm] = useState(false);
  const [journalEntries, setJournalEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    symbol: "",
    tradeType: "long",
    entryDate: "",
    entryPrice: "",
    exitDate: "",
    exitPrice: "",
    positionSize: "",
    riskRewardRatio: "",
    stopLoss: "",
    takeProfit: "",
    entryReason: "",
    exitReason: "",
    emotionalState: "",
    marketConditions: "",
    whatWentWell: "",
    whatWentWrong: "",
    lessonsLearned: "",
    additionalNotes: "",
  });

  const handleViewDetails = (entry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setSelectedEntry(null);
    setIsModalOpen(false);
  };

  const API_BASE = process.env.REACT_APP_API_URL;
  const API_URL = `${API_BASE}api/trade-journal/`;
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await axios.get(API_URL, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setJournalEntries(res.data);
      } catch (err) {
        console.error("Error fetching journal entries:", err);
      }
    };
    fetchEntries();
  }, []);

  const handleOpenForm = () => setShowJournalForm(true);

  const handleCloseForm = () => {
    setShowJournalForm(false);
    setFormData({
      symbol: "",
      tradeType: "long",
      entryDate: "",
      entryPrice: "",
      exitDate: "",
      exitPrice: "",
      positionSize: "",
      riskRewardRatio: "",
      stopLoss: "",
      takeProfit: "",
      entryReason: "",
      exitReason: "",
      emotionalState: "",
      marketConditions: "",
      whatWentWell: "",
      whatWentWrong: "",
      lessonsLearned: "",
      additionalNotes: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      symbol: formData.symbol,
      trade_type: formData.tradeType,
      entry_date: formData.entryDate,
      entry_price: parseFloat(formData.entryPrice),
      exit_date: formData.exitDate,
      exit_price: parseFloat(formData.exitPrice),
      position_size: parseInt(formData.positionSize),
      risk_reward_ratio: formData.riskRewardRatio,
      stop_loss: formData.stopLoss ? parseFloat(formData.stopLoss) : null,
      take_profit: formData.takeProfit ? parseFloat(formData.takeProfit) : null,
      entry_reason: formData.entryReason,
      exit_reason: formData.exitReason,
      emotional_state: formData.emotionalState,
      market_conditions: formData.marketConditions,
      what_went_well: formData.whatWentWell,
      what_went_wrong: formData.whatWentWrong,
      lessons_learned: formData.lessonsLearned,
      additional_notes: formData.additionalNotes,
    };

    try {
      const res = await axios.post(API_URL, payload, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setJournalEntries((prev) => [res.data, ...prev]);
      handleCloseForm();
    } catch (err) {
      console.error("Failed to save journal entry:", err.response?.data || err);
      alert("Failed to save journal entry. Check required fields.");
    }
  };

  const calculateProfitLoss = (entry) => {
    const entryPrice = parseFloat(entry.entry_price);
    const exitPrice = parseFloat(entry.exit_price);
    const positionSize = parseInt(entry.position_size);
    let profitLoss = 0;
    let profitLossPercentage = 0;
    if (entry.trade_type === "long") {
      profitLoss = (exitPrice - entryPrice) * positionSize;
      profitLossPercentage = ((exitPrice - entryPrice) / entryPrice) * 100;
    } else {
      profitLoss = (entryPrice - exitPrice) * positionSize;
      profitLossPercentage = ((entryPrice - exitPrice) / entryPrice) * 100;
    }
    return {
      profitLoss: profitLoss.toFixed(2),
      profitLossPercentage: profitLossPercentage.toFixed(2),
    };
  };

  return (
    <div className="trade-journal-container">
      <div className="journal-header">
        <h1>Trade Journal</h1>
        <p>
          Track your trades, analyze your performance, and improve your trading
          strategy
        </p>
        <button className="add-entry-button" onClick={handleOpenForm}>
          <i className="bi bi-plus-lg"></i> Add New Trade
        </button>
      </div>

      {showJournalForm ? (
        <div className="journal-form-overlay">
          <div className="journal-form-container">
            <div className="form-header">
              <h2>New Trade Entry</h2>
              <button className="close-button" onClick={handleCloseForm}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <form className="trade-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Symbol</label>
                <input
                  name="symbol"
                  value={formData.symbol}
                  onChange={handleInputChange}
                  required
                />
                <label>Trade Type</label>
                <select
                  name="tradeType"
                  value={formData.tradeType}
                  onChange={handleInputChange}
                >
                  <option value="long">Long</option>
                  <option value="short">Short</option>
                </select>
                <label>Entry Date</label>
                <input
                  type="date"
                  name="entryDate"
                  value={formData.entryDate}
                  onChange={handleInputChange}
                  required
                />
                <label>Entry Price</label>
                <input
                  type="number"
                  step="0.0001"
                  name="entryPrice"
                  value={formData.entryPrice}
                  onChange={handleInputChange}
                  required
                />
                <label>Exit Date</label>
                <input
                  type="date"
                  name="exitDate"
                  value={formData.exitDate}
                  onChange={handleInputChange}
                  required
                />
                <label>Exit Price</label>
                <input
                  type="number"
                  step="0.0001"
                  name="exitPrice"
                  value={formData.exitPrice}
                  onChange={handleInputChange}
                  required
                />
                <label>Position Size</label>
                <input
                  type="number"
                  name="positionSize"
                  value={formData.positionSize}
                  onChange={handleInputChange}
                  required
                />
                <label>Risk/Reward Ratio</label>
                <input
                  name="riskRewardRatio"
                  value={formData.riskRewardRatio}
                  onChange={handleInputChange}
                />
                <label>Stop Loss</label>
                <input
                  type="number"
                  name="stopLoss"
                  step="0.0001"
                  value={formData.stopLoss}
                  onChange={handleInputChange}
                />
                <label>Take Profit</label>
                <input
                  type="number"
                  name="takeProfit"
                  step="0.0001"
                  value={formData.takeProfit}
                  onChange={handleInputChange}
                />
                <label>Entry Reason</label>
                <textarea
                  name="entryReason"
                  value={formData.entryReason}
                  onChange={handleInputChange}
                  required
                />
                <label>Exit Reason</label>
                <textarea
                  name="exitReason"
                  value={formData.exitReason}
                  onChange={handleInputChange}
                  required
                />
                <label>Emotional State</label>
                <textarea
                  name="emotionalState"
                  value={formData.emotionalState}
                  onChange={handleInputChange}
                />
                <label>Market Conditions</label>
                <textarea
                  name="marketConditions"
                  value={formData.marketConditions}
                  onChange={handleInputChange}
                />
                <label>What Went Well</label>
                <textarea
                  name="whatWentWell"
                  value={formData.whatWentWell}
                  onChange={handleInputChange}
                />
                <label>What Went Wrong</label>
                <textarea
                  name="whatWentWrong"
                  value={formData.whatWentWrong}
                  onChange={handleInputChange}
                />
                <label>Lessons Learned</label>
                <textarea
                  name="lessonsLearned"
                  value={formData.lessonsLearned}
                  onChange={handleInputChange}
                  required
                />
                <label>Additional Notes</label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={handleCloseForm}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-button">
                  Save Trade
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="journal-entries-container">
          {journalEntries.length === 0 ? (
            <div className="no-entries">
              <i className="bi bi-journal-text"></i>
              <h2>No journal entries yet</h2>
              <p>
                Start tracking your trades by clicking the "Add New Trade"
                button above.
              </p>
            </div>
          ) : (
            <div className="entries-list">
              {journalEntries.map((entry) => {
                const { profitLoss, profitLossPercentage } =
                  calculateProfitLoss(entry);
                return (
                  <div key={entry.id} className="journal-entry-card">
                    <div className="entry-header">
                      <div className="entry-symbol">{entry.symbol}</div>
                      <div className={`entry-type ${entry.trade_type}`}>
                        {entry.trade_type.toUpperCase()}
                      </div>
                      <div
                        className={`entry-result ${
                          profitLoss >= 0 ? "profit" : "loss"
                        }`}
                      >
                        {profitLoss >= 0 ? "+" : ""}
                        {profitLoss} ({profitLossPercentage}%)
                      </div>
                    </div>
                    <div className="entry-details">
                      <div className="detail-item">
                        <span className="detail-label">Entry:</span>
                        <span className="detail-value">
                          {entry.entry_price} on{" "}
                          {new Date(entry.entry_date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Exit:</span>
                        <span className="detail-value">
                          {entry.exit_price} on{" "}
                          {new Date(entry.exit_date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Size:</span>
                        <span className="detail-value">
                          {entry.position_size}
                        </span>
                      </div>
                    </div>
                    <div className="entry-lesson">
                      <strong>Lesson:</strong>{" "}
                      {entry.lessons_learned.slice(0, 100)}
                      {entry.lessons_learned.length > 100 ? "..." : ""}
                    </div>
                    <button
                      className="view-details-button"
                      onClick={() =>
                        handleViewDetails({
                          ...entry,
                          profitLoss: parseFloat(
                            calculateProfitLoss(entry).profitLoss
                          ),
                          profitLossPercentage: parseFloat(
                            calculateProfitLoss(entry).profitLossPercentage
                          ),
                        })
                      }
                    >
                      View Details
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TradeJournal;
