// key imports
import React from 'react'
import UIfx from 'uifx'

// components
import Title from '../img/title.gif'
import MainTitle from '../audio/title-music.mp3'
// import Arceus from '../audio/cry.mp3'

import './GameMenu.css'

const TitleMusic = new UIfx(
   MainTitle,
   {
     volume: 0.4,
     throttleMs: 100
   }
)

// const ArceusCry = new UIfx(
//     Arceus,
//     {
//       volume: 0.4,
//       throttleMs: 100
//     }
// )

class GameMenu extends React.Component {
    // state = {

    // }

    // handleClick() {
    //   <audio src={ArceusCry.play()} />
    // }

    render() {
      return (
        <section className="titlescreen">
               <audio src={TitleMusic.play()} />
               <div id="titleGif"><img src={Title} alt="Title Screen" /></div>
               <button onClick={() => this.handleClick()}>CLICK TO BEGIN</button>
            </section>
      )
    }
}

export default GameMenu