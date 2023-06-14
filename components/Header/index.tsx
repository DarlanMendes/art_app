import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { getCookie, hasCookie, setCookie } from 'cookies-next';

interface Props{
  theme:string,
  setTheme (arg0: string):void
}
export default function Header(props:Props) {
  
  let {theme, setTheme} = props
  useEffect(() => {
    if (hasCookie('theme')) {
      setTheme((getCookie('theme') as string))
    }
  }, [theme])
  function handleTheme() {
    if (theme === 'light') {
      setTheme('dark')
      setCookie('theme', 'dark')
    } else {
      setTheme('light')
      setCookie('theme', 'light')
    }
  }
  return (
    <div className={`w-full h-24 flex items-center justify-between fixed top-0 ${theme == 'light' ? "bg-white " :" bg-black"} transition duration-700 ease-in-out`}>
      <div className={`${theme == 'light' ? "bg-black text-white" :" bg-white text-black"} w-20 h-16 flex justify-center items-center ml-4`}>
        #logo
      </div>
      <div className={`mr-8 ${theme == 'light' ? "bg-black " :" bg-white"} w-16 h-8 rounded-full   `}>
        <div className={`flex items-center justify-between ${theme === 'light'? 'flex-row':'flex-row-reverse'}`} onClick={() => { handleTheme() }}>
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
