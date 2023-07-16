import { useState, useEffect } from "react";

export const useCountUp = (min: number, max: number): number => {
  if (min >= max) {
    throw new Error("The min parameter has to be less than the max parameter.");
  }

  const [count, setCount] = useState(min);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 1000);

    if (count >= max) {
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  }, [count, max]);

  return count;
};
