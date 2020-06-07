import React from 'react'
import GBAoff from '../img/gba-off.png'
import GBAon from '../img/gba-on.png';

import './GBA.css'

class GBA extends React.Component {
    state = {
        isPowerOff: true
    }
    
    componentDidMount() {
        console.log('rendering GBA.js')
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
                <p className ="intro">something here</p>
            </section>
        );
        }
    }
    // render() {
    //     console.log('rendering GBA.js RENDER')
    //     return(
    //         <section className="PowerCheck">
    //             {this.state.isPowerOff ? <img src={GBAoff} alt="GBA switched off" /> 
    //             : <img src={GBAon} alt="GBA switched on" />}
    //         </section>
    //     )
    // }   
}

export default GBA