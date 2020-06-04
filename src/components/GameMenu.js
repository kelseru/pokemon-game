import React from 'react'
import './styling/GameMenu.css'

function GameMenu() {
   return (
      <section className="loading">
         <img src={Spinner}alt="Spinner" />
         <p>Loading<span></span></p>
      </section>
   )
}

export default GameMenu