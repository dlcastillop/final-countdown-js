import { useState, useEffect } from "react";

export const useCountUp = (min: number, max: number): number => {
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
