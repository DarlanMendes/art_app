'use client'
import Header from '../../components/Header'
import { useState } from 'react'
import Card from '../../components/Card'

export default function Home() {
  const[cards, setCards] = useState([{id:"1",title:"Noite Estrelada", author:"Van Gogh", image:''},{id:"2",title:"Noite Estrelada", author:"Van Gogh", image:''}])
  return (
    <>
      <Header />
      <main className="">
        Tela home
        <h1>Bem-vindo!</h1>
        <p>Siga um tour pelo o que é mostrado no museu pelo display do celular</p>
        {cards.map((card, index)=>(
          <Card key={index}
          id={card.id}
          title={card.title} 
          author={card.author}
          image={card.image}
          />
        ))}
      </main>
    </>

  )
}
