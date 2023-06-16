'use client'

import Card from '../../components/Card'
import Header from '../../components/Header'
import {  useState } from 'react'



export default function Home() {
  const[cards, setCards] = useState([{id:"1",title:"Noite Estrelada", author:"Van Gogh", image:'/assets/images/noite estrelada.jpg'},
  {id:"2",title:"Noite Estrelada", author:"Van Gogh", image:'/assets/images/noite estrelada.jpg'}])
  const[fontSize, setFontSize] = useState('medium')


  const [theme, setTheme] = useState('light')

  // useEffect(() => {
  //   if (hasCookie('theme')) {
  //     setTheme((getCookie('theme') as string))
  //   }
  // }, [theme])


  return (
    <div className=''>
      <Header theme={theme} setTheme={setTheme} />
      <main className={`w-screen px-4 mt-24 ${theme == 'light' ? "bg-white text-black" :" bg-black text-white"} transition duration-700 ease-in-out`}>
       
        <h1>Bem-vindo!</h1>
        <p>Siga um tour pelo o que é mostrado no museu pelo display do celular</p>
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
