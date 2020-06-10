// key imports
import React from 'react'
import UIfx from 'uifx'

// components
import GBAStart from '../audio/gba-startup.mp3'
import GBAoff from '../img/gba-off.png'
import GameMenu from './GameMenu'

import './SystemBoot.css'

const GBAsound = new UIfx(
    GBAStart,
    {
      volume: 0.2,
      throttleMs: 100
    }
)

class SystemBoot extends React.Component {
    state = {
        isPowerOff: true,
        ready: false
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isPowerOff: false
            })
        }, 1000)
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.setState({
                ready: true
            })
        }, 4000)
    }

    componentWillUnmount(){
        clearTimeout(this.setTimeout)
    }
    
    render () {
        if(this.state.isPowerOff === true) {
            return (
                <section className="consoleOff">
                    <img src={GBAoff} alt="GBA" />
                </section>
            );
        } else {
            return (    
                <section className="gameState">
                    <p className="title">REACT | POKEAPI</p>
                    <p className="name">Bex Birkett</p>
                    <audio src={GBAsound.play()} />
                    {this.state.ready ? <GameMenu /> : null}
                </section>
            )
        }
    }  
}

export default SystemBoot