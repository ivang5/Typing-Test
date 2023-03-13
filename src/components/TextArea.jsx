import React, { useRef } from "react";
import "../styles/textArea.css";
import useEventListener from "../utils/useEventListener";
import { IGNORE_KEYS } from "../utils/utils";

function TextArea({ text, textParts, setTextParts }) {
  const nextCharRef = useRef(text.charAt(0));

  const detectKeyDown = (e) => {
    if (IGNORE_KEYS.includes(e.key)) {
      return;
    }

    if (e.key === "Backspace") {
      if (
        textParts.acceptedChars.length === 0 &&
        textParts.rejectedChars.length === 0
      ) {
        console.log("ovde sam");
        return;
      }

      if (textParts.rejectedChars.length === 0) {
        nextCharRef.current = text.charAt(textParts.acceptedChars.length - 1);
        setTextParts({
          ...textParts,
          acceptedChars: text.substring(0, textParts.acceptedChars.length - 1),
          remainingChars: text.substring(textParts.acceptedChars.length - 1),
        });
      } else {
        setTextParts({
          ...textParts,
          rejectedChars: text.substring(
            textParts.acceptedChars.length,
            textParts.acceptedChars.length + textParts.rejectedChars.length - 1
          ),
          remainingChars: text.substring(
            textParts.acceptedChars.length + textParts.rejectedChars.length - 1
          ),
        });
      }

      return;
    }

    if (textParts.rejectedChars.length === 0) {
      if (e.key === nextCharRef.current) {
        nextCharRef.current = textParts.remainingChars.charAt(1);
        setTextParts({
          ...textParts,
          acceptedChars: text.substring(0, textParts.acceptedChars.length + 1),
          remainingChars: text.substring(textParts.acceptedChars.length + 1),
        });
      } else {
        setTextParts({
          ...textParts,
          rejectedChars: text.substring(
            textParts.acceptedChars.length,
            textParts.acceptedChars.length + 1
          ),
          remainingChars: text.substring(textParts.acceptedChars.length + 1),
        });
      }
    } else {
      setTextParts({
        ...textParts,
        rejectedChars: text.substring(
          textParts.acceptedChars.length,
          textParts.acceptedChars.length + textParts.rejectedChars.length + 1
        ),
        remainingChars: text.substring(
          textParts.acceptedChars.length + textParts.rejectedChars.length + 1
        ),
      });
    }
  };

  useEventListener("keydown", detectKeyDown);

  return (
    <div className="text-area">
      <span className="accepted-chars">{textParts.acceptedChars}</span>
      <span className="rejected-chars">{textParts.rejectedChars}</span>
      <span className="pointer"></span>
      <span className="remaining-chars">{textParts.remainingChars}</span>
    </div>
  );
}

export default TextArea;
