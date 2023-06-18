'use client'
import { useState } from "react";


interface Props{

}
export default function ButtonTranslate(props:any){
    const [language, setLanguage] = useState('PT-BR')
    function handleLanguage(){
        if(language ==='PT-BR'){
            setLanguage('EN')
        }else{
            setLanguage('PT-BR')
        }
    }
    return(
        <>
        <button
                className="py-2 px-4 bg-black text-white mb-2"
                onClick={()=>{handleLanguage()}}
                >
                    {language === 'PT-BR' ? ' Translate to English' : 'Traduzir para Português'}
                </button>
                <p>
                    {language === 'PT-BR' ? props.art.descriptionPT : props.art.descriptionEN}
                </p>
        </>
    )
}