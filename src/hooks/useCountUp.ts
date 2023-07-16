import { useState, useEffect } from "react";

const useCountUp = (min: number, max: number): number => {
  const [count, setCount] = useState(min);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + 1 > max) {
          clearInterval(interval);
          return prev;
        }

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

export default useCountUp;
