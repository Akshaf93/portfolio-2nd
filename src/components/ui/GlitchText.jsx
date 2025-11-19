import React, { useState, useEffect } from 'react';

const GlitchText = ({ text, className }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
  const [display, setDisplay] = useState(text);
  
  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplay(prev => 
        text.split("")
          .map((letter, index) => {
            if(index < iterations) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );
      
      if(iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3; // Adjust speed here
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{display}</span>;
};

export default GlitchText;