import { useEffect, useState } from "react";

const INITIAL_COUNTDOWN = 25 * 60; // 25 minutes

export const useCountdown = (initialTime = INITIAL_COUNTDOWN) => {
  const [startCountDown, setStartCountdown] = useState(false);
  const [secondsAmount, setSecondsAmount] = useState(initialTime);
  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;
  useEffect(() => {
    if (startCountDown) {
      if (secondsAmount === 0) {
        alert("Time is over");
        setSecondsAmount(INITIAL_COUNTDOWN);
        setStartCountdown(false);
      } else {
        const interval = setInterval(
          () => setSecondsAmount((prevState) => prevState - 1),
          1000
        );
        return () => clearInterval(interval);
      }
    }
  }, [startCountDown, secondsAmount]);

  const resetCountDown = () => {
    setStartCountdown(false);
    setSecondsAmount(initialTime);
  };
  return {
    minutes,
    seconds,
    startCountDown,
    setStartCountdown,
    resetCountDown,
  };
};
