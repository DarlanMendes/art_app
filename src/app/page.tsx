

'use client'

import { getCookie } from 'cookies-next'
import { ThemeContext } from '../../Context/Theme'
import Card from '../../components/Card'
import Header from '../../components/Header'
import {  useContext, useState } from 'react'



export default function Home() {
  const[cards, setCards] = useState([{id:"1",title:"Noite Estrelada", author:"Van Gogh", image:'/assets/images/noite estrelada.jpg'},
  {id:"2",title:"Noite Estrelada", author:"Van Gogh", image:'/assets/images/noite estrelada.jpg'}])
  const[fontSize, setFontSize] = useState('medium')


  const {theme, setTheme} = useContext(ThemeContext)
 
  
   

  

  return (
    <div className={`h-screen ${theme == 'light' ? "bg-white text-black" :" bg-black text-white"} transition duration-700 ease-in-out`}>
      <Header theme={theme} setTheme={setTheme} />
      <main className={`w-screen px-4 mt-24 ${theme == 'light' ? "bg-white text-black" :" bg-black text-white"} transition duration-700 ease-in-out`}>
       <hr className={`w-2/12 h-[3px] my-2 ${theme === 'light'?'bg-black':'bg-white'}`}/>
        <h1 className={`text-4xl font-bold`}>Bem-vindo!</h1>
        <p className='text-base mt-2'>Siga um tour pelo o que é mostrado no museu pelo display do celular</p>
        {cards.map((card, index)=>(
          <Card key={index}
          id={card.id}
          title={card.title} 
          author={card.author}
          image={card.image}
          fontSize={fontSize}
          />
        ))}
      </main>
    </div>

  )
}
