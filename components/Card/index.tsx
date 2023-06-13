import Link from "next/link"

interface Props{
    id:string,
    title:string,
    author:string,
    image:string
}


export default function Card(props:Props){
    return(
        <div>
            <Link href={`ArtDetailed/${props.id}`}>
            Card  - joão pedro
            </Link>
            
        </div>
    )
}


import Link from "next/link"
import {IoIosArrowForward} from 'react-icons/io'



export default function Card ({ image, artista, nomeElemento, obraElemento })  {
return (
<>
    <div className="max-w-[390px] m-[16px] max-h-[300px] flex flex-col items-start  ">
    <div>
        <img src={image} alt="image" className="h-[124px] w-[100vw] " />
    </div>

    <p className="pl-2 mt-2 text-[15px] font-medium">{artista}</p>

    <div className="flex flex-col items-start pl-2 text-[25px] font-semibold  w-full max-w-[380px]  ">
        <div>
            <h2 className="whitespace-normal text-left ">
            {nomeElemento} - {obraElemento}
            </h2>
        </div>
        <span className=" text-[25px]">
        <IoIosArrowForward />
        </span>
    </div>
    </div>
</>
)
}