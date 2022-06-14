import { useState } from "react";
import "./App.css";

function App() {
  const [scrollResult, setScroll] = useState(0);
  console.log(scrollResult);
  window.addEventListener("scroll", () => {
    setScroll(
      parseInt(((window.pageYOffset / window.innerHeight) * 100 * 100) / 37)
    );
  });

  return (
    <div
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      id="progressbar"
      style={{ "--value": scrollResult }}
    ></div>
  );
}

export default App;
