

import Link from "next/link";
import {headers} from 'next/headers'

import { IoIosArrowBack } from "react-icons/io";
import VideoPlayer from "../../../../components/videoPlayer";
import ButtonTranslate from "../../../../components/ButtonTranslate";

import { cookies } from 'next/headers'

const getArtData = async ()=>{
    const host = headers().get("host")
    console.log(host)
    const art= await fetch(`http://${host}/api/art`)
    return art.json()
}
const getTheme = async ()=>{
    return cookies().get('theme')
}

export default async function ArtDetailed() {
    
    const art = await getArtData()
    const theme = await getTheme()
    console.log(theme)
    return (
        <div className={`${theme?.value ==='light'?'bg-white text-black':'bg-black text-white'}`}>
            <div className="flex items-center p-4">
               <div className="text-xl">
               <IoIosArrowBack />
               </div>
                 
                
                    
                
                <Link href="/">
                    Voltar
                </Link>
            </div>


           <VideoPlayer urlVideo={art.urlVideo} />
            
            <main className={`px-4 `} >
                <h1 className="pt-4 text-xl font-bold">{art.title}</h1>
                <hr className="w-1/3 border-black border-l mb-2" />
                <h3 className="text-xs mb-2">{art.author}</h3>
                <hr className="w-1/3 border-black border-l mb-4" />
                <ButtonTranslate art={art}/>
            </main>

        </div>
    )
}