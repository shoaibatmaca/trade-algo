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
            Valourwealth has launched its newest AI product called TradeGPT. It
            is the world's most powerful AI trading agent that is designed to
            help Valourwealth members reach their financial goals with
            “super-intelligent” insights into stocks, options, forex and
            cryptos.
          </p>
          <p className="text-muted">
            Simply ask TradeGPT any question and instantly receive AI-powered
            answers based on over 50 million data points.
          </p>
          <p className="text-muted">
            Instant data, analysis and even trade recommendations are all
            engineered to help Valourwealth members boost their trading profits.
          </p>
          <p className="fw-bold mt-4">
            Jump-start your trading with Valourwealth's “Super-Intelligent” AI
            today
          </p>
          {/* Bottom-right Button */}
          <div className="position-absolute end-0 bottom-0 p-4">
            <button
              className="btn px-3 py-2"
              style={{
                background: "linear-gradient(to right, #0084ff, #00e0c6)",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "0.9rem",
                border: "none",
                borderRadius: "5px",
              }}
              onClick={handleTradeGPTRedirect}
            >
              Try TradeGPT Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tradegpt;
