'use client'
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useState } from "react";
import { IconContext } from "react-icons";
import { IoIosArrowBack } from "react-icons/io";
import VideoPlayer from "../../../../components/videoPlayer";


export default function ArtDetailed() {
    console.log(getCookie('theme'))
    const [art, setArt] = useState({
        title: "Noite Estrelada",
        author: "Van Gogh", urlVideo: "https://www.youtube.com/watch?v=4KIzqYStdbA",
        poster: "https://i.ytimg.com/vi/4KIzqYStdbA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUvQMStW3d9NCnIBnf9x-hGjp4Cw",
        descriptionPT: "Contemple a majestosa obra de arte de Vincent van Gogh, intitulada 'Noite Estrelada'. Este quadro icônico, pintado em 1889, é um verdadeiro tesouro da história da arte e cativa os corações de milhões de admiradores ao redor do mundo.Através de pinceladas ousadas e cores vibrantes, Van Gogh retrata uma paisagem noturna única, onde o céu estrelado ganha vida em uma dança celestial. As estrelas parecem pulsar de energia, envolvendo a silhueta de uma vila tranquila. A lua, com seu brilho sereno, ilumina a cena com uma luz misteriosa.A expressividade das formas e a intensidade das cores usadas por Van Gogh transmitem emoção e uma sensação de movimento contínuo. A pincelada firme e enérgica dá vida aos ciprestes, que se erguem em direção ao céu como sentinelas misteriosas. A combinação de tons azuis profundos e amarelos vibrantes cria uma atmosfera mágica e envolvente.Através dessa obra-prima, Van Gogh nos transporta para um mundo onde a realidade e a imaginação se encontram. Ele nos convida a contemplar a vastidão do universo e a nos maravilhar com a beleza incomparável da natureza.A 'Noite Estrelada' é uma prova do gênio artístico de Van Gogh e de sua habilidade única em transmitir emoções através da arte. Sua abordagem inovadora e sua paixão pela criação se tornam evidentes em cada pincelada, mergulhando-nos em um mundo de sensações intensas.Esta obra-prima continua a inspirar e cativar pessoas de todas as idades, despertando uma conexão profunda com a arte e a humanidade. Permita-se ser transportado(a) para a magia da 'Noite Estrelada' e desfrute da sua eternidade artística, onde o brilho das estrelas e a criatividade se encontram em uma sinfonia de cores e formas.",
        descriptionEN: "Behold Vincent van Gogh's majestic work of art, titled 'Starry Night'. This iconic painting, created in 1889, is a true treasure of art history and captivates the hearts of millions of admirers around the world. Through bold brushstrokes and vibrant colors, Van Gogh portrays a unique nocturnal landscape, where the starry sky comes to life in a celestial dance. The stars pulsate with energy, enveloping the silhouette of a tranquil village. The moon, with its serene glow, illuminates the scene with a mysterious light.The expressiveness of the forms and the intensity of colors used by Van Gogh convey emotion and a sense of continuous movement. The firm and vigorous brushwork brings the cypresses to life, rising towards the sky like mysterious sentinels. The combination of deep blues and vibrant yellows creates a magical and immersive atmosphere.Through this masterpiece, Van Gogh transports us to a world where reality and imagination converge. He invites us to contemplate the vastness of the universe and marvel at the incomparable beauty of nature.'Starry Night' is proof of Van Gogh's artistic genius and his unique ability to convey emotions through art. His innovative approach and passion for creation become evident in every brushstroke, immersing us in a world of intense sensations.This masterpiece continues to inspire and captivate people of all ages, awakening a deep connection with art and humanity. Allow yourself to be transported to the magic of the 'Starry Night' and enjoy its artistic eternity, where the brilliance of the stars and creativity meet in a symphony of colors and forms."
    })
    const [language, setLanguage] = useState('PT-BR')
    function handleLanguage(){
        if(language ==='PT-BR'){
            setLanguage('EN')
        }else{
            setLanguage('PT-BR')
        }
    }
    return (
        <>
            <div className="flex items-center p-4">
                <IconContext.Provider value={{ className: "text-xl" }}>
                    <IoIosArrowBack />
                </IconContext.Provider>
                <Link href="/">
                    Voltar
                </Link>
            </div>


            <VideoPlayer  />
            
            <main className="px-4 ">
                <h1 className="pt-4 text-xl font-bold">{art.title}</h1>
                <hr className="w-1/3 border-black border-l mb-2" />
                <h3 className="text-xs mb-2">{art.author}</h3>
                <hr className="w-1/3 border-black border-l mb-4" />
                <button
                className="py-2 px-4 bg-black text-white mb-2"
                onClick={()=>{handleLanguage()}}
                >
                    {language === 'PT-BR' ? ' Translate to English' : 'Traduzir para Português'}
                </button>
                <p>
                    {language === 'PT-BR' ? art.descriptionPT : art.descriptionEN}
                </p>
            </main>

        </>
    )
}