// key imports
import React from 'react'
import UIfx from 'uifx'

// components
import title from '../img/title.gif'
import maintitle from '../audio/title-music.mp3'
// import Arceus from '../audio/cry.mp3'

import './GameMenu.css'

const titlemusic = new UIfx(
   maintitle,
   {
     volume: 0.1,
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
               <audio src={titlemusic.play()} />
               <div id="titleGif"><img src={title} alt="Title Screen" /></div>
               <button onClick={() => this.handleClick()}>CLICK TO BEGIN</button>
            </section>
      )
    }
}

export default GameMenu