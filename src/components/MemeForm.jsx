import { Icon } from "@iconify/react/dist/iconify.js";

export default function MemeForm({ meme, handleChange, getRandomMeme, saveMemeAsImage }) {
  return (
    <div className="form">
      <label>
        Top Text
        <input value={meme.topText} onChange={handleChange} type="text" name="topText" />
      </label>
      <div className="custom-text">
        <label>Size <input type="number" name="topFontSize" min="10" max="100" value={meme.topFontSize} onChange={handleChange} /></label>
        <label>Color <input type="color" name="topColor" value={meme.topColor} onChange={handleChange} /></label>
      </div>

      <label>
        Bottom Text
        <input value={meme.bottomText} onChange={handleChange} type="text" name="bottomText" />
      </label>
      <div className="custom-text">
        <label>Size <input type="number" name="bottomFontSize" min="10" max="100" value={meme.bottomFontSize} onChange={handleChange} /></label>
        <label>Color <input type="color" name="bottomColor" value={meme.bottomColor} onChange={handleChange} /></label>
      </div>

      <button onClick={getRandomMeme} className="generate-btn">
        Get a new image
        <Icon icon="material-symbols:image" className="icon" />
      </button>
      <button onClick={saveMemeAsImage} className="save-btn">
        Save Meme
        <Icon icon="material-symbols:save" className="icon" />
      </button>
    </div>
  );
}
