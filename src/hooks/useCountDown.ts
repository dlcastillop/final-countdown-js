import { useState, useEffect } from "react";

export const useCountDown = (min: number, max: number): number => {
  if (min >= max) {
    throw new Error("The min parameter has to be less than the max parameter.");
  }

  const [count, setCount] = useState(max);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        return prev - 1;
      });
    }, 1000);

    if (count <= min) {
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  }, [count, min]);

  return count;
};
