
import Link from "next/link"
import { IconContext } from "react-icons"
import { IoIosArrowForward } from 'react-icons/io'

interface Props {
    id: string,
    title: string,
    author: string,
    image: string,
    fontSize: string
}
export default function Card(props: Props) {
    console.log(props.fontSize)
    return (
        <Link href={`/artdetailed/${props.id}`}>
            <div className="h-max-56 mt-8" >
                <img src={props.image}
                    alt={props.title}
                    style={{ height: "calc((124/288) * (100vw - 32px))", width: "100%", objectFit: "cover" }}
                />
                <div className="p-4 flex flex-col ">
                    <span className={`${props.fontSize === 'medium' ? 'text-sm' : 'text-medium'} mb-2`} >Artista</span>
                    <div className="flex flex-row items-center justify-between">
                        <h2 className={`basis-11/12 font-semibold ${props.fontSize === 'medium' ? "text-xl" : "text-2xl"}`}>
                            {props.author} - {props.title}
                        </h2>
                        <IconContext.Provider
                            value={props.fontSize === 'medium' ? { className: "text-xl mx-0 basis-1/12 flex flex-col items-center" } :
                                { className: "text-2xl mx-0 basis-1/12 flex flex-col items-center" }}>
                            <IoIosArrowForward />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </Link>

    )
}

