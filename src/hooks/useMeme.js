import { useState, useEffect, useRef } from "react";

export default function useMeme() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
    topFontSize: 32,
    bottomFontSize: 32,
    topColor: "#ffffff",
    bottomColor: "#ffffff",
  });

  const [allMemes, setAllMemes] = useState([]);
  const memeRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme(prev => ({
      ...prev,
      [name]: name.includes("FontSize") ? parseInt(value) : value,
    }));
  };

  const getRandomMeme = () => {
    if (!allMemes.length) return;
    const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];
    setMeme(prev => ({ ...prev, imageUrl: randomMeme.url }));
  };

  return { meme, setMeme, allMemes, handleChange, getRandomMeme, memeRef, imgRef };
}
