import React from 'react'
import GBAoff from '../img/gba-off.png'
import GBAon from '../img/gba-on.png'
import UIfx from 'uifx'
import GBAStartup from '../audio/gba-startup.mp3'

import './GBA.css'

const GBAsound = new UIfx(
    GBAStartup,
    {
      volume: 0.4,
      throttleMs: 100
    }
)

class GBA extends React.Component {
    state = {
        isPowerOff: true
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isPowerOff: false
            })
        }, 1000)
    }

    render () {
        if(this.state.isPowerOff === true) {
        return (
            <section className="gamestate">
                <img src={GBAoff} alt="GBA" />
            </section>
        );
        } else {
        return (
            <section className="gamestate">
                <img src={GBAon} alt="GBA" />
                <audio src={GBAsound.play()} />
                <p className ="intro">REACT | POKEAPI</p>
                <p className ="intro2">Bex Birkett</p>
            </section>
        );
        }
    }  
}

export default GBA