import { useEffect, useRef, useState } from "react";
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
import Menu from "./components/Menu";
import { getNumberOfWords, millisToMinutesAndSeconds } from "./utils/utils";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [language, setLanguage] = useLocalStorage("isEnglish", true);
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 30));
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);
  const [review, setReview] = useState({
    time: 0,
    speed: 0,
    accuracy: 0,
  });
  const [text, setText] = useState(
    language ? englishData[randomNum].text : serbianData[randomNum].text
  );
  const [textParts, setTextParts] = useState({
    acceptedChars: "",
    rejectedChars: "",
    remainingChars: text,
  });
  const [mistakesNum, setMistakesNum] = useState(0);
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const timeRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    setDone(false);
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
    setReview({
      time: 0,
      speed: 0,
      accuracy: 0,
    });
  }, [language, randomNum]);

  useEffect(() => {
    if (started) {
      intervalRef.current = setInterval(startTimer, 1000);
    } else {
      stopTimer();
    }
  }, [started]);

  const startTimer = () => {
    timeRef.current += 1;
    setStopwatchTime(millisToMinutesAndSeconds(timeRef.current * 1000));
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    if (done) {
      const time = stopwatchTime;
      const timeInMinutes = (timeRef.current * 1000) / 1000 / 60;
      const wordsNum = getNumberOfWords(text);
      const speed = wordsNum / timeInMinutes;
      const accuracy = text.length / ((text.length + mistakesNum) / 100);

      setReview({
        time: time,
        speed: speed.toFixed(2),
        accuracy: accuracy.toFixed(2),
      });
      setStopwatchTime(0);
      timeRef.current = 0;
    } else {
      setReview({
        time: 0,
        speed: 0,
        accuracy: 0,
      });
    }
  }, [done]);

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
      <TextArea
        text={text}
        textParts={textParts}
        setTextParts={setTextParts}
        done={done}
        setDone={setDone}
        started={started}
        setStarted={setStarted}
        setMistakesNum={setMistakesNum}
      />
      <Menu
        darkMode={darkMode}
        isEnglish={language}
        setRandomNum={setRandomNum}
        review={review}
        started={started}
        setStarted={setStarted}
        stopwatchTime={stopwatchTime}
      />
    </div>
  );
}

export default App;
