import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pleaseeeeee",
  "Don't do this to me",
  ":(",
  "You're breaking my heart",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="text" style={{ fontSize: "35px" }}>
            Yippeee!!!!
          </div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            style={{ width: "350px", height: "250px", background: "pink" }}
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />

          <div>
            <span style={{ fontSize: "35px" }}>Will You Be My Valentine?</span>
          </div>
          <div>
            <button
              className="yes-button"
              style={{
                fontSize: yesButtonSize,
                backgroundColor: "#B2AC88",
                borderRadius: "5px",
              }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              style={{
                borderRadius: "3px",
                backgroundColor: "#FF0800",
              }}
              onClick={handleNoClick}
              className="no-button"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
