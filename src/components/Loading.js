import React from 'react'
import Spinner from '../img/pokeball.png'

import './Loading.css'

function Loading() {
   return(
      <section className="loading">
         <div id="pokeball">
            <img src={Spinner}alt="Spinner" />
         </div>
         <p>Loading<span></span></p>
      </section>
   )
}

export default Loading