import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Home from "../src/images/HomePage.png";
import third from "../src/images/third.png";
import second from "../src/images/second.png";
import First from "../src/images/First.png";
import Sixth from "../src/images/sixth.png";
import Last from "../src/images/Last.png";
import Fifth from "../src/images/Fifth.png";

function App() {
  const [scrollResult, setScroll] = useState(0);
  const [background, setBackground] = useState("");

  const scrollCount = parseInt(
    (window?.pageYOffset / window.innerHeight) * (89 / 7)
  );
  window.addEventListener("scroll", () => {
    setScroll(scrollCount);
  });

  return (
    <div className="container">
      <div
        className="scroll-bar"
        style={{
          width: "40vw",
          background:
            scrollCount >= 0 && scrollCount < 12
              ? "#6311A8"
              : scrollCount >= 12 && scrollCount < 25
              ? "#4A27CC"
              : scrollCount >= 25 && scrollCount < 38
              ? "#0E123A"
              : scrollCount >= 38 && scrollCount < 51
              ? "#16263B"
              : scrollCount >= 51 && scrollCount < 63
              ? "#124CA1"
              : scrollCount >= 63 && scrollCount < 76
              ? "#012A90"
              : "#00834C",
        }}
      >
        <div className="left-text">
          <div>
            <h1>
              {scrollCount >= 0 && scrollCount < 12
                ? "ABC 123"
                : scrollCount >= 12 && scrollCount < 25
                ? "BCD 234"
                : scrollCount >= 25 && scrollCount < 38
                ? "CDE 345"
                : scrollCount >= 38 && scrollCount < 51
                ? "DEF 456"
                : scrollCount >= 51 && scrollCount < 63
                ? "EFG 567"
                : scrollCount >= 63 && scrollCount < 76
                ? "FGH 678"
                : "GHI 789"}
            </h1>
            <p>
              We are the best <br /> web development company <br /> in the world
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <div>View Case Study</div>
                <div></div>
              </span>
            </p>
          </div>
        </div>

        <div
          className="progress-container"
          style={{
            background:
              scrollCount >= 0 && scrollCount < 12
                ? "#6311A8"
                : scrollCount >= 12 && scrollCount < 25
                ? "#4A27CC"
                : scrollCount >= 25 && scrollCount < 38
                ? "#0E123A"
                : scrollCount >= 38 && scrollCount < 51
                ? "#16263B"
                : scrollCount >= 51 && scrollCount < 63
                ? "#124CA1"
                : scrollCount >= 63 && scrollCount < 76
                ? "#012A90"
                : "#00834C",
          }}
        >
          <div id="title">
            {scrollCount >= 0 && scrollCount < 12 ? (
              <Title
                short=""
                big="25M+ Downloads"
                bottomShort="on appstore & google playstore"
              />
            ) : scrollCount >= 12 && scrollCount < 25 ? (
              <Title
                short="The Next Big"
                big="Blockchain"
                bottomShort="Revolution"
              />
            ) : scrollCount >= 25 && scrollCount < 38 ? (
              <Title
                short="Powered by advance"
                big="NASA"
                bottomShort="algorithm"
              />
            ) : scrollCount >= 38 && scrollCount < 51 ? (
              <Title
                short="Redefining"
                big="UX Strategy"
                bottomShort="and UI design"
              />
            ) : scrollCount >= 51 && scrollCount < 63 ? (
              <Title
                short="Text Headline"
                big="Text Headline"
                bottomShort="Footer Headline"
              />
            ) : scrollCount >= 63 && scrollCount < 76 ? (
              <Title
                short="Developing ERP Resolution"
                big="Text Headline"
                bottomShort="In furniture industry"
              />
            ) : (
              <Title
                short="Biggest Classifieds"
                big="East Asia"
                bottomShort="Countries"
              />
            )}
          </div>
          <div
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            id="progressbar"
            style={{
              background:
                scrollCount >= 0 && scrollCount < 12
                  ? "#6311A8"
                  : scrollCount >= 12 && scrollCount < 25
                  ? "#4A27CC"
                  : scrollCount >= 25 && scrollCount < 38
                  ? "#0E123A"
                  : scrollCount >= 38 && scrollCount < 51
                  ? "#16263B"
                  : scrollCount >= 51 && scrollCount < 63
                  ? "#124CA1"
                  : scrollCount >= 63 && scrollCount < 76
                  ? "#012A90"
                  : "#00834C",
              "--value": scrollCount,
            }}
          >
            {console.log(scrollCount)}
            <span className="dot" id="dot-1"></span>
            <span className="dot" id="dot-2"></span>
            <span className="dot" id="dot-3"></span>
            <span className="dot" id="dot-4"></span>
            <span className="dot" id="dot-5"></span>
            <span className="dot" id="dot-6"></span>
            <span className="dot" id="dot-7"></span>
          </div>
        </div>
      </div>
      <div className="blog-container" style={{ background: "#6311A8" }}>
        <div className="blog" style={{ background: "rgb(237 237 237)" }}>
          <img src={First} alt="" />
        </div>
        <div className="blog" style={{ background: "rgb(49 28 128)" }}>
          <img src={second} alt="" />
        </div>
        <div className="blog" style={{ background: "#141748" }}>
          <img src={third} alt="" />
        </div>
        <div className="blog" style={{ background: "#0D131B" }}>
          <img src={Home} alt="" />
        </div>
        <div className="blog" style={{ background: "#2DCDDD" }}>
          <img src={Fifth} alt="" />
        </div>
        <div className="blog" style={{ background: "rgb(9 24 62)" }}>
          <img src={Sixth} alt="" />
        </div>
        <div className="blog" style={{ background: "#00B769" }}>
          <img src={Last} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
