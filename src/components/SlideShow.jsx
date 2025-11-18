import { useState, useEffect } from "react";

const imagens = [
  "https://picsum.photos/900/300?1",
  "https://picsum.photos/900/300?2",
  "https://picsum.photos/900/300?3",
];

export default function SlideShow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slideshow">
      <img src={imagens[index]} alt="slide" />
    </div>
  );
}
