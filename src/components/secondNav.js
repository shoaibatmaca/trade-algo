import technology1 from "../assets/images/apple-img.webp";
import event1 from "../assets/images/event1.webp";
import event2 from "../assets/images/event2.webp";
import market1 from "../assets/images/intel-mrket-img.webp";
import market2 from "../assets/images/reddit-market-img.webp";
import technology2 from "../assets/images/technology2.webp";
import wealth1 from "../assets/images/wealth1.webp";
import wealth2 from "../assets/images/wealth2.webp";
import "../styles/secondnavbar.css";

const Navbar = () => {
  return (
    <nav className="second-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <ul className="nav-links second-nav-links">
          <li className="nav-item">
            <a className="ps-0" id="markets" href="/market-details">
              Markets
            </a>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <div className="dropdown-left">
                  <h3>Markets</h3>
                  <ul className="category-list">
                    <li>1. New</li>
                    <li>2. Popular</li>
                    <li>3. Shared</li>
                    <li>4. All</li>
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
                          Hedge Funds Are Still Betting Big on the Market, Even
                          if They Are Less Bullish Than Before, Morgan Says
                        </h4>
                      </div>
                    </div>
                    <div className="article">
                      <div className="article-image">
                        <img src={market2} alt="Macy's storefront" />
                      </div>
                      <div className="article-content">
                        <span className="article-category">Markets</span>
                        <h4 className="article-title">
                          Stocks of Macy's Fall as It Cuts Guidance in Light of
                          External Uncertainties
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown-right">
                  <div className="follow-section">
                    <h3>Follow ValourWealth</h3>
                    <div className="social-icon">
                      <a
                        href="https://x.com/valourwealthltd?s=11"
                        target="blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div className="view-more">
                    <a className="theme_btn" href="/market-details">
                      View More Markets →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a id="technology" href="technology-details">
              Technology
            </a>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <div className="dropdown-left">
                  <h3>Technology</h3>
                  <ul className="category-list">
                    <li>1. AI</li>
                    <li>2. Software</li>
                    <li>3. Hardware</li>
                    <li>4. All</li>
                  </ul>
                </div>
                <div className="dropdown-center">
                  <h3>Latest</h3>
                  <div className="latest-articles">
                    <div className="article">
                      <div className="article-image">
                        <img src={technology1} alt="AI technology" />
                      </div>
                      <div className="article-content">
                        <span className="article-category">Technology</span>
                        <h4 className="article-title">
                          How Apple Plans to Bring Generative Ai to All Its
                          Devices
                        </h4>
                      </div>
                    </div>
                    <div className="article">
                      <div className="article-image">
                        <img src={technology2} alt="Semiconductor factory" />
                      </div>
                      <div className="article-content">
                        <span className="article-category">Technology</span>
                        <h4 className="article-title">
                          Meta Launches AI Coding Software in Competition With
                          OpenAI
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown-right">
                  <div className="follow-section">
                    <h3>Follow ValourWealth</h3>
                    <div className="social-icon">
                      <a
                        href="https://x.com/valourwealthltd?s=11"
                        target="blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div className="view-more">
                    <a className="theme_btn" href="technology-details">
                      View More Technology →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a id="wealth" href="/wealth-details">
              Wealth
            </a>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <div className="dropdown-left">
                  <h3>Wealth</h3>
                  <ul className="category-list">
                    <li>1. Investing</li>
                    <li>2. Real Estate</li>
                    <li>3. Retirement</li>
                    <li>4. All</li>
                  </ul>
                </div>
                <div className="dropdown-center">
                  <h3>Latest</h3>
                  <div className="latest-articles">
                    <div className="article">
                      <div className="article-image">
                        <img src={wealth1} alt="Tax documents" />
                      </div>
                      <div className="article-content">
                        <span className="article-category">Wealth</span>
                        <h4 className="article-title">
                          New Tax Laws Could Impact High-Net-Worth Individuals
                          in 2024
                        </h4>
                      </div>
                    </div>
                    <div className="article">
                      <div className="article-image">
                        <img src={wealth2} alt="Investment portfolio" />
                      </div>
                      <div className="article-content">
                        <span className="article-category">Wealth</span>
                        <h4 className="article-title">
                          Alternative Investments Gain Popularity Among
                          Millennial Investors
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown-right">
                  <div className="follow-section">
                    <h3>Follow ValourWealth</h3>
                    <div className="social-icon">
                      <a
                        href="https://x.com/valourwealthltd?s=11"
                        target="blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div className="view-more">
                    <a className="theme_btn" href="wealth-details">
                      View More Wealth →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a id="events" href="/events-details">
              Events
            </a>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <div className="dropdown-left">
                  <h3>Events</h3>
                  <ul className="category-list">
                    <li>1. Upcoming</li>
                    <li>2. Featured</li>
                    <li>3. Virtual</li>
                    <li>4. All</li>
                  </ul>
                </div>
                <div className="dropdown-center">
                  <h3>Latest</h3>
                  <div className="latest-articles">
                    <div className="article">
                      <div className="article-image">
                        <img src={event1} alt="Investment summit" />
                      </div>
                      <div className="article-content">
                        <span className="article-category">Events</span>
                        <h4 className="article-title">
                          Annual Investment Summit to Feature Top Financial
                          Experts
                        </h4>
                      </div>
                    </div>
                    <div className="article">
                      <div className="article-image">
                        <img src={event2} alt="Tech conference" />
                      </div>
                      <div className="article-content">
                        <span className="article-category">Events</span>
                        <h4 className="article-title">
                          Tech Conference Announces Expanded Program for Next
                          Quarter
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown-right">
                  <div className="follow-section">
                    <h3>Follow ValourWealth</h3>
                    <div className="social-icon">
                      <a
                        href="https://x.com/valourwealthltd?s=11"
                        target="blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div className="view-more">
                    <a className="theme_btn" href="/events-details">
                      View More Events →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <a id="products" href="/our-products">
              Products
            </a>
          </li>
          {/* <li>
            <a id="more" href="/more">
              More
            </a>
          </li> */}
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
