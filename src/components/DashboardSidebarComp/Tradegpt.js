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
//       <button onClick={handleTradeGPTRedirect} className="btn btn-primary">
//         Go to TradeGPT
//       </button>
//     </>
//   );
// }

// export default Tradegpt;

import TradeGpt from "../DashboardSidebarComp/images/TradeGPT.jpg";

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
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div
              class="tradegpt-img"
              style={{ cursor: "pointer" }}
              onClick={handleTradeGPTRedirect}
            >
              <img className="obj_fit" src={TradeGpt} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tradegpt;
