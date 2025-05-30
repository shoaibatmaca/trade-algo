import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Newsletter from "../components/newsletter";
import PostEditor from "../components/postEditor";
import Posts from "../components/posts";
import Technology from "../components/technology";
import "../styles/global.css";

import backgroundVideo from "../assets/images/bannergreen.mp4";
import Stocks from "../components/Stocks";
import EditorChoice from "../components/editorChoice";
import MarketDetails from "../components/marketDetails";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 p-0">
          <div className="home-banner">
            <video
              className="banner-video w-100 obj_fit"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              onContextMenu={(e) => e.preventDefault()} // Right-click block
              ref={(video) => {
                if (video) {
                  video.removeAttribute("controls"); // Completely remove controls
                  video.controls = false; // Ensure controls are off
                }
              }}
            >
              <source src={backgroundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="banner-text" data-aos="fade-up">
              <h5>Introducing</h5>
              <h1>TradeGPT</h1>
              <p>
                The revolutionary A.I. powered trading assistant is here to help
                you elevate your trading to the next level
              </p>
              <button className="theme_btn">Try It For Free</button>

              {/*  */}
            </div>
          </div>
        </div>
      </div>

      {/* posts components */}

      <MarketDetails />
      <Posts />
      <EditorChoice />
      <Technology />
      <Stocks />
      {/* <Products /> */}
      <PostEditor />
      <Newsletter />
    </div>
  );
}

export default Home;
