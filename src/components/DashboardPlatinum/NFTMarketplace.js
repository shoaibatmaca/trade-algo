const NFTBadgesComponent = () => {
  const badgeCategories = [
    {
      categoryTitle: "6 Month Anniversary",
      badges: [
        {
          title: "SUSTAINED STRATEGIST",
          subtitle: "6 Month Milestone",
          tokenId: "0x1234...5678",
          mintDate: "Mar 15, 2024",
          image: "🏆",
        },
        {
          title: "PERSISTENT PLANNER",
          subtitle: "6 Month Achievement",
          tokenId: "0x1235...5679",
          mintDate: "Mar 16, 2024",
          image: "📊",
        },
        {
          title: "DEDICATED DEVELOPER",
          subtitle: "6 Month Journey",
          tokenId: "0x1236...5680",
          mintDate: "Mar 17, 2024",
          image: "💻",
        },
        {
          title: "LOYAL MEMBER",
          subtitle: "6 Month Commitment",
          tokenId: "0x1237...5681",
          mintDate: "Mar 18, 2024",
          image: "🎖",
        },
        {
          title: "GROWTH CHAMPION",
          subtitle: "6 Month Progress",
          tokenId: "0x1238...5682",
          mintDate: "Mar 19, 2024",
          image: "📈",
        },
      ],
    },
    {
      categoryTitle: "Epic",
      badges: [
        {
          title: "EPIC WARRIOR",
          subtitle: "Legendary Fighter",
          tokenId: "0x2234...6678",
          mintDate: "Apr 15, 2024",
          image: "⚔",
        },
        {
          title: "EPIC EXPLORER",
          subtitle: "Adventure Master",
          tokenId: "0x2235...6679",
          mintDate: "Apr 16, 2024",
          image: "🗺",
        },
        {
          title: "EPIC BUILDER",
          subtitle: "Creation Legend",
          tokenId: "0x2236...6680",
          mintDate: "Apr 17, 2024",
          image: "🏗",
        },
        {
          title: "EPIC TRADER",
          subtitle: "Market Master",
          tokenId: "0x2237...6681",
          mintDate: "Apr 18, 2024",
          image: "💰",
        },
        {
          title: "EPIC MENTOR",
          subtitle: "Wisdom Guide",
          tokenId: "0x2238...6682",
          mintDate: "Apr 19, 2024",
          image: "🎓",
        },
        {
          title: "EPIC INNOVATOR",
          subtitle: "Future Creator",
          tokenId: "0x2239...6683",
          mintDate: "Apr 20, 2024",
          image: "🚀",
        },
      ],
    },
    {
      categoryTitle: "First Place",
      badges: [
        {
          title: "CHAMPION WINNER",
          subtitle: "Tournament Victor",
          tokenId: "0x3234...7678",
          mintDate: "May 15, 2024",
          image: "🥇",
        },
        {
          title: "SPEED CHAMPION",
          subtitle: "Fastest Performer",
          tokenId: "0x3235...7679",
          mintDate: "May 16, 2024",
          image: "⚡",
        },
        {
          title: "SKILL MASTER",
          subtitle: "Technical Excellence",
          tokenId: "0x3236...7680",
          mintDate: "May 17, 2024",
          image: "🎯",
        },
        {
          title: "STRATEGY KING",
          subtitle: "Tactical Genius",
          tokenId: "0x3237...7681",
          mintDate: "May 18, 2024",
          image: "♟",
        },
        {
          title: "LEADER SUPREME",
          subtitle: "Ultimate Guide",
          tokenId: "0x3238...7682",
          mintDate: "May 19, 2024",
          image: "👑",
        },
      ],
    },
    {
      categoryTitle: "Founder",
      badges: [
        {
          title: "ORIGINAL FOUNDER",
          subtitle: "Platform Creator",
          tokenId: "0x4234...8678",
          mintDate: "Jun 15, 2024",
          image: "🏛",
        },
        {
          title: "VISION FOUNDER",
          subtitle: "Dream Builder",
          tokenId: "0x4235...8679",
          mintDate: "Jun 16, 2024",
          image: "👁",
        },
        {
          title: "TECH FOUNDER",
          subtitle: "Innovation Pioneer",
          tokenId: "0x4236...8680",
          mintDate: "Jun 17, 2024",
          image: "⚙",
        },
        {
          title: "COMMUNITY FOUNDER",
          subtitle: "People Builder",
          tokenId: "0x4237...8681",
          mintDate: "Jun 18, 2024",
          image: "🤝",
        },
        {
          title: "LEGACY FOUNDER",
          subtitle: "History Maker",
          tokenId: "0x4238...8682",
          mintDate: "Jun 19, 2024",
          image: "📜",
        },
      ],
    },
    {
      categoryTitle: "Legendary",
      badges: [
        {
          title: "LEGENDARY HERO",
          subtitle: "Mythical Status",
          tokenId: "0x5234...9678",
          mintDate: "Jul 15, 2024",
          image: "🦸",
        },
        {
          title: "LEGENDARY SAGE",
          subtitle: "Ancient Wisdom",
          tokenId: "0x5235...9679",
          mintDate: "Jul 16, 2024",
          image: "🧙",
        },
        {
          title: "LEGENDARY DIAMOND",
          subtitle: "Precious Rarity",
          tokenId: "0x5236...9680",
          mintDate: "Jul 17, 2024",
          image: "💎",
        },
        {
          title: "LEGENDARY PHOENIX",
          subtitle: "Eternal Spirit",
          tokenId: "0x5237...9681",
          mintDate: "Jul 18, 2024",
          image: "🔥",
        },
        {
          title: "LEGENDARY DRAGON",
          subtitle: "Ultimate Power",
          tokenId: "0x5238...9682",
          mintDate: "Jul 19, 2024",
          image: "🐉",
        },
        {
          title: "LEGENDARY CROWN",
          subtitle: "Royal Authority",
          tokenId: "0x5239...9683",
          mintDate: "Jul 20, 2024",
          image: "👑",
        },
      ],
    },
    {
      categoryTitle: "Rare",
      badges: [
        {
          title: "RARE GEM",
          subtitle: "Precious Stone",
          tokenId: "0x6234...0678",
          mintDate: "Aug 15, 2024",
          image: "💍",
        },
        {
          title: "RARE COLLECTOR",
          subtitle: "Special Hunter",
          tokenId: "0x6235...0679",
          mintDate: "Aug 16, 2024",
          image: "🔍",
        },
        {
          title: "RARE ARTIST",
          subtitle: "Creative Master",
          tokenId: "0x6236...0680",
          mintDate: "Aug 17, 2024",
          image: "🎨",
        },
        {
          title: "RARE SCHOLAR",
          subtitle: "Knowledge Keeper",
          tokenId: "0x6237...0681",
          mintDate: "Aug 18, 2024",
          image: "📚",
        },
        {
          title: "RARE GUARDIAN",
          subtitle: "Elite Protector",
          tokenId: "0x6238...0682",
          mintDate: "Aug 19, 2024",
          image: "🛡",
        },
      ],
    },
    {
      categoryTitle: "Second Place",
      badges: [
        {
          title: "SILVER MEDALIST",
          subtitle: "Runner-up Champion",
          tokenId: "0x7234...1678",
          mintDate: "Sep 15, 2024",
          image: "🥈",
        },
        {
          title: "SILVER STAR",
          subtitle: "Excellence Award",
          tokenId: "0x7235...1679",
          mintDate: "Sep 16, 2024",
          image: "⭐",
        },
        {
          title: "SILVER KNIGHT",
          subtitle: "Noble Warrior",
          tokenId: "0x7236...1680",
          mintDate: "Sep 17, 2024",
          image: "🗡",
        },
        {
          title: "SILVER CROWN",
          subtitle: "Royal Honor",
          tokenId: "0x7237...1681",
          mintDate: "Sep 18, 2024",
          image: "👑",
        },
        {
          title: "SILVER SHIELD",
          subtitle: "Defense Master",
          tokenId: "0x7238...1682",
          mintDate: "Sep 19, 2024",
          image: "🛡",
        },
      ],
    },
    {
      categoryTitle: "Third Place",
      badges: [
        {
          title: "BRONZE CHAMPION",
          subtitle: "Third Place Winner",
          tokenId: "0x8234...2678",
          mintDate: "Oct 15, 2024",
          image: "🥉",
        },
        {
          title: "BRONZE FIGHTER",
          subtitle: "Determined Warrior",
          tokenId: "0x8235...2679",
          mintDate: "Oct 16, 2024",
          image: "🤺",
        },
        {
          title: "BRONZE EXPLORER",
          subtitle: "Adventure Seeker",
          tokenId: "0x8236...2680",
          mintDate: "Oct 17, 2024",
          image: "🧭",
        },
        {
          title: "BRONZE SCHOLAR",
          subtitle: "Learning Champion",
          tokenId: "0x8237...2681",
          mintDate: "Oct 18, 2024",
          image: "📖",
        },
        {
          title: "BRONZE TRADER",
          subtitle: "Market Participant",
          tokenId: "0x8238...2682",
          mintDate: "Oct 19, 2024",
          image: "📊",
        },
      ],
    },
    {
      categoryTitle: "Uncommon",
      badges: [
        {
          title: "UNCOMMON HUNTER",
          subtitle: "Special Tracker",
          tokenId: "0x9234...3678",
          mintDate: "Nov 15, 2024",
          image: "🏹",
        },
        {
          title: "UNCOMMON MINER",
          subtitle: "Resource Gatherer",
          tokenId: "0x9235...3679",
          mintDate: "Nov 16, 2024",
          image: "⛏",
        },
        {
          title: "UNCOMMON RANGER",
          subtitle: "Wild Explorer",
          tokenId: "0x9236...3680",
          mintDate: "Nov 17, 2024",
          image: "🌲",
        },
        {
          title: "UNCOMMON CRAFTER",
          subtitle: "Skill Artisan",
          tokenId: "0x9237...3681",
          mintDate: "Nov 18, 2024",
          image: "🔨",
        },
        {
          title: "UNCOMMON MYSTIC",
          subtitle: "Magic Wielder",
          tokenId: "0x9238...3682",
          mintDate: "Nov 19, 2024",
          image: "🔮",
        },
        {
          title: "UNCOMMON PILOT",
          subtitle: "Sky Navigator",
          tokenId: "0x9239...3683",
          mintDate: "Nov 20, 2024",
          image: "✈",
        },
      ],
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#222222",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Main Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginBottom: "20px",
            }}
          >
            NFT Badge Collection
          </h1>
          <p
            style={{
              color: "#9ca3af",
              fontSize: "1.1rem",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Discover and collect exclusive digital badges. Trade special edition
            badges, achievement trophies, and limited-time collectibles with
            other platinum members.
          </p>
        </div>

        {/* Categories */}
        {badgeCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} style={{ marginBottom: "80px" }}>
            {/* Category Title */}
            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  color: "#ffffff",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {category.categoryTitle}
              </h2>
              <div
                style={{
                  width: "80px",
                  height: "3px",
                  background: "linear-gradient(90deg, #fbbf24, #f59e0b)",
                  borderRadius: "2px",
                }}
              ></div>
            </div>

            {/* Cards Grid for this category */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "30px",
              }}
            >
              {category.badges.map((badge, badgeIndex) => (
                <div
                  key={badgeIndex}
                  style={{
                    background:
                      "linear-gradient(145deg, #1f2937 0%, #111827 100%)",
                    borderRadius: "16px",
                    border: "1px solid #374151",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(251, 191, 36, 0.2)";
                    e.currentTarget.style.border = "1px solid #fbbf24";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 6px rgba(0, 0, 0, 0.3)";
                    e.currentTarget.style.border = "1px solid #374151";
                  }}
                >
                  {/* Image Section */}
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
                      padding: "40px",
                      textAlign: "center",
                      borderBottom: "1px solid #374151",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "4rem",
                        marginBottom: "20px",
                        filter: "drop-shadow(0 0 20px rgba(251, 191, 36, 0.5))",
                      }}
                    >
                      {badge.image}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div style={{ padding: "24px", textAlign: "center" }}>
                    {/* Main Title */}
                    <h3
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                        color: "#ffffff",
                        marginBottom: "8px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {badge.title}
                    </h3>

                    {/* Subtitle */}
                    <p
                      style={{
                        color: "#fbbf24",
                        fontSize: "0.95rem",
                        marginBottom: "20px",
                        fontWeight: "500",
                      }}
                    >
                      {badge.subtitle}
                    </p>

                    {/* Token ID */}
                    <p
                      style={{
                        color: "#6b7280",
                        fontSize: "0.85rem",
                        marginBottom: "8px",
                        fontFamily: "monospace",
                      }}
                    >
                      {badge.tokenId}
                    </p>

                    {/* Mint Date */}
                    <p
                      style={{
                        color: "#6b7280",
                        fontSize: "0.85rem",
                        marginBottom: "24px",
                      }}
                    >
                      Minted on {badge.mintDate}
                    </p>

                    {/* Action Button */}
                    <button
                      style={{
                        background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                        color: "white",
                        border: "none",
                        padding: "12px 24px",
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        width: "100%",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background =
                          "linear-gradient(135deg, #2563eb, #1e40af)";
                        e.target.style.transform = "scale(1.02)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background =
                          "linear-gradient(135deg, #3b82f6, #1d4ed8)";
                        e.target.style.transform = "scale(1)";
                      }}
                    >
                      View details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTBadgesComponent;
