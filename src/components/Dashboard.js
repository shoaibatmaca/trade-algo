
// // new dashboard

// import React, { useState, useEffect } from 'react';
// import { Menu, Search, Sun, Moon, Home, Tv, Building, Wrench, Book, Package, DollarSign, Gem, Star, GraduationCap, Users } from 'lucide-react';
// import "../styles/dashboard.css";
// import HistoricalDataFlow from './DashboardSidebarComp/HistoricalDataFlow';
// import user_logo from "../assets/images/dashboard_logo.png";
// import valourWealth from "../assets/images/Valour_Wealth.png";
// import DashboardData from './DashboardSidebarComp/DashboardData';
// import LiveSessions from './DashboardSidebarComp/LiveSessions';
// import TradeProducts from './DashboardSidebarComp/TradeProducts';
// import Emerald from './DashboardSidebarComp/Emerald';
// import Platinum from './DashboardSidebarComp/Platinum';
// import OptionsAcademy from './DashboardSidebarComp/OptionsAcademy';
// import Mentorship from './DashboardSidebarComp/Mentorship';
// import WealthSeries from './DashboardSidebarComp/WealthSeries';
// import Resources from './DashboardSidebarComp/Resources';

// const Dashboard = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   // Apply CSS variables for dark mode
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.style.setProperty('--text-color', '#ffffff');  // White text
//       document.documentElement.style.setProperty('--background-color', '#000000'); // Full black background
//       document.documentElement.style.setProperty('--sidebar-color', '#000000'); // Full black sidebar
//       document.documentElement.style.setProperty('--card-background', '#000000'); // Full black cards
//       document.documentElement.style.setProperty('--input-background', '#222222'); // Darker input fields
//       document.documentElement.style.setProperty('--border-color', '#444444'); // Softer borders in dark mode
//     } else {
//       document.documentElement.style.setProperty('--text-color', '#000000'); // Black text
//       document.documentElement.style.setProperty('--background-color', '#ffffff'); // White background
//       document.documentElement.style.setProperty('--sidebar-color', '#f8f9fa'); // Light sidebar
//       document.documentElement.style.setProperty('--card-background', '#ffffff'); // White cards
//       document.documentElement.style.setProperty('--input-background', '#ffffff'); // White input fields
//       document.documentElement.style.setProperty('--border-color', '#dddddd'); // Light borders
//     }
//   }, [darkMode]);
  
//   // Responsive behavior: auto-collapse sidebar on smaller screens
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//       // Auto-collapse on screens smaller than 992px (Bootstrap's lg breakpoint)
//       if (window.innerWidth < 992) {
//         setSidebarCollapsed(true);
//       } else if (window.innerWidth >= 992) {
//         // Only auto-expand if this is the initial load or resize from small to large
//         if (windowWidth < 992) {
//           setSidebarCollapsed(false);
//         }
//       }
//     };
    
//     // Set initial state based on window width
//     handleResize();
    
//     // Add event listener for window resize
//     window.addEventListener('resize', handleResize);
    
//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [windowWidth]);

//   // Handle tab click - collapse sidebar after selection on mobile
//   const handleTabClick = (tabId) => {
//     setActiveTab(tabId);
    
//     // Auto-collapse after tab selection on smaller screens
//     if (windowWidth < 992 && !sidebarCollapsed) {
//       setSidebarCollapsed(true);
//     }
//   };

//   const menuItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
//     { id: 'live-sessions', label: 'Live Sessions', icon: <Tv size={20} /> },
//     { id: 'historical-darkflow', label: 'Historical Darkflow', icon: <Building size={20} /> },
//     { id: 'trading-tools', label: 'Trading Tools', icon: <Wrench size={20} /> },
//     { id: 'resources', label: 'Resources', icon: <Book size={20} /> },
//     { id: 'Trade-products', label: 'ValourWealth Products', icon: <Package size={20} /> },
//     { id: 'wealth-series', label: 'Wealth Management Series', icon: <DollarSign size={20} />, isNew: true },
//     { id: 'emerald', label: 'Emerald Inc.', icon: <Gem size={20} /> },
//     { id: 'platinum', label: 'Platinum Program', icon: <Star size={20} /> },
//     { id: 'options-academy', label: 'Trading Academy', icon: <GraduationCap size={20} /> },
//     { id: 'mentorship', label: '1 on 1 Mentorship', icon: <Users size={20} /> },
//   ];
  
//   const renderContent = () => {
//     return (
//       <div className={darkMode ? "dark-mode-content" : "light-mode-content"}>
//         {(() => {
//           switch (activeTab) {
//             case 'dashboard':
//               return <DashboardData darkMode={darkMode} />;
//             case 'historical-darkflow':
//               return <HistoricalDataFlow darkMode={darkMode} />;
//             case 'live-sessions':
//               return <LiveSessions darkMode={darkMode} />;
//             case 'Trade-products':
//               return <TradeProducts darkMode={darkMode} />;
//             case 'trading-tools':
//               return <LiveSessions darkMode={darkMode} />;
//             case 'emerald':
//               return <Emerald darkMode={darkMode} />;
//             case 'platinum':
//               return <Platinum darkMode={darkMode} />;
//             case 'options-academy':
//               return <OptionsAcademy darkMode={darkMode} />;
//             case 'wealth-series':
//               return <WealthSeries darkMode={darkMode} />;
//             case 'mentorship':
//               return <Mentorship darkMode={darkMode} />;
//             case 'resources':
//               return <Resources darkMode={darkMode} />;
//             default:
//               return null;
//           }
//         })()}
//       </div>
//     );
//   };
  
//   return (
//     <div className={darkMode ? 'bg-dark text-white vh-100' : 'bg-light vh-100'}>
//       <div className="row g-0">
//         {/* Sidebar */}
//         <div
//           className={`${sidebarCollapsed ? 'col-1' : 'col-3'} position-fixed h-100 border-end transition-width sidebar-mbl`}
//           style={{ 
//             backgroundColor: 'var(--background-color)', 
//             color: 'var(--text-color)' 
//           }}
//         >
//           {/* Sidebar Header */}
//           <div className="d-flex justify-content-between align-items-center border-bottom p-lg-3 p-sm-2 left-toggle">
//             {!sidebarCollapsed && (
//               <h4 className={`m-0 d-flex align-items-center ${darkMode ? 'text-white' : ''}`}>
//                 <div className="sidebar_logo">
//                   <img src={valourWealth} alt="Logo" className="sidebar-logo obj_fit me-2" />
//                 </div>
//               </h4>
//             )}
//             <button className={`btn btn-link p-0 ${darkMode ? 'text-white' : ''}`} onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
//               <Menu />
//             </button>
//           </div>
          
//           {/* Navigation Menu */}
//           <div className="nav flex-column">
//             {menuItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleTabClick(item.id)}
//                 className={`nav-link border-0 d-flex align-items-center justify-content-${sidebarCollapsed ? "center" : "start"} ${activeTab === item.id ? "active" : ""} ${darkMode ? 'text-white' : ''}`}
//                 style={darkMode ? {color: 'white'} : {}} // Add inline style for dark mode
//               >
//                 <span className="me-3" style={darkMode ? {color: 'white'} : {}}>{item.icon}</span>
//                 {!sidebarCollapsed && (
//                   <div className="d-flex align-items-center justify-content-between flex-grow-1">
//                     <span style={darkMode ? {color: 'white'} : {}}>{item.label}</span>
//                     {item.isNew && <span className="badge bg-primary ms-2">NEW</span>}
//                   </div>
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* Dark Mode Toggle */}
//           <div className="position-absolute bottom-0 w-100 border-top">
//             <button 
//               onClick={() => setDarkMode(!darkMode)} 
//               className={`btn btn-link d-flex align-items-center w-100 text-decoration-none night-btn ${darkMode ? 'text-white' : ''}`}
//               style={darkMode ? {color: 'white'} : {}} // Add inline style for dark mode
//             >
//               {darkMode ? 
//                 <Sun className="me-2" style={{color: 'white'}} /> : 
//                 <Moon className="me-2" />
//               }
//               {!sidebarCollapsed && 
//                 <span style={darkMode ? {color: 'white'} : {}}>
//                   {darkMode ? 'Light Mode' : 'Dark Mode'}
//                 </span>
//               }
//             </button>
//           </div>
//         </div>
        
//         {/* Main Content Area */}
//         <div className={`${sidebarCollapsed ? 'col-11 offset-1' : 'col-9 offset-3'} transition-margin`}>
//           <div className="container-fluid py-lg-4 py-3" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)', minHeight: "100vh" }}>
//             {/* Header with Search */}
//             <div className="row mb-lg-4 mb-2 align-items-center dashboard-head">
//             <div className="col position-relative search-main">
//            <input
//                 type="text"
//                 className={`search_bar ${darkMode ? "dark-mode" : ""}`}
//                 placeholder="Search Tickers..."
//               />
//               <i className="fas fa-search search-icon"></i> 
//              </div>

//               <div className="col-auto user_info">
//                 <img src={user_logo} alt="Profile" className="rounded-circle" width="40" height="40" />
//                 <div className='username_data'>
//                   <h5 className={`mb-0 ${darkMode ? 'text-white' : ''}`}>Valourwealth Platform</h5>
//                   <p className={`mb-0 ${darkMode ? 'text-white' : ''}`}>Premium Member</p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Content Card */}
//             <div className={darkMode ? '' : 'card bg-light text-dark right-bar'}>
//               {renderContent()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Menu, Search, Sun, Moon, Home, Tv, Building, Wrench, Book, Package, DollarSign, Gem, Star, GraduationCap, Users } from 'lucide-react';
import "../styles/dashboard.css";
import HistoricalDataFlow from './DashboardSidebarComp/HistoricalDataFlow';
import user_logo from "../assets/images/dashboard_logo.png";
import valourWealth from "../assets/images/Valour_Wealth.png";
// import valourWealthInverted from "../assets/images/valour-inverted-logo.jpeg";

import DashboardData from './DashboardSidebarComp/DashboardData';
import LiveSessions from './DashboardSidebarComp/LiveSessions';
import TradeProducts from './DashboardSidebarComp/TradeProducts';
import Emerald from './DashboardSidebarComp/Emerald';
import Platinum from './DashboardSidebarComp/Platinum';
import OptionsAcademy from './DashboardSidebarComp/OptionsAcademy';
import Mentorship from './DashboardSidebarComp/Mentorship';
import WealthSeries from './DashboardSidebarComp/WealthSeries';
import Resources from './DashboardSidebarComp/Resources';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem("accessToken");

  // Use environment variable for API base URL
  const API_BASE_URL = process.env.REACT_APP_API_URL; // e.g. https://valourwealthdjango-production.up.railway.app/
  // Updated user data endpoint
  const USER_API_URL = `${API_BASE_URL}api/user/`;

  // Apply CSS variables for dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      document.documentElement.style.setProperty('--background-color', '#000000');
      document.documentElement.style.setProperty('--sidebar-color', '#000000');
      document.documentElement.style.setProperty('--card-background', '#000000');
      document.documentElement.style.setProperty('--input-background', '#222222');
      document.documentElement.style.setProperty('--border-color', '#444444');
    } else {
      document.documentElement.style.setProperty('--text-color', '#000000');
      document.documentElement.style.setProperty('--background-color', '#ffffff');
      document.documentElement.style.setProperty('--sidebar-color', '#f8f9fa');
      document.documentElement.style.setProperty('--card-background', '#ffffff');
      document.documentElement.style.setProperty('--input-background', '#ffffff');
      document.documentElement.style.setProperty('--border-color', '#dddddd');
    }
  }, [darkMode]);
  
  // Responsive behavior: auto-collapse sidebar on smaller screens
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 992) {
        setSidebarCollapsed(true);
      } else if (window.innerWidth >= 992) {
        if (windowWidth < 992) {
          setSidebarCollapsed(false);
        }
      }
    };
    
    // Set initial state based on window width
    handleResize();

    if (!accessToken) {
      setError("You need to be logged in to view this data.");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(USER_API_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        if (error.response && error.response.status === 401) {
          setError("Session expired or invalid. Please log in again.");
          localStorage.removeItem("accessToken");
        } else {
          setError("Failed to fetch user data. Please try again later.");
        }
      }
    };

    fetchUserData();
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth, accessToken]);
  

  // Handle tab click - collapse sidebar after selection on mobile
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (windowWidth < 992 && !sidebarCollapsed) {
      setSidebarCollapsed(true);
    }
  };
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    { id: 'live-sessions', label: 'Live Sessions', icon: <Tv size={20} /> },
    { id: 'historical-darkflow', label: 'Historical Darkflow', icon: <Building size={20} /> },
    { id: 'trading-tools', label: 'Trading Tools', icon: <Wrench size={20} /> },
    { id: 'resources', label: 'Resources', icon: <Book size={20} /> },
    { id: 'Trade-products', label: 'ValourWealth Products', icon: <Package size={20} /> },
    { id: 'wealth-series', label: 'Wealth Management Series', icon: <DollarSign size={20} />, isNew: true },
    { id: 'emerald', label: 'Emerald Inc.', icon: <Gem size={20} /> },
    { id: 'platinum', label: 'Platinum Program', icon: <Star size={20} /> },
    { id: 'options-academy', label: 'Trading Academy', icon: <GraduationCap size={20} /> },
    { id: 'mentorship', label: '1 on 1 Mentorship', icon: <Users size={20} /> },
  ];
  
  const renderContent = () => {
    return (
      <div className={darkMode ? "dark-mode-content" : "light-mode-content"}>
        {(() => {
          switch (activeTab) {
            case 'dashboard':
              return <DashboardData darkMode={darkMode} />;
            case 'historical-darkflow':
              return <HistoricalDataFlow darkMode={darkMode} />;
            case 'live-sessions':
              return <LiveSessions darkMode={darkMode} />;
            case 'Trade-products':
              return <TradeProducts darkMode={darkMode} />;
            case 'trading-tools':
              return <LiveSessions darkMode={darkMode} />;
            case 'emerald':
              return <Emerald darkMode={darkMode} />;
            case 'platinum':
              return <Platinum darkMode={darkMode} />;
            case 'options-academy':
              return <OptionsAcademy darkMode={darkMode} />;
            case 'wealth-series':
              return <WealthSeries darkMode={darkMode} />;
            case 'mentorship':
              return <Mentorship darkMode={darkMode} />;
            case 'resources':
              return <Resources darkMode={darkMode} />;
            default:
              return null;
          }
        })()}
      </div>
    );
  };
  

  return (
    <div className={darkMode ? 'bg-dark text-white vh-100' : 'bg-light vh-100'}>
      <div className="row g-0">
        {/* Sidebar */}
        <div
          className={`${sidebarCollapsed ? 'col-1' : 'col-3'} position-fixed h-100 border-end transition-width sidebar-mbl`}
          style={{ 
            backgroundColor: 'var(--background-color)', 
            color: 'var(--text-color)' 
          }}
        >
          {/* Sidebar Header */}
          <div className="d-flex justify-content-between align-items-center border-bottom p-lg-3 p-sm-2 left-toggle">
            {!sidebarCollapsed && (
              <h4 className={`m-0 d-flex align-items-center ${darkMode ? 'text-white' : ''}`}>
                <div className="sidebar_logo">
                <img src={valourWealth} alt="Logo" className="sidebar-logo obj_fit me-2 light-logo" />
                {/* <img src={valourWealthInverted} alt="Logo" className="sidebar-logo obj_fit me-2 dark-logo" /> */}
              </div>
              </h4>
            )}
            <button className={`btn btn-link p-0 ${darkMode ? 'text-white' : ''}`} onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
              <Menu />
            </button>
          </div>
          
          {/* Navigation Menu */}
          <div className="nav flex-column">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`nav-link border-0 d-flex align-items-center justify-content-${sidebarCollapsed ? "center" : "start"} ${activeTab === item.id ? "active" : ""} ${darkMode ? 'text-white' : ''}`}
                style={darkMode ? {color: 'white'} : {}} // Add inline style for dark mode
              >
                <span className="me-3" style={darkMode ? {color: 'white'} : {}}>{item.icon}</span>
                {!sidebarCollapsed && (
                  <div className="d-flex align-items-center justify-content-between flex-grow-1">
                    <span style={darkMode ? {color: 'white'} : {}}>{item.label}</span>
                    {item.isNew && <span className="badge bg-primary ms-2">NEW</span>}
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <div className="position-absolute bottom-0 w-100 border-top">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className={`btn btn-link d-flex align-items-center w-100 text-decoration-none night-btn ${darkMode ? 'text-white' : ''}`}
              style={darkMode ? {color: 'white'} : {}} // Add inline style for dark mode
            >
              {darkMode ? 
                <Sun className="me-2" style={{color: 'white'}} /> : 
                <Moon className="me-2" />
              }
              {!sidebarCollapsed && 
                <span style={darkMode ? {color: 'white'} : {}}>
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              }
            </button>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className={`${sidebarCollapsed ? 'col-11 offset-1' : 'col-9 offset-3'} transition-margin`}>
          <div className="container-fluid py-lg-4 py-3" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)', minHeight: "100vh" }}>
            {/* Header with Search */}
            <div className="row mb-lg-4 mb-2 align-items-center dashboard-head px-3 px-sm-2">
            <div className="col position-relative search-main">
           <input
                type="text"
                className={`search_bar ${darkMode ? "dark-mode" : ""}`}
                placeholder="Search Tickers..."
              />
              <i className="fas fa-search search-icon"></i> 
             </div>

              <div className="col-auto user_info">
                <img src={user_logo} alt="Profile" className="rounded-circle" width="40" height="40" />
                <div className='username_data'>
                  <h5 className={`mb-0 ${darkMode ? 'text-white' : ''}`}>Valourwealth Platform</h5>
                  {/* <p className={`mb-0 ${darkMode ? 'text-white' : ''}`}>Premium Member</p> */}
                </div>
              </div>
            </div>
            
            {/* Content Card */}
            <div className={darkMode ? '' : 'card bg-light text-dark right-bar pt-0'}>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;