import { useEffect } from 'react';
import { IconContext } from 'react-icons';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { getCookie, hasCookie } from 'cookies-next';
import {toggleTheme} from '@/app/utils/colorScheme'
import { useRouter } from 'next/navigation';
interface Props{
  theme:string,
  setTheme (arg0: string):void
}


export default function Header(props:Props) {
  const router = useRouter()

  let {theme, setTheme} = props
  
 
  const toggle = async()=>{
    console.log('toggling dark mode')
   
    await toggleTheme()
    
    router.refresh()
    
  }
  setTheme(hasCookie('theme')?getCookie('theme') as string:'light')

  
  return (
    <div className={`w-full h-24 flex items-center justify-between fixed top-0 ${theme == 'light' ? "bg-white " :" bg-black"} transition duration-700 ease-in-out`}>
      <div className={`${theme == 'light' ? "bg-black text-white" :" bg-white text-black"} w-20 h-16 flex justify-center items-center ml-4`}>
        #logo
      </div>
      <div className={`mr-8 ${theme == 'light' ? "bg-black " :" bg-white"} w-16 h-8 rounded-full   `}>
        <div className={`flex items-center justify-between ${theme === 'light'? 'flex-row':'flex-row-reverse'}`} onClick={toggle}>
          {theme === 'light' ?

            <IconContext.Provider value={{ className: "text-yellow-400 flex items-center text-3xl p-1" }}>
              <BsFillSunFill />
            </IconContext.Provider>
            :
            <IconContext.Provider value={{ className: "text-yellow-400 flex text-3xl p-[6px]" }}>
              <BsFillMoonStarsFill />
            </IconContext.Provider>
          }
        </div>
      </div>
    </div>
  );
}



function toogleTheme() {
  throw new Error('Function not implemented.');
}
 