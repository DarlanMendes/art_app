import { cookies } from 'next/headers'




const getTheme = async ()=>{
    let cookie = cookies()
    return cookie.get('theme')
}




export default async function ButtonFontSize(){

    const theme = await getTheme()
console.log(theme)

    return(
        <>
        <div className={`${theme?.value ==='light'?'bg-white text-black':'bg-black text-white'} "w-20 flex justify-center items-center`} >
            <button  className="w-8 h-8 bg-black text-white select-none p-4 whitespace-nowrap rounded-tl-full rounded-bl-full  flex justify-center items-center cursor-none md:cursor-pointer  active:bg-slate-800">-a</button>
            <button  className="w-8 h-8 bg-black    text-white select-none p-4 whitespace-nowrap rounded-tr-full rounded-br-full  flex justify-center items-center cursor-none md:cursor-pointer active:bg-slate-800 ">+A</button>
        </div>



        </>
    )
}