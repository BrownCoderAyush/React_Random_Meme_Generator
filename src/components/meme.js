import React from "react";
import "../css/meme.css"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    function handleChange(event) {
        const data = event.target;
        setMeme({ ...meme, [data.name]: data.value })
    }

    async function handleClicked() {
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

    const styles = {
        backgroundImage: `url(${meme.randomImage})`,
        backgroundSize: 'cover'
    }

    return (
        <main>

            <div action="" className="form">

                <div className="form-meme-input">
                    <input className="form--input" type="text" onChange={handleChange} name="topText" value={meme.topText} placeholder="Top Text" />
                    <input className="form--input" type="text" onChange={handleChange} name="bottomText" value={meme.bottomText} placeholder = "Bottom Text" />
                </div>

                <button onClick={handleClicked} className="form--button" >Get meme here</button>

                <div className="meme" style={styles}>
                    <h2 className="meme--text top">{meme.topText} </h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>

                </div>

            </div>
            
        </main>
    )

}