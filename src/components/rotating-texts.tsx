import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Word {
  text: string;
  color: string;
}

interface RotatingTextProps {
  words: Word[]; // List of words with their colors
  interval?: number; // Interval for switching words in ms
  className?: string; // Allows external styling
}

const RotatingText: React.FC<RotatingTextProps> = ({
  words,
  interval = 3000, // Default interval set to 3 seconds
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update the current index on the given interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, words.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-50%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`${words[currentIndex].color} ${className}`}
      >
        {words[currentIndex].text}
      </motion.div>
    </AnimatePresence>
  );
};

export default RotatingText;
