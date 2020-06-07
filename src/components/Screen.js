import React from 'react'
// import GBAon from '../img/gba-on.png';

import './Screen.css'

class Screen extends React.Component {
    state = {
        nameofstate: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isPowerOff: false
            })
        }, 1000)
    }

    componentDidMount = async()=> {
        console.log('rendering screen.js')
        await fetch("https://pokeapi.co/api/v2/pokemon/houndoom")
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render() {
        
        return (
            <section className="gamestate">
                <img src={GBAon} alt="GBA" />
                <p className ="disc">All official material from the POKEMON series, including characters and names are trademarks and copyright property of NINTENDO.</p>
                <p className ="disc">For educational purposes only.</p>
            </section>
        )
    }
}

export default Screen

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
            
        );
        }
    }  
}

export default GBA