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
import enterprenout from "../src/images/world-communication-awards-for-best-digital-experience.png";

function App() {
  const [scrollResult, setScroll] = useState();

  window.addEventListener("scroll", () => {
    const scrollCount = (window?.pageYOffset / window?.innerHeight) * (89 / 7);
    setScroll(scrollCount);
  });
  console.log(scrollResult);

  return (
    <div className="container">
      <div
        className="scroll-bar"
        style={{
          width: "40vw",
          background:
            scrollResult >= 0 && scrollResult < 12
              ? "#6311A8"
              : scrollResult >= 12 && scrollResult < 25
              ? "#4A27CC"
              : scrollResult >= 25 && scrollResult < 38
              ? "#0E123A"
              : scrollResult >= 38 && scrollResult < 51
              ? "#16263B"
              : scrollResult >= 51 && scrollResult < 63
              ? "#124CA1"
              : scrollResult >= 63 && scrollResult < 76
              ? "#012A90"
              : "#00834C",
        }}
      >
        <div className="left-text">
          <div>
            {scrollResult > 76 ? <img src={enterprenout} alt="" /> : ""}
            <h1>
              {scrollResult >= 0 && scrollResult < 12
                ? "ABC 123"
                : scrollResult >= 12 && scrollResult < 25
                ? "BCD 234"
                : scrollResult >= 25 && scrollResult < 38
                ? "CDE 345"
                : scrollResult >= 38 && scrollResult < 51
                ? "DEF 456"
                : scrollResult >= 51 && scrollResult < 63
                ? "EFG 567"
                : scrollResult >= 63 && scrollResult < 76
                ? "FGH 678"
                : "GHI 789"}
            </h1>
            <p style={{ marginBottom: "3rem" }}>
              We are the best <br /> web development company <br /> in the world
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>View Case Study</div>
              <div style={{ left: "30vw" }}>S K I P</div>
            </div>
          </div>
        </div>

        <div
          className="progress-container"
          style={{
            background:
              scrollResult >= 0 && scrollResult < 12
                ? "#6311A8"
                : scrollResult >= 12 && scrollResult < 25
                ? "#4A27CC"
                : scrollResult >= 25 && scrollResult < 38
                ? "#0E123A"
                : scrollResult >= 38 && scrollResult < 51
                ? "#16263B"
                : scrollResult >= 51 && scrollResult < 63
                ? "#124CA1"
                : scrollResult >= 63 && scrollResult < 76
                ? "#012A90"
                : "#00834C",
          }}
        >
          <div id="title">
            {scrollResult >= 0 && scrollResult < 12 ? (
              <Title
                short=""
                big="25M+ Downloads"
                bottomShort="on appstore & google playstore"
              />
            ) : scrollResult >= 12 && scrollResult < 25 ? (
              <Title
                short="The Next Big"
                big="Blockchain"
                bottomShort="Revolution"
              />
            ) : scrollResult >= 25 && scrollResult < 38 ? (
              <Title
                short="Powered by advance"
                big="NASA"
                bottomShort="algorithm"
              />
            ) : scrollResult >= 38 && scrollResult < 51 ? (
              <Title
                short="Redefining"
                big="UX Strategy"
                bottomShort="and UI design"
              />
            ) : scrollResult >= 51 && scrollResult < 63 ? (
              <Title
                short="Text Headline"
                big="Text Headline"
                bottomShort="Footer Headline"
              />
            ) : scrollResult >= 63 && scrollResult < 76 ? (
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
            aria-valuenow={scrollResult}
            style={{
              value: scrollResult,
              background:
                scrollResult >= 0 && scrollResult < 12
                  ? "#6311A8"
                  : scrollResult >= 12 && scrollResult < 25
                  ? "#4A27CC"
                  : scrollResult >= 25 && scrollResult < 38
                  ? "#0E123A"
                  : scrollResult >= 38 && scrollResult < 51
                  ? "#16263B"
                  : scrollResult >= 51 && scrollResult < 63
                  ? "#124CA1"
                  : scrollResult >= 63 && scrollResult < 76
                  ? "#012A90"
                  : "#00834C",
            }}
          >
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
