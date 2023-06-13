'use client'
import Card from '../../components/Card'
import Header from '../../components/Header'
import { useState } from 'react'


export default function Home() {
  const[cards, setCards] = useState([{id:"1",title:"Noite Estrelada", author:"Van Gogh", image:'/assets/images/noite estrelada.jpg'},
  {id:"2",title:"Noite Estrelada", author:"Van Gogh", image:'/assets/images/noite estrelada.jpg'}])
  const[fontSize, setFontSize] = useState('medium')
  return (
    <div className='h-screen'>
      <Header />
      <main className="w-screen px-4 ">
        Tela home
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
