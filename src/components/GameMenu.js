// key imports
import React from 'react'

// components
import title from '../img/title.gif'
// import maintitle from '../audio/title-music.mp3'
// import Arceus from '../audio/cry.mp3'

import './GameMenu.css'

class GameMenu extends React.Component {
  state = {
    startClicked: false
  }

  handleClick() {
    console.log("player ready, loading...")
    setTimeout(() => {
      this.setState({
        startClicked: true
      })
    }, 3000)
    // play cry, freeze button, change to next screen

  }
  
    render() {
      if(this.state.startClicked === true) {
        return (
          <section className="playerReady">

          </section>
        );
      } else {
        console.log('title screen loaded, waiting for player...')
      return (
        <section className="titlescreen">
            <div id="titleGif"><img src={title} alt="Title Screen" /></div>
            <button onClick={() => this.handleClick()}>CLICK TO BEGIN</button>
        </section>
      )
    }
  }
}

export default GameMenu