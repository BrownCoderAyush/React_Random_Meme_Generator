import React from "react";
import "../css/meme.css"

export default function Meme() {

    // const [imgSrc , handleImgSrc ] = React.useState("");
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    async function handleClicked(e) {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const data = await response.json();
        const memes = data.data.memes;
        const randomNumber = Math.floor(Math.random() * memes.length);
        const url = memes[randomNumber].url;
        setMeme((prevState) => {
            return {
                ...prevState, randomImage: url
            }
        });
    }

    return (
        <main>
            {console.log("state changed")}
            <div action="" className="form">
                <div className="form-meme-input">
                    <input className="form--input" type="text" />
                    <input className="form--input" type="text" />
                </div>
                <button onClick={handleClicked} className="form--button" >Get meme here</button>
                <img src={meme.randomImage} alt="meme" className="imgHolder" />
            </div>
        </main>
    )

}