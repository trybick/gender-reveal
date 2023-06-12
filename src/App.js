import React from "react";
import * as graphql from "./mlp/tmp.js";
import loadingGif from "./loading.gif";
import "./styles.css";

export default function App() {
  const [isRevealed, setIsRevealed] = React.useState(false);
  const [loading, setIsLoading] = React.useState(false);
  const [counter, setCounter] = React.useState(graphql.s);
  const [isFixed, setIsFixed] = React.useState(false);

  React.useEffect(() => {
    if (loading === true) {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [counter, loading]);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsRevealed(true);
    }, graphql.t);
  };

  console.log("no cheating ;)");

  return (
    <div className="wrapper">
      {!isRevealed && !loading && (
        <>
          <div className="intro">Click the button to reveal the gender!</div>
          <button className="reveal-btn" onClick={handleClick}>
            Reveal{" "}
            <span aria-label="baby" role="img">
              👶
            </span>
          </button>
        </>
      )}

      {loading && !isRevealed && (
        <div className="loading">
          (building suspense)
          <div className="countdown">{counter}</div>
          <img className="karate" src={loadingGif} alt="loading..." />
        </div>
      )}

      {isRevealed && !isFixed && (
        <div className="revealed">
          {graphql.r}
          <div className="for-real">
            Oops looks like a bug{" "}
            <span aria-label="facepalm" role="img">
              🤦‍♂️
            </span>
            <br />
            Click again -
            <br />
            <button className="reveal-btn" onClick={() => setIsFixed(true)}>
              For real though{" "}
            </button>
          </div>
        </div>
      )}

      {isFixed && (
        <div className="final">
          {graphql.x}
          <br />
          {graphql.y}
        </div>
      )}
    </div>
  );
}
