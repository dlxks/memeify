import React, { useEffect } from "react";
import useDraggable from "../hooks/useDraggable";

export default function MemeCanvas({ meme, memeRef, imgRef }) {
  const topDraggable = useDraggable({ x: 0, y: 0 });
  const bottomDraggable = useDraggable({ x: 0, y: 0 });

  useEffect(() => {
    if (!imgRef.current) return;
    const imgEl = imgRef.current;

    const setPositions = () => {
      const rect = imgEl.getBoundingClientRect();
      const centerX = rect.width / 2;
      topDraggable.setPosition({ x: centerX, y: rect.height * 0.05 });
      bottomDraggable.setPosition({ x: centerX, y: rect.height * 0.9 });
    };

    imgEl.complete ? setPositions() : (imgEl.onload = setPositions);
  }, [meme.imageUrl]);

  return (
    <div className="meme" ref={memeRef} style={{ position: "relative" }}>
      <img ref={imgRef} src={meme.imageUrl} alt="Meme" />
      <div
        style={{
          position: "absolute",
          top: `${topDraggable.position.y}px`,
          left: `${topDraggable.position.x}px`,
          transform: "translate(-50%, -50%)",
          fontSize: meme.topFontSize,
          fontFamily: "Impact, sans-serif",
          color: meme.topColor,
          textShadow: "2px 2px 4px black",
          whiteSpace: "nowrap",
          cursor: "move",
        }}
        onMouseDown={topDraggable.handleMouseDown}
      >
        {meme.topText}
      </div>
      <div
        style={{
          position: "absolute",
          top: `${bottomDraggable.position.y}px`,
          left: `${bottomDraggable.position.x}px`,
          transform: "translate(-50%, -50%)",
          fontSize: meme.bottomFontSize,
          fontFamily: "Impact, sans-serif",
          color: meme.bottomColor,
          textShadow: "2px 2px 4px black",
          whiteSpace: "nowrap",
          cursor: "move",
        }}
        onMouseDown={bottomDraggable.handleMouseDown}
      >
        {meme.bottomText}
      </div>
    </div>
  );
}
