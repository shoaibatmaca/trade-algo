import axios from "axios";
import { useEffect, useState } from "react";

const SectorIQ = ({ assetAllocation, sentimentBySector, latestNews }) => {
  const [aiSummary, setAiSummary] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSectorPulse = async () => {
      if (!latestNews || latestNews.length === 0) {
        setAiSummary("No latest news provided.");
        setLoading(false);
        return;
      }

      try {
        const token = localStorage.getItem("accessToken");

        const response = await axios.post(
          "https://valourwealthdjango-production.up.railway.app/api/portfolio/sector-iq/",
          { latest_news: latestNews }, // if latestNews is array of dicts, keep it like this
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const text = response.data.pulse || "No AI response returned.";
        setAiSummary(text);
      } catch (err) {
        console.error("SectorIQ API error:", err);
        setError("❌ Failed to load AI sector insight.");
      } finally {
        setLoading(false);
      }
    };

    fetchSectorPulse();
  }, [latestNews]);

  return (
    <div className="sector-iq-container p-4 rounded shadow-sm">
      <h3 className="mb-3">📊 SectorIQ Pulse</h3>

      <div className="p-3 bg-dark text-white rounded">
        <h5>AI Sector Summary</h5>
        <pre style={{ whiteSpace: "pre-wrap", marginBottom: 0 }}>
          {loading ? "🧠 Generating insight..." : error ? error : aiSummary}
        </pre>
      </div>
    </div>
  );
};

export default SectorIQ;
