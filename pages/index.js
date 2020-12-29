import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import Animals from '../public/animals.json'
import Animal from '../src/animals.js'

export default function Home() {
    
  const makeAnimal = a => <Animal type={a.type} state={a.state} adoption_fee={a.adoption_fee} img={a.img}/>
  const belowFee = p => p.adoption_fee <= 20
  const cheapAnimals = Animals.filter(belowFee)
  const cheapAnimalsFormatted = cheapAnimals.map(makeAnimal)
  const sumTogether = (x, y) => x + y.adoption_fee
  const totalCheapAnimalFee = cheapAnimals.reduce(sumTogether, 0)

  return (
    <div>
      <p class="capitalize grid grid-cols-3 gap-4 justify-items-center">{cheapAnimalsFormatted}</p>
      <h2 class="uppercase flex justify-center border-t-8">Total Price: {totalCheapAnimalFee}</h2>
    </div>
  )
}
