import { useState } from "react";
import "./styles/App.css";
import TextArea from "./components/TextArea";
import ThemeToggle from "./components/ThemeToggle";
import useLocalStorage from "./utils/useLocalStorage";
import useDarkMode from "./utils/useDarkMode";
import sun from "./assets/icons/sun-fill.svg";
import moon from "./assets/icons/moon-fill.svg";
import serbia from "./assets/icons/serbia-flag.png";
import gb from "./assets/icons/great-britain-flag.png";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [language, setLanguage] = useLocalStorage("isEnglish", true);
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
      <div className="properties">
        <ThemeToggle
          state={language}
          setState={setLanguage}
          icons={{ first: gb, second: serbia }}
          type={"lang"}
        />
        <ThemeToggle
          state={darkMode}
          setState={setDarkMode}
          icons={{ first: moon, second: sun }}
          type={"theme"}
        />
      </div>
      <h1>{language ? "Type test" : "Test kucanja"}</h1>
      <TextArea text={text} textParts={textParts} setTextParts={setTextParts} />
    </div>
  );
}

export default App;
