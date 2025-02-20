import { useEffect, useState } from "react";
// import EmojiPicker from "emoji-picker-react";
import "./Body.css";

const Body = () => {

    const [image, setImage] = useState(['😍', '👍', '🤣', "😒", "❤️", "💖", "😎", "😉", "🤦‍♀️", "🤦‍♂️", "👌", "🎶", "🤩", "🫥", "😶‍🌫️", "🤐", "😜", "😓", "🤑", "😰", "🤠", "😈", "👽", "💀"])
    // const [index, setIndex] = useState(length)
    const [tela, setTela] = useState('') //aqui tambem e possivel iniciar um emoji

    const sortImage = () => {

        let i = Math.floor(Math.random() * image.length)
        // console.log("meu indice: " + i)
        // console.log("meu numero do vetor: " + image[i])
        setTela(image[i])

        //nao repetir emoji
        // setImage(image.filter((e) => e != image[i]))

    }

    // utilizar useEffect para carregar um emoji
    useEffect(() => {
        sortImage()
    }, [])

    // useEffect(() => {
    //     const tempo = setInterval(() => {
    //         sortImage();
    //     }, 1000);


    //     return () => clearInterval(tempo);
    // }, []);

    return (
        <div className="container-body">
            <h1 className="title">Story Cube</h1>

            {/* <button className="container-body-button" onClick={sortImage}>Imagem aleatória</button> */}

            {/* {'numero vetor' + image} */}

            {<div className="container-emoji" onClick={sortImage}>
                {tela}
            </div> || <div className="container-emoji" onClick={sortImage}>
                    {tela}
                </div>}


            {/* {image && <EmojiPicker />} */}
        </div>

    )
}

export default Body;