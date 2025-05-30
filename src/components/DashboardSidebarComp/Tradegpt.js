// import TradeGpt from "../DashboardSidebarComp/images/TradeGPT.jpg";

// function Tradegpt() {
//   const handleTradeGPTRedirect = async () => {
//     const accessToken = localStorage.getItem("accessToken");

//     try {
//       const response = await fetch(
//         `https://valourwealthdjango-production.up.railway.app/api/generate-tradegpt-token/`,
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to get token");
//       }

//       const { token } = await response.json();

//       // Redirect to TradeGPT with token
//       window.location.href = `https://frontend-eight-rho-95.vercel.app?token=${token}`;
//     } catch (error) {
//       console.error("TradeGPT redirect failed:", error);
//     }
//   };
//   return (
//     <>
//       <div class="container">
//         <div class="row">
//           <div class="col-lg-4">
//             <div
//               class="tradegpt-img"
//               style={{ cursor: "pointer" }}
//               onClick={handleTradeGPTRedirect}
//             >
//               <img className="obj_fit" src={TradeGpt} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Tradegpt;

function Tradegpt() {
  const handleTradeGPTRedirect = async () => {
    const accessToken = localStorage.getItem("accessToken");

    try {
      const response = await fetch(
        `https://valourwealthdjango-production.up.railway.app/api/generate-tradegpt-token/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get token");
      }

      const { token } = await response.json();

      // Redirect to TradeGPT with token
      window.location.href = `https://frontend-eight-rho-95.vercel.app?token=${token}`;
    } catch (error) {
      console.error("TradeGPT redirect failed:", error);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1 className="fw-bold display-5">TradeGPT</h1>
          <hr style={{ width: "60px", margin: "20px auto" }} />
          <p className="lead text-muted">
            Introducing TradeGPT by ValourWealth — Your AI-Powered Trading
            Companion
          </p>
          <p className="text-muted">
            ValourWealth is proud to introduce TradeGPT, an advanced AI-driven
            assistant designed to empower you with intelligent insights across
            stocks, forex, options, and cryptocurrencies. Whether you’re
            analyzing market trends or crafting new strategies, TradeGPT
            delivers real-time, data-backed responses grounded in over 50
            million data points.
          </p>

          <ul className="text-muted">
            <li>
              <strong>Instant Insights:</strong> Ask TradeGPT any question and
              receive AI-generated answers on demand.
            </li>
            <li>
              <strong>Comprehensive Analysis:</strong> Leverage deep,
              data-driven market overviews to inform your decisions.
            </li>
            <li>
              <strong>Actionable Recommendations:</strong> Get tailored trade
              ideas to help you maximize your profits.
            </li>
          </ul>

          <p className="fw-bold mt-4">
            Jump-start your trading journey with ValourWealth’s
            “super-intelligent” AI. From on-the-fly analytics to personalized
            trade suggestions, every feature is engineered to support your
            financial growth and elevate your performance.
          </p>
          <button
            className="btn btn-primary px-4 py-2 mt-3"
            style={{
              background: "linear-gradient(to right, #0084ff, #00e0c6)",
              border: "none",
              fontWeight: "bold",
            }}
            onClick={handleTradeGPTRedirect}
          >
            Try TradeGPT Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tradegpt;
