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