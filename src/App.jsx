import { useState } from "react";
import "./styles/App.css";
import TextArea from "./components/TextArea";

function App() {
  const text =
    "The nellie, a cruising yawl, swung to her anchor with- out a flutter of the sails, and was at rest. The flood had made, the wind was nearly calm, and being bound down the river, the only thing for it was to come to and wait for the turn of the tide.";
  const [textParts, setTextParts] = useState({
    acceptedChars: "",
    rejectedChars: "",
    remainingChars:
      "The nellie, a cruising yawl, swung to her anchor with- out a flutter of the sails, and was at rest. The flood had made, the wind was nearly calm, and being bound down the river, the only thing for it was to come to and wait for the turn of the tide.",
  });

  return (
    <div className="App">
      <h1>Type Test</h1>
      <TextArea text={text} textParts={textParts} setTextParts={setTextParts} />
    </div>
  );
}

export default App;
