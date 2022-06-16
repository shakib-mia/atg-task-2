import { useState } from "react";
import "./App.css";
import Title from "./components/Title";

function App() {
  const [scrollResult, setScroll] = useState(0);
  const [background, setBackground] = useState("");

  window.addEventListener("scroll", () => {
    const scrollCount = parseInt(
      (window?.pageYOffset / window.innerHeight) * (89 / 7)
    );
    setScroll(scrollCount);
    console.log(scrollCount);
  });

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
              ? "#000000"
              : scrollResult >= 38 && scrollResult < 51
              ? "#000000"
              : scrollResult >= 51 && scrollResult < 63
              ? "#000000"
              : scrollResult >= 63 && scrollResult < 76
              ? "#000000"
              : "#000000",
        }}
      >
        <div className="left-text">
          <div>
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
              scrollResult >= 0 && scrollResult < 12
                ? "#6311A8"
                : scrollResult >= 12 && scrollResult < 25
                ? "#4A27CC"
                : scrollResult >= 25 && scrollResult < 38
                ? "#16263B"
                : scrollResult >= 38 && scrollResult < 51
                ? "#000000"
                : scrollResult >= 51 && scrollResult < 63
                ? "#000000"
                : scrollResult >= 63 && scrollResult < 76
                ? "#000000"
                : "#000000",
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
            style={{
              "--value": scrollResult,
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
      <div className="blog-container">
        <div className="blog">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugit
          minus, eum hic molestias dolorum harum accusantium commodi blanditiis
          aliquam, accusamus sint tenetur, sit suscipit laudantium cumque
          numquam doloribus modi?
        </div>
        <div className="blog">
          Laboriosam quos delectus cum voluptas dolorum. Non odio, voluptas
          nihil porro perspiciatis iste, ad libero ea magni aperiam quos
          repudiandae incidunt consequatur molestiae deserunt aliquam, quod
          tempore deleniti fuga saepe?
        </div>
        <div className="blog">
          Impedit voluptas quas dolorum consequuntur doloremque quod ad
          repellendus natus sit commodi corrupti aliquid, ratione, laudantium
          excepturi, mollitia esse aut! Libero, tempora suscipit similique
          fugiat dolorum quisquam voluptatum maiores harum?
        </div>
        <div className="blog">
          Quidem voluptatibus nesciunt harum nobis corrupti, quis officiis vitae
          corporis ducimus, dolorem impedit atque est dolores? Nesciunt
          voluptatibus assumenda reprehenderit eum labore non dolores, nisi
          error sed et fuga illo!
        </div>
        <div className="blog">
          Illo, consequuntur suscipit! Rerum ipsum impedit error voluptatibus
          laudantium nam enim magni quo harum odio, sequi voluptatum minus
          debitis omnis blanditiis, eligendi hic porro. Ratione earum
          perspiciatis unde sapiente rerum.
        </div>
        <div className="blog">
          Dicta quis error dolorem delectus voluptate, doloribus repudiandae
          modi est non vitae dolor a perspiciatis, incidunt facere molestias
          enim distinctio vel expedita aliquid labore. Aspernatur atque
          consequuntur illo veniam ut.
        </div>
        <div className="blog">
          Eligendi ab assumenda, optio autem esse praesentium quod molestias,
          debitis, beatae vel quibusdam commodi dolorum pariatur sunt dolore
          maxime cupiditate ea delectus laudantium ipsam ducimus inventore
          nostrum. Reprehenderit, ad nesciunt.
        </div>
      </div>
    </div>
  );
}

export default App;
