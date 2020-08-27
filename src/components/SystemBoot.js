// key imports
import React from 'react'
//import useSound from 'use-sound'

// components
//import GBAStart from '../audio/gba-startup.mp3'
import GBAoff from '../img/gba-off.png'
import GameMenu from './GameMenu'

import './SystemBoot.css'

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
        console.log('starting boot sequence...')
    }
    
    render () {
        if(this.state.isPowerOff === true) {
            setTimeout(() => {
                this.setState({
                    ready: true
                })
            }, 6000)
            console.log('loading title in 6s...')
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
                    {this.state.ready ? <GameMenu /> : null}
                </section>
            )
        }
    }  
}

export default SystemBoot