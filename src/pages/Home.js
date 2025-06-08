import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
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
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const video = videoRef.current;
    if (video) {
      video.controls = false;
      video.removeAttribute("controls");
      video.muted = true;
      video.setAttribute("muted", "");

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay failed:", error);
        });
      }
    }
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
              onContextMenu={(e) => e.preventDefault()}
              ref={videoRef}
            >
              <source src={backgroundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

           <div class="container">
             <div className="banner-text" data-aos="fade-up">
              <h5>Introducing</h5>
              <h1>TradeGPT</h1>
              <p>
                The revolutionary A.I. powered trading assistant is here to help
                you elevate your trading to the next level
              </p>
              <button className="theme_btn">Try It For Free</button>
            </div>
           </div>
          </div>
        </div>
      </div>

      <MarketDetails />
      <Posts />
      <EditorChoice />
      <Technology />
      <Stocks />
      <PostEditor />
      <Newsletter />
    </div>
  );
}

export default Home;