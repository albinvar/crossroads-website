import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numericTarget =
      parseInt(target.replace(/[^0-9]/g, "")) *
      (target.includes("k") ? 1000 : 1);

    const increment = Math.max(1, Math.floor(numericTarget / 100));
    const intervalTime = 20;

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < numericTarget) {
          const nextCount = Math.min(prevCount + increment, numericTarget);
          return nextCount;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <motion.h2
      className="text-5xl font-bold text-gray-100"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {count >= 1000 ? `+${Math.floor(count / 1000)}k` : `+${count}`}
    </motion.h2>
  );
};

export default Counter;
