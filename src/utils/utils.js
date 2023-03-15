export const IGNORE_KEYS = [
  "Enter",
  "Escape",
  "Shift",
  "Control",
  "Alt",
  "Tab",
  "CapsLock",
  "Meta",
  "ArrowUp",
  "ArrowDown",
  "ArrowRight",
  "ArrowLeft",
  "Delete",
  "Insert",
  "Home",
  "End",
  "PageUp",
  "PageDown",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
];

export const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export const getNumberOfWords = (text) => {
  return text.split(" ").length;
};
