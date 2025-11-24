import React, { useState, useEffect } from "react";

const TextChanger = () => {
  const texts = [
    " I'm Ashu Sharma",
    " I'm a Frontend Developer",
    " I'm a UI-UX designer"
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubIndex(prev => 
        isForward ? prev + 1 : prev - 1
      );

      if (isForward && subIndex === texts[index].length) {
        setTimeout(() => setIsForward(false), 1000);
      }

      if (!isForward && subIndex === 0) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [subIndex, isForward, index, texts.length]);

  return (
    <div className="transition ease duration-300 ">
      {texts[index].substring(0, subIndex)}
    </div>
  );
};

export default TextChanger;
