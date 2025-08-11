import { Icon } from "@iconify/react";
import html2canvas from "html2canvas";
import useMeme from "../hooks/useMeme";
import MemeForm from "../components/MemeForm";
import MemeCanvas from "../components/MemeCanvas";

export default function Main() {
  const { meme, handleChange, getRandomMeme, memeRef, imgRef } = useMeme();

  const saveMemeAsImage = async () => {
    if (!memeRef.current) return;
    const canvas = await html2canvas(memeRef.current, { scale: 2, useCORS: true });
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "meme.png";
    link.click();
  };

  return (
    <main>
      <MemeForm
        meme={meme}
        handleChange={handleChange}
        getRandomMeme={getRandomMeme}
        saveMemeAsImage={saveMemeAsImage}
      />
      <MemeCanvas meme={meme} memeRef={memeRef} imgRef={imgRef} />
    </main>
  );
}
