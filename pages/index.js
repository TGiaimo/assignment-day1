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
    <div class="bg-gray-200">
    <div class="container mx-auto">
      <div class="uppercase text-center text-2xl"><b>pets under $20</b></div>
      <body class="">
        <div class="uppercase grid grid-cols-3 place-content-center gap-4">
          {cheapAnimalsFormatted}
        </div>
        <h2 class="uppercase text-center text-xl">Total Price of Pets Listed: ${totalCheapAnimalFee}</h2>
      </body>
    </div>
    </div>
  )
}
