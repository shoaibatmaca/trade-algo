import "../DashboardSidebarComp/styles/releasenotes.css";

function ReleaseNotes() {
  return (
    <div className="releasenotes_container">
      <h1 className="releasenotes_heading">
        ValourWealth Product Release Notes & Contact Information
      </h1>

      <section className="releasenotes_section">
        <p className="releasenotes_intro">
          Welcome to ValourWealth — your destination for smart, AI-driven
          financial learning and trading tools. We're excited to share our
          latest updates and offerings designed to elevate your trading
          experience.
        </p>

        <h2 className="releasenotes_subheading">
          🚀 Product & Feature Highlights
        </h2>

        <ul className="releasenotes_list">
          <li>
            <strong>TradeGPT – Your AI Trading Assistant:</strong> Get real-time
            market insights across stocks, options, crypto, and forex. Ask
            anything and receive intelligent, data-powered responses instantly.
          </li>
          <li>
            <strong>Wealth Series:</strong> Strategic content crafted for
            long-term investors looking to build sustainable wealth.
          </li>
          <li>
            <strong>Options Academy:</strong> A structured guide to mastering
            options trading with market-based learning.
          </li>
          <li>
            <strong>Beginner Hub – Trading Academy:</strong> Start your trading
            journey with beginner-friendly education, tools, and tips.
          </li>
          <li>
            <strong>One-to-One Mentorship:</strong> Personalized coaching and
            feedback from trading experts.
          </li>
          <li>
            <strong>Platinum Program:</strong> Unlock premium access to advanced
            tools, exclusive live sessions, and priority AI features.
          </li>
          <li>
            <strong>Live Training Sessions:</strong> Learn from experts in
            real-time with Q&A and interactive webinars.
          </li>
        </ul>
      </section>

      <section className="releasenotes_section">
        <h2 className="releasenotes_subheading">📬 Contact Us</h2>
        <p className="releasenotes_contacttext">
          Have questions or want to get started with one of our programs? Fill
          in your details below, and a ValourWealth representative will reach
          out shortly:
        </p>

        <form className="releasenotes_form">
          <input
            type="text"
            placeholder="Name"
            className="releasenotes_input"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="releasenotes_input"
          />
          <input
            type="text"
            placeholder="Phone (Optional)"
            className="releasenotes_input"
          />
          <select className="releasenotes_input">
            <option>Interested In...</option>
            <option>TradeGPT</option>
            <option>Options Academy</option>
            <option>Mentorship</option>
            <option>Platinum Program</option>
            <option>Beginner Hub</option>
            <option>Other</option>
          </select>
          <textarea
            placeholder="Message / Inquiry"
            className="releasenotes_input"
            rows="4"
          ></textarea>
          <button type="submit" className="releasenotes_button">
            Submit
          </button>
        </form>
      </section>

      <footer className="releasenotes_footer">
        © 2025 ValourWealth. All rights reserved.
      </footer>
    </div>
  );
}

export default ReleaseNotes;
