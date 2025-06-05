import { useEffect, useState } from "react";
import technology1 from "../assets/images/apple-img.webp";
import event1 from "../assets/images/event1.webp";
import event2 from "../assets/images/event2.webp";
import market1 from "../assets/images/intel-mrket-img.webp";
import market2 from "../assets/images/reddit-market-img.webp";
import technology2 from "../assets/images/technology2.webp";
import wealth1 from "../assets/images/wealth1.webp";
import wealth2 from "../assets/images/wealth2.webp";
import "../styles/secondnavbar.css";

const API_KEY = "04RGF1U9PAJ49VYI";

const Navbar = () => {
  const [techNews, setTechNews] = useState([]);
  const [eventNews, setEventNews] = useState([]);
  const [wealthNews, setWealthNews] = useState([]);

  useEffect(() => {
    const fetchNews = async (topic, setter) => {
      try {
        const res = await fetch(
          `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=${topic}&apikey=${API_KEY}`
        );
        const data = await res.json();
        if (data?.feed) setter(data.feed.slice(0, 2));
      } catch (err) {
        console.error(`Error fetching ${topic} news`, err);
      }
    };

    fetchNews("technology", setTechNews);
    fetchNews("finance", setEventNews);
    fetchNews("financial_markets", setWealthNews);
  }, []);

  const renderArticles = (items, fallback1, fallback2, category, fallbackTitles) => (
    items.length > 0 ? (
      items.map((article, index) => (
        <div className="article" key={index}>
          <div className="article-image">
            <img src={article.banner_image || fallback1} alt={article.title} />
          </div>
          <div className="article-content">
            <span className="article-category">{category}</span>
            <h4 className="article-title">{article.title}</h4>
          </div>
        </div>
      ))
    ) : (
      <>
        <div className="article">
          <div className="article-image">
            <img src={fallback1} alt="default 1" />
          </div>
          <div className="article-content">
            <span className="article-category">{category}</span>
            <h4 className="article-title">{fallbackTitles[0]}</h4>
          </div>
        </div>
        <div className="article">
          <div className="article-image">
            <img src={fallback2} alt="default 2" />
          </div>
          <div className="article-content">
            <span className="article-category">{category}</span>
            <h4 className="article-title">{fallbackTitles[1]}</h4>
          </div>
        </div>
      </>
    )
  );

  return (
    <nav className="second-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <ul className="nav-links second-nav-links">
          {/* Markets */}
          <li className="nav-item">
            <a className="ps-0" id="markets" href="/market-details">
              Markets
            </a>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <div className="dropdown-left">
                  <h3>Markets</h3>
                  <ul className="category-list">
                    <li>1. New</li><li>2. Popular</li><li>3. Shared</li><li>4. All</li>
                  </ul>
                </div>
                <div className="dropdown-center">
                  <h3>Latest</h3>
                  <div className="latest-articles">
                    <div className="article">
                      <div className="article-image">
                        <img src={market1} alt="Stock market traders" />
                      </div>
                      <div className="article-content">
                        <span className="article-category">Markets</span>
                        <h4 className="article-title">
                          Hedge Funds Are Still Betting Big on the Market
                        </h4>
                      </div>
                    </div>
                    <div className="article">
                      <div className="article-image">
                        <img src={market2} alt="Reddit market image" />
                      </div>
                      <div className="article-content">
                        <span className="article-category">Markets</span>
                        <h4 className="article-title">
                          Macy's Stock Falls as Guidance Cut Amid Uncertainty
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown-right">
                  <div className="follow-section">
                    <h3>Follow ValourWealth</h3>
                    <div className="social-icon">
                      <a href="https://x.com/valourwealthltd?s=11" target="blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div className="view-more">
                    <a className="theme_btn" href="/market-details">View More Markets →</a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Technology */}
          <li className="nav-item">
            <a id="technology" href="/technology-details">Technology</a>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <div className="dropdown-left">
                  <h3>Technology</h3>
                  <ul className="category-list">
                    <li>1. AI</li><li>2. Software</li><li>3. Hardware</li><li>4. All</li>
                  </ul>
                </div>
                <div className="dropdown-center">
                  <h3>Latest</h3>
                  <div className="latest-articles">
                    {renderArticles(techNews, technology1, technology2, "Technology", [
                      "How Apple Plans to Bring Generative Ai to All Its Devices",
                      "Meta Launches AI Coding Software in Competition With OpenAI"
                    ])}
                  </div>
                </div>
                <div className="dropdown-right">
                  <div className="follow-section">
                    <h3>Follow ValourWealth</h3>
                    <div className="social-icon">
                      <a href="https://x.com/valourwealthltd?s=11" target="blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div className="view-more">
                    <a className="theme_btn" href="/technology-details">View More Technology →</a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Wealth */}
          <li className="nav-item">
            <a id="wealth" href="/wealth-details">Wealth</a>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <div className="dropdown-left">
                  <h3>Wealth</h3>
                  <ul className="category-list">
                    <li>1. Investing</li><li>2. Real Estate</li><li>3. Retirement</li><li>4. All</li>
                  </ul>
                </div>
                <div className="dropdown-center">
                  <h3>Latest</h3>
                  <div className="latest-articles">
                    {renderArticles(wealthNews, wealth1, wealth2, "Wealth", [
                      "New Tax Laws Could Impact High-Net-Worth Individuals in 2024",
                      "Alternative Investments Gain Popularity Among Millennials"
                    ])}
                  </div>
                </div>
                <div className="dropdown-right">
                  <div className="follow-section">
                    <h3>Follow ValourWealth</h3>
                    <div className="social-icon">
                      <a href="https://x.com/valourwealthltd?s=11" target="blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div className="view-more">
                    <a className="theme_btn" href="/wealth-details">View More Wealth →</a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Events */}
          <li className="nav-item">
            <a id="events" href="/events-details">Events</a>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <div className="dropdown-left">
                  <h3>Events</h3>
                  <ul className="category-list">
                    <li>1. Upcoming</li><li>2. Featured</li><li>3. Virtual</li><li>4. All</li>
                  </ul>
                </div>
                <div className="dropdown-center">
                  <h3>Latest</h3>
                  <div className="latest-articles">
                    {renderArticles(eventNews, event1, event2, "Events", [
                      "Annual Investment Summit to Feature Top Financial Experts",
                      "Tech Conference Announces Expanded Program for Next Quarter"
                    ])}
                  </div>
                </div>
                <div className="dropdown-right">
                  <div className="follow-section">
                    <h3>Follow ValourWealth</h3>
                    <div className="social-icon">
                      <a href="https://x.com/valourwealthltd?s=11" target="blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div className="view-more">
                    <a className="theme_btn" href="/events-details">View More Events →</a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Products */}
          <li>
            <a id="products" href="/our-products">Products</a>
          </li>
        </ul>

        <div className="search-box">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-icon">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
