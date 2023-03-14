import { useEffect, useState } from "react";
import "./styles/App.css";
import TextArea from "./components/TextArea";
import Toggle from "./components/Toggle";
import useLocalStorage from "./utils/useLocalStorage";
import useDarkMode from "./utils/useDarkMode";
import sun from "./assets/icons/sun-fill.svg";
import moon from "./assets/icons/moon-fill.svg";
import serbia from "./assets/icons/serbia-flag.png";
import gb from "./assets/icons/great-britain-flag.png";
import serbianData from "./data/serbian.json";
import englishData from "./data/english.json";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [language, setLanguage] = useLocalStorage("isEnglish", true);
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 30));
  const [text, setText] = useState(
    language ? englishData[randomNum].text : serbianData[randomNum].text
  );
  const [textParts, setTextParts] = useState({
    acceptedChars: "",
    rejectedChars: "",
    remainingChars: text,
  });

  useEffect(() => {
    setText(
      language ? englishData[randomNum].text : serbianData[randomNum].text
    );
    setTextParts({
      acceptedChars: "",
      rejectedChars: "",
      remainingChars: language
        ? englishData[randomNum].text
        : serbianData[randomNum].text,
    });
  }, [language]);

  return (
    <div className="App">
      <div className="properties">
        <Toggle
          state={language}
          setState={setLanguage}
          icons={{ first: gb, second: serbia }}
          type={"lang"}
        />
        <Toggle
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
