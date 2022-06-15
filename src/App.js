import { useState } from "react";
import "./App.css";

function App() {
  const [scrollResult, setScroll] = useState(0);
  const scrollCount = parseInt(
    (window.pageYOffset / window.innerHeight) * (89 / 7)
  );

  window.addEventListener("scroll", () => {
    setScroll(scrollCount);
    console.log(scrollCount);
  });

  return (
    <div className="container">
      <div
        className="scroll-bar"
        style={{ width: "40vw", background: "#16263B" }}
      >
        <div className="progress-container">
          <div
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            id="progressbar"
            style={{
              "--value": scrollResult,
            }}
          >
            <span>
              {scrollCount >= 0 && scrollCount < 12
                ? "Home"
                : scrollCount >= 12 && scrollCount < 25
                ? "second"
                : scrollCount >= 25 && scrollCount < 38
                ? "third"
                : ""}
            </span>
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
